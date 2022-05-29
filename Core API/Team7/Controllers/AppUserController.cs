using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
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

        public AppUserController(UserManager<AppUser> userManager,
            //IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory,
            IConfiguration configuration)
        {
            _userManager = userManager;
            //_claimsPrincipalFactory = claimsPrincipalFactory;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(UserViewModel userViewModel)
        {
            var user = await _userManager.FindByNameAsync(userViewModel.EmailAddress);

            if (user == null)
            {
                //Create new user - no existing account with matching email address
                user = new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = userViewModel.EmailAddress,
                    Email = userViewModel.EmailAddress
                };

                var result = await _userManager.CreateAsync(user, userViewModel.Password);

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
                    return GenerateJWTToken(user);
                }
                catch (Exception err)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, err + "     Internal error. Please contact support");
                }
            } else
            {
                return NotFound("The provided email or password is incorrect. Please check your password or register an account.");
            }
        }

        [HttpGet]
        private ActionResult GenerateJWTToken(AppUser appUser)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, appUser.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, appUser.UserName)
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
