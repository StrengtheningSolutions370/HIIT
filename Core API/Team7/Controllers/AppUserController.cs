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
using System.Threading;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.Services;
using System.Net.Http.Headers;
using Team7.ViewModels;
using Newtonsoft.Json.Linq;
using System.Web;
using System.IO;
using System.Collections.Generic;

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
        private readonly IEmployeeRepo _employeeRepo;
        private readonly IPasswordHistoryRepo _passwordHistoryRepo;
        private readonly ITitleRepo TitleRepo;

        public AppUserController(ITitleRepo TitleRepo, IEmployeeRepo employeeRepo, IPasswordHistoryRepo passwordHistory, IClientRepo clientRepo, ITitleRepo titleRepo, UserManager<AppUser> userManager, IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory, IConfiguration configuration, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _passwordHistoryRepo = passwordHistory;
            _configuration = configuration;
            _roleManager = roleManager;
            _titleRepo = titleRepo;
            _clientRepo = clientRepo;
            _employeeRepo = employeeRepo;
            this.TitleRepo = TitleRepo;
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
        [Route("testemail")]
        public async Task<IActionResult> Email()
        {
            Email e = new Email("shannonlnoel@icloud.com", "Subject", "Body");
            Thread thr = new Thread(new ThreadStart(e.sendEmail));
            thr.Start();
            return Ok();
        }

        [HttpGet]
        [Route("emaillist")]
        public async Task<IActionResult> list()
        {
            List<AppUser> users = _userManager.Users.ToList();

            //Email e = new Email();
            //e.emailList(users, "subject here", "body here");
            return Ok();
        }

        static string timeStamp()
        {
            return DateTimeOffset.Now.ToUnixTimeSeconds().ToString();
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("uploadindemnity")]
        public async Task<IActionResult> uploadIndemnity()
        {
            string unix = timeStamp(); //to stamp file creation

            var formCollection = await Request.ReadFormAsync();

            string s = formCollection.Keys.FirstOrDefault();
            string decode = HttpUtility.UrlDecode(s);
            var client = JObject.Parse(decode);

            string AspId = client["AspId"].ToString();
            Client cli = await _clientRepo.GetClientIdAsync(AspId);

            var ind = formCollection.Files.FirstOrDefault();

            var indemnityFolder = Path.Combine("Resources", "Clients", "Indemnity");
            var indemnityPath = Path.Combine(Directory.GetCurrentDirectory(), indemnityFolder);
            //storage
            var extension = ind.ContentType.Split('/')[1];
            var indemnityFileName = ContentDispositionHeaderValue.Parse(AspId).ToString() + "_" + unix + ".pdf";
            cli.Idemnity = indemnityFileName; //update for the extension

            var indemnityFullPath = Path.Combine(indemnityPath, indemnityFileName);
            using (var stream = new FileStream(indemnityFullPath, FileMode.Create))
            {
                ind.CopyTo(stream);
            }

            _clientRepo.Update(cli);
            await _clientRepo.SaveChangesAsync();

            return Ok();
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("updateclient")]
        public async Task<IActionResult> updateClientInformation()
        {
            string unix = timeStamp(); //to stamp file creation

            var formCollection = await Request.ReadFormAsync();

            string s = formCollection.Keys.FirstOrDefault();
            string decode = HttpUtility.UrlDecode(s);
            var client = JObject.Parse(decode);

            string email = client["emailAddress"].ToString();
            string Name = client["firstName"].ToString();
            string Surname = client["lastName"].ToString();
            string Number = client["phoneNumber"].ToString();
            int titleId = Convert.ToInt32(client["TitleId"].ToString());
            int dob = Convert.ToInt32(client["dob"].ToString());
            string AspId = client["AspId"].ToString();

            var user = await _userManager.FindByIdAsync(AspId);
            Client update = await _clientRepo.GetClientIdAsync(AspId);

            var photo = formCollection.Files.FirstOrDefault();

            if (photo != null)
            {
                if (update.Photo != null)
                    deletePhoto(update.Photo);
                var photoFolder = Path.Combine("Resources", "Clients", "Images");
                var photoPath = Path.Combine(Directory.GetCurrentDirectory(), photoFolder);
                //storage
                var extension = photo.ContentType.Split('/')[1];
                var photoFileName = ContentDispositionHeaderValue.Parse(user.Id).ToString() + "_" + unix + "." + extension;
                update.Photo = photoFileName; //update for the extension

                var photoFullPath = Path.Combine(photoPath, photoFileName);
                using (var stream = new FileStream(photoFullPath, FileMode.Create))
                {
                    photo.CopyTo(stream);
                }

            }

            update.DOB = dob;
            _clientRepo.Update(update);
            await _clientRepo.SaveChangesAsync();

            //set new values for ASP:
            user.FirstName = Name;
            user.LastName = Surname;
            user.Email = email;
            user.PhoneNumber = Number;
            user.Title = await TitleRepo._GetTitleIdAsync(Convert.ToInt32(titleId));

            await _userManager.UpdateAsync(user);

            return Ok();
        }

        static void deletePhoto(string fname)
        {
            var imageFolder = Path.Combine("Resources", "Clients", "Images");
            var imagePath = Path.Combine(Directory.GetCurrentDirectory(), imageFolder, fname);
            System.IO.File.Delete(imagePath);
        }

        [HttpGet]
        [Route("getuser")]
        public async Task<IActionResult> getUser(string id)
        {
            //query for the user in employee table:
            var emp = await _employeeRepo.GetFullEmployeeByIDAsync(id);
            //query for the user in client table:
            var cli = await _clientRepo.GetClientIdAsync(id);

            if (emp != null)
            {
                //employee called the endpoint
                IQueryable<AppUser> user = _userManager.Users.Where(usr => usr.Id == id).Select(usr => new AppUser
                {
                    FirstName = usr.FirstName,
                    LastName = usr.LastName,
                    Email = usr.Email,
                    PhoneNumber = usr.PhoneNumber,
                    Title = new Title
                    {
                        TitleID = usr.Title.TitleID,
                        Description = usr.Title.Description
                    }
                });
                return Ok(new
                {
                    user, 
                    emp
                });
            }

            if (cli != null)
            {
                IQueryable<AppUser> user = _userManager.Users.Where(usr => usr.Id == id).Select(usr => new AppUser
                {
                    FirstName = usr.FirstName,
                    LastName = usr.LastName,
                    Email = usr.Email,
                    PhoneNumber = usr.PhoneNumber,
                    Title = new Title
                    {
                        TitleID = usr.Title.TitleID,
                        Description = usr.Title.Description
                    }
                });
                //client called the endpoint
                return Ok(new
                {
                    user,
                    cli
                });
            }

            //user is a superuser:
            try
            {
                IQueryable<AppUser> user = _userManager.Users.Where(usr => usr.Id == id).Select(usr => new AppUser
                {
                    FirstName = usr.FirstName,
                    LastName = usr.LastName,
                    Email = usr.Email,
                    //PhoneNumber = usr.PhoneNumber,
                    //Title = new Title
                    //{
                    //    TitleID = usr.Title.TitleID,
                    //    Description = usr.Title.Description
                    //}
                });
                return Ok(user);
            } catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            //does not exisit in either - must be a superuser:
            //if (user != null)
            //{
            //    return Ok(user);
            //}

            return BadRequest();
        }

        [HttpGet]
        [Route("getallclients")]
        public async Task<IActionResult> getAllClients()
        {
            var query = await _clientRepo.GetAllClientsAsync();
            return Ok(query);
        }

        [HttpDelete]
        [Route("deleteclient")]
        public async Task<IActionResult> deleteClient(string id) //pass the AppUserId
        {

            var client = await _userManager.FindByIdAsync(id);
            if (client == null) return BadRequest();

            //delete from client:
            try
            {
                var clientrepo = await _clientRepo.GetClientIdAsync(id);

                if (clientrepo.Booking != null)
                if (clientrepo.Booking.Count() != 0)
                    return Conflict(new { client = client, data = clientrepo });

                if (clientrepo.Measurement.Count() != null)
                if (clientrepo.Measurement.Count() != 0)
                    return Conflict(new { client = client, data = clientrepo });


                _clientRepo.Delete(clientrepo);
                await _clientRepo.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
            //delete from app user:
            await _userManager.DeleteAsync(client);


            return Ok();
        }

        [HttpPost]
        [Route("verifyotp")]
        public async Task<IActionResult> VerifyOtp(UserViewModel otp)
        {
            var user = await _userManager.FindByEmailAsync(otp.EmailAddress);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The provided email does not exist.");
            }

            if (user.OTP == otp.OTP)
            {
                user.OTP = null;
            }
            else
            {
                return StatusCode(StatusCodes.Status403Forbidden, "Incorrect OTP pin provided."); //CHECKHERE
            }

            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        [Route("validatepassword")]
        public async Task<IActionResult> ValidatePassword(UserViewModel uvm)
        {
            //check if the user exisits:
            var user = await _userManager.FindByEmailAsync(uvm.EmailAddress);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The provided email does not exist.");
            }

            //check the password:
            var check = await _userManager.CheckPasswordAsync(user, uvm.Password);
            if (!check)
            {
                return StatusCode(StatusCodes.Status403Forbidden, "Incorrect old password."); //CHECK HERE
            }

            //password was valid:
            return Ok("Password is correct.");
        }

        [HttpPost]
        [Route("checkpasswordhistory")]
        public async Task<IActionResult> CheckPasswordHistory(UserViewModel uvm)
        {

            var chk = uvm.Password;
            var email = uvm.EmailAddress;

            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The provided email does not exist.");
            }

            var history = await _passwordHistoryRepo.GetByUserIdAsync(user.Id);

            if (history == null)
                return Ok(); //user has not history, therefore accept

            foreach (var item in history)
            {
                var flag = _userManager.PasswordHasher.VerifyHashedPassword(user, item.Hashed, chk);

                if (flag != 0) //if true = a password matched
                {
                    return StatusCode(StatusCodes.Status406NotAcceptable, "New password cannot be old password.");
                }
            }

            return Ok("Password is acceptable.");
        }

        [HttpPost]
        [Route("changepassword")]
        public async Task<IActionResult> ChangePassword(UserViewModel uvm)
        {

            if (uvm.newPassword.Length < 8)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable, "Password should be a minimum of 8 characters.");
            }

            var user = await _userManager.FindByEmailAsync(uvm.EmailAddress);

            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "The provided email does not exist.");
            }

            user.PasswordHistory = await _passwordHistoryRepo.GetByUserIdAsync(user.Id);

            //check the old password:
            var check = await _userManager.CheckPasswordAsync(user, uvm.Password);

            if (!check)
            {
                return StatusCode(StatusCodes.Status403Forbidden, "Incorrect old password."); //CHECK HERE

            }

            var cnew = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, uvm.newPassword);

            if (cnew != 0)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable, "New password cannot be current password.");
            }


            //old password is correct, check new password if in history
            var history = user.PasswordHistory;
            if (history == null)
            {
                //user does not have a history:
                PasswordHistory old = new PasswordHistory
                {
                    Date = DateTime.Now,
                    UserID = user.Id,
                    Hashed = user.PasswordHash,
                };

                //add old to history table:
                _passwordHistoryRepo.Add(old);
                await _passwordHistoryRepo.SaveChangesAsync();

                //set new password for the user and history
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                await _userManager.ResetPasswordAsync(user, token, uvm.newPassword);
                await _userManager.UpdateAsync(user);
                user.PasswordHistory = await _passwordHistoryRepo.GetByUserIdAsync(user.Id);
                await _userManager.UpdateAsync(user);
                return Ok();
            }

            //check through the history and try match a password:
            foreach (var h in history)
            {
                var flag = _userManager.PasswordHasher.VerifyHashedPassword(user, h.Hashed, uvm.newPassword);
                if (flag != 0) //if true = a password matched
                {
                    return StatusCode(StatusCodes.Status406NotAcceptable, "New password cannot be old password."); //CHECK HERE
                }
            }

            //old password valid, new password not in history and email exists, set new password:
            try
            {
                //create old password for history:
                PasswordHistory old = new PasswordHistory
                {
                    Date = DateTime.Now,
                    UserID = user.Id,
                    Hashed = user.PasswordHash
                };

                //add old to history table:
                _passwordHistoryRepo.Add(old);
                await _passwordHistoryRepo.SaveChangesAsync();

                //set new password for the user
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                await _userManager.ResetPasswordAsync(user, token, uvm.newPassword);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error."); //this might fail because of pass req in the startup.cs
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

            user.PasswordHistory = await _passwordHistoryRepo.GetByUserIdAsync(user.Id);

            if (user.PasswordHistory != null)
            {
                //user has a history of passwords
                foreach (var p in user.PasswordHistory)
                {
                    var flag = _userManager.PasswordHasher.VerifyHashedPassword(user, p.Hashed, uvm.newPassword);
                    if (flag != 0) //if true = a password matched
                    {
                        return StatusCode(StatusCodes.Status403Forbidden, "New Password can not have been used before."); //CHECK HERE
                    }
                }
            }

            //old password valid and email exists and not previous password, set new password:
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            try
            {
                var flag = await _userManager.ResetPasswordAsync(user, token, uvm.newPassword);
            }
            catch (Exception ex)
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
                return StatusCode(StatusCodes.Status404NotFound, "The provided email does not exist.");
            }

            string phone = "+27" + user.PhoneNumber.TrimStart(new Char[] { '0' }); ;
            Sms s = new Sms();
            string otp = generateOTP();
            user.OTP = otp;
            string msg = "Hi, " + user.FirstName + ". Your otp is " + otp;

            bool smsFlag = false;
            bool emailFlag = false;
            try
            {
                s.sendSMS(phone, msg);
            }
            catch (Exception e)
            {
                smsFlag = true;
            }
            try
            {
                //Email e = new Email();
                //TODO : this needs to be fixed to the actual email:
                //e.sendEmail("shannonlnoel@icloud.com", "Strengthening Solutions", otp);
                Email email = new Email(user.Email, "Strengthening Solutions", otp);
                Thread thr = new Thread(new ThreadStart(email.sendEmail));
                thr.Start();
            }
            catch (Exception ex)
            {
                emailFlag = true;
            }
            if (smsFlag && emailFlag)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "OTP FAILED to send");
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
                await _userManager.AddToRoleAsync(user, role); //role="client"

                //make entry in the client table:
                var clientRec = new Client
                {
                    UserID = AspId,
                    Idemnity = "",
                    AppUser = user,
                    DOB = userViewModel.dob
                };

                _clientRepo.Add(clientRec);
                await _clientRepo.SaveChangesAsync();

                var subject = "Congratulations on becoming part of the BSC team!";

                var body = "Dear Bester Strengthening Client,<br><br>You have successfully registered!<br><br>On behalf of the Bester Strength and Conditioning team, we would like to say welcome and thank you for joining us to become the strongest we can be.<br><br>Below are your user/login details.<br><br>Username: " + userViewModel.EmailAddress + "<br><br><br>Regards,<br>BSC team";

                Email e = new Email(userViewModel.EmailAddress, subject, body);
                Thread thr = new Thread(new ThreadStart(e.sendEmail));
                thr.Start();

            }
            else
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
                    return StatusCode(StatusCodes.Status500InternalServerError, new { error = "Internal error. Please contact support." });
                }
            }
            else
            {
                return NotFound("Incorrect username or password.");
            }
        }

        //static String sha256(string val)
        //{
        //    StringBuilder stringBuilder = new StringBuilder();
        //    using (SHA256 hasher = SHA256Managed.Create())
        //    {
        //        Encoding encoder = Encoding.UTF8;
        //        Byte[] result = hasher.ComputeHash(encoder.GetBytes(val));
        //        foreach (Byte b in result)
        //            stringBuilder.Append(b.ToString("x2"));
        //    }
        //    return stringBuilder.ToString();
        //}

        //Changing comments to test if the API calls this uodate when deployed
        [HttpGet]
        private async Task<object> GenerateJWTTokenAsync(AppUser appUser)
        {
            var roleArray = await _userManager.GetRolesAsync(appUser);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, appUser.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, appUser.UserName),
                new Claim(ClaimTypes.Role, roleArray[0])
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:key"]));
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

        [HttpPost]
        [Route("quoteEmail")]
        public async Task<IActionResult> quoteEmail([FromForm] Quote quoteObj)
        {
            var body = Request.Body;
            var formCollection = await Request.ReadFormAsync();

            //1. convert employee back to an object and pull values 
            //var s = formCollection.Keys.();
            //string decode = HttpUtility.UrlDecode(formCollection);
            //var quoteObj = JObject.Parse(decode);
            //string? optDescription = null;

            string clientAddress = quoteObj.clientMail.ToString();
            //Look at replacing with a dedicated BSC quotations email
            string employeeAddress = quoteObj.employeeMail.ToString();
            string saleQuoteName = quoteObj.saleQuoteName.ToString();
            int saleQuoteID = ((int)quoteObj.saleQuoteID);
            var currentTime = new DateTime().ToShortDateString();
            var optDescription = quoteObj.optDescription; ;



            var bodyClient = "<h1>BSC product quotation: " + saleQuoteName + " </h1> <br /> <hr>" +
                "<p><strong>Thank you for your quotation request</strong></p>" +
                "<p>A sales consultant will be in contact with you shortly</p>" +
                "<br /> <hr>";
            Email emailClient = new Email(clientAddress, saleQuoteName + " quotation request", bodyClient);

            var bodyEmployee = "<h1>BSC product quotation: " + saleQuoteName + " </h1> <br /> <hr>" +
                "<p><strong>New client product request, respond to:</strong>" + clientAddress + "</strong></p>" +
                "<p>Date of request: " + currentTime + "</p>" +
                
                "<p><strong> Client message: " + optDescription
                + "<br /> <hr>";
            Email emailEmployee = new Email(employeeAddress, saleQuoteName + " quotation request", bodyEmployee);

            Thread thread1 = new Thread(new ThreadStart(emailClient.sendEmail));
            Thread thread2 = new Thread(new ThreadStart(emailEmployee.sendEmail));
            try
            {
                //email the password to the user:
                /*emailClient.sendEmail(clientAddress, saleQuoteName + " quotation request", bodyClient);
                emailEmployee.sendEmail(employeeAddress, saleQuoteName + " quotation request", bodyEmployee);*/
                thread1.Start();
                thread2.Start();
            }
            catch (Exception ex)
            {
                StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support" + ex);
            }

            return Ok("Email successfully sent.");
        }
    }
}
