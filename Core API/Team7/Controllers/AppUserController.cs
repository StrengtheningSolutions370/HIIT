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

        public AppUserController(UserManager<AppUser> userManager, IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory, IConfiguration configuration, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            //_claimsPrincipalFactory = claimsPrincipalFactory;
            _configuration = configuration;
            _roleManager = roleManager;
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

                //Create new user - no existing account with matching email address
                user = new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = userViewModel.EmailAddress,
                    Email = userViewModel.EmailAddress,
                    PhoneNumber = userViewModel.phoneNumber,
                    FirstName = userViewModel.firstName,
                    LastName = userViewModel.lastName,
                };

                var result = await _userManager.CreateAsync(user, userViewModel.Password);

                //adding role to the client
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, role); //role="client"
                }

                if (result.Errors.Any())
                {
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
