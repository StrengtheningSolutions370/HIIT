using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.Services;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        //private readonly IUserClaimsPrincipalFactory<AppUser> _claimsPrincipalFactory;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ITitleRepo _titleRepo;
        private readonly IClientRepo _clientRepo;


        public AppUserController(IClientRepo clientRepo, ITitleRepo titleRepo, UserManager<AppUser> userManager, IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory, IConfiguration configuration, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            //_claimsPrincipalFactory = claimsPrincipalFactory;
            _configuration = configuration;
            _roleManager = roleManager;
            _titleRepo = titleRepo;
            _clientRepo = clientRepo;
        }
        static string generateOTP()
        {
            Random random = new Random();
            string oneTimePin = "";
            for (int i = 0; i < 6; i++)
            {
                oneTimePin += random.Next(0, 10).ToString();
            }
            return oneTimePin;
        }

        [HttpPost]
        [Route("verifyotp")]
        public async Task<IActionResult> VerifyOtp(UserViewModel otp)
        {
            var user = await _userManager.FindByEmailAsync(otp.EmailAddress);
            if (user == null)
            {
                return NotFound("The provided email does not exist.");
            }

            if (user.OTP == otp.OTP)
            {
                user.OTP = null;
            } else
            {
                return Forbid("OTP provided is not valid.");
            }

            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        [Route("changepassword")]
        public async Task<IActionResult> ChangePassword(UserViewModel uvm)
        {

            var user = await _userManager.FindByEmailAsync(uvm.EmailAddress);
            if (user == null)
            {
                return NotFound("The provided email does not exist.");
            }

            var check = await _userManager.CheckPasswordAsync(user, uvm.Password);

            if (!check)
            {
                return Forbid("Incorect old password provided.");
            }

            //old password valid and email exists, set new password:
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            try
            {
                await _userManager.ResetPasswordAsync(user, token, uvm.newPassword);
            } catch (Exception ex)
            {
                Forbid("Password does not meet the requirements.");
            }
            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        [Route("setnewpassword")]
        public async Task<IActionResult> SetNewPassword(UserViewModel uvm)
        {

            var user = await _userManager.FindByEmailAsync(uvm.EmailAddress);

            if (user == null)
            {
                return NotFound("The provided email does not exist.");
            }

            //old password valid and email exists, set new password:
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            try
            {
                var flag = await _userManager.ResetPasswordAsync(user, token, uvm.newPassword);
            } catch (Exception ex)
            {
                return Forbid("Password does not meet the requirements.");
            }
            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        [Route("sendotp")]
        public async Task<IActionResult> SendOTP(UserViewModel uvm)
        {
            //get user using the email:
            var user = await _userManager.FindByEmailAsync(uvm.EmailAddress);

            if (user == null)
            {
                return NotFound("The provided email does not exist.");
            }

            string phone = "+27" + user.PhoneNumber.TrimStart(new Char[] { '0' }); ;
            Sms s = new Sms();
            string otp = generateOTP();
            user.OTP = otp;
            string msg = "Hi, " + user.FirstName + ". Your otp is " + otp;

            try
            {
                s.sendSMS(phone, msg);
            } catch (Exception e)
            {

            }
            try
            {
                Email e = new Email();
                //TODO : this needs to be fixed to the actual email:
                e.sendEmail("shannonlnoel@icloud.com", "Strengthening Solutions", otp);
            } catch (Exception ex)
            {

            }
            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(UserViewModel userViewModel)
        {

            //force role to client
            var role = "client";

            //check if role exists:
            var exists = await _roleManager.FindByNameAsync(role);
            if (exists == null)
            {
                //role does not exists yet:
                //create the role here:
                IdentityRole newRole = new IdentityRole
                {
                    Name = role
                };
                IdentityResult result = await _roleManager.CreateAsync(newRole);

            }

            var user = await _userManager.FindByNameAsync(userViewModel.EmailAddress);

            if (user == null)
            {
                string AspId = Guid.NewGuid().ToString();
                //Create new user - no existing account with matching email address
                user = new AppUser
                {
                    Id = AspId,
                    UserName = userViewModel.EmailAddress,
                    Email = userViewModel.EmailAddress,
                    PhoneNumber = userViewModel.phoneNumber,
                    FirstName = userViewModel.firstName,
                    LastName = userViewModel.lastName,
                    Title = await _titleRepo._GetTitleIdAsync(Convert.ToInt32(userViewModel.TitleId))
                };

                var result = await _userManager.CreateAsync(user, userViewModel.Password);

                //adding role to the client
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, role); //role="client"

                    //make entry in the client table:
                    var clientRec = new Client
                    {
                        UserID = AspId
                    };

                    _clientRepo.Add(clientRec);

                } else {
                    StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                }

            } else
            {
                return Forbid("Account with provided email address already exists");
            }
            return Ok("Account created successfully");
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UserViewModel userViewModel)
        {
            var user = await _userManager.FindByNameAsync(userViewModel.EmailAddress);

            if (user != null && await _userManager.CheckPasswordAsync(user, userViewModel.Password))
            {
                try
                {
                    //var principal = await _claimsPrincipalFactory.CreateAsync(user);
                    //await HttpContext.SignInAsync(IdentityConstants.ApplicationScheme, principal);
                    return Ok(await GenerateJWTTokenAsync(user));
                }
                catch (Exception err)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, err + " Internal error. Please contact support");
                }
            } else
            {
                return NotFound("The provided email or password is incorrect. Please check your password or register an account.");
            }
        }

        static String sha256(string val)
        {
            StringBuilder stringBuilder = new StringBuilder();
            using (SHA256 hasher = SHA256Managed.Create())
            {
                Encoding encoder = Encoding.UTF8;
                Byte[] result = hasher.ComputeHash(encoder.GetBytes(val));
                foreach (Byte b in result)
                    stringBuilder.Append(b.ToString("x2"));
            }
            return stringBuilder.ToString();
        }

        [HttpGet]
        private async Task <object> GenerateJWTTokenAsync(AppUser appUser)
        {
            var roleArray = await _userManager.GetRolesAsync(appUser);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, appUser.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, appUser.UserName),
                new Claim(ClaimTypes.Role, roleArray[0])
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["Tokens:Issuer"],
                _configuration["Tokens:Audience"],
                claims,
                signingCredentials: credentials,
                expires: DateTime.UtcNow.AddHours(12)
                );

            return Created("", new
            {
                //user sent through only for debugging - remove soon
                user = appUser,
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        //[HttpPost]
        //[Route("Logout")]
        //[Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //public async Task<IActionResult> Logout(UserViewModel userViewModel)
        //{
        //    var user = await _userManager.FindByNameAsync(userViewModel.EmailAddress);

        //    try
        //    {
        //        await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
        //        return Ok("Successfully logged out of account: " + user.Email);
        //    }
        //    catch (Exception err)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, err + "     Internal error. Please contact support");
        //    }

        ////    if (user != null && await _userManager.CheckPasswordAsync(user, userViewModel.Password))
        ////    {

        ////    }
        ////    else
        ////    {
        ////        return NotFound("Account with specified email does not exist. Please register a new account.");
        ////    }

        ////    var loggedInUser = new UserViewModel { EmailAddress = user.Email, Password = user.PasswordHash };
        ////    return Ok(loggedInUser);
        // }


    }
}
