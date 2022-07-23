using iTextSharp.text.html;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Team7.Models;
using Team7.Models.Repository;
using Team7.ViewModels;
using Team7.Services;
using System.Net.Http.Headers;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepo EmployeeRepo;
        private readonly IEmployeeTypeRepo EmployeeTypeRepo;
        private readonly ITitleRepo TitleRepo;
        private readonly IQualificationRepo QualificationRepo;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;
        public EmployeeController(UserManager<AppUser> userManager, IEmployeeRepo employeeRepo, RoleManager<IdentityRole> roleManager, ITitleRepo TitleRepo, IEmployeeTypeRepo EmployeeTypeRepo, IQualificationRepo QualificationRepo)
        {
            this.EmployeeRepo = employeeRepo;
            this.TitleRepo = TitleRepo;
            this.EmployeeTypeRepo = EmployeeTypeRepo;
            this.QualificationRepo = QualificationRepo;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        //this endpoint can be uncommented and used to make a super user after re-migrations
        /*[HttpPost]
        [Route("createSuperUser")]
        public async Task<IActionResult> createSuperUser(UserViewModel userViewModel)
        {

            var role = "superuser";

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

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, role);
                }

                if (result.Errors.Any())
                {
                    StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                }
            }
            else
            {
                return Forbid("Account with provided email address already exists");
            }
            return Ok("Super User created Successfully");
        }*/

        [HttpPost, DisableRequestSizeLimit]
        [Route("createAdmin")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "superuser")]
        public async Task<IActionResult> createAdmin()
        {
            var formCollection = await Request.ReadFormAsync();

            //1. convert employee back to an object and pull values 
            string s = formCollection.Keys.FirstOrDefault();
            string decode = HttpUtility.UrlDecode(s);
            var employee = JObject.Parse(decode);

            string EmployeeID = Guid.NewGuid().ToString(); //use this for creation and file storage
            string Name = employee["Name"].ToString();
            string Surname = employee["Surname"].ToString();
            string IDNumber = employee["IDNumber"].ToString();
            string Phone = employee["Phone"].ToString();
            string Email = employee["Email"].ToString();
            string TitleId = employee["TitleID"].ToString();
            string EmployeeTypeId = employee["EmployeeTypeID"].ToString();
            string QualificationID = employee["QualificationID"].ToString();

            //check if role exisit
            var role = "admin";

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

            //Create the user
            var user = await _userManager.FindByNameAsync(Email);

            if (user == null)
            {

                var emptitle = await this.TitleRepo._GetTitleIdAsync(Convert.ToInt32(TitleId));

                //Create new user - no existing account with matching email address
                user = new AppUser
                {
                    Id = EmployeeID,
                    UserName = Email,
                    Email = Email,
                    PhoneNumber = Phone,
                    FirstName = Name,
                    LastName = Surname,
                    Title = emptitle
                };

                //assign a password from generator
                string randomPassword = generatePassword();
                var result = await _userManager.CreateAsync(user, randomPassword);

                

                if (result.Succeeded)
                {

                    //create record to the Employee table:
                    Employee employeeRecord = new Employee
                    {
                        Photo = null,
                        Contract = null,
                        IDNumber = IDNumber,
                        AppUser = await _userManager.FindByNameAsync(Email),
                        EmployeeType = await this.EmployeeTypeRepo._GetEmployeeTypeIdAsync(Convert.ToInt32(EmployeeTypeId)),
                        Qualification = await this.QualificationRepo._GetQualificationIdAsync(Convert.ToInt32(QualificationID)),
                        UserID = EmployeeID
                    };
                    ///////////////////////////////////

                    await _userManager.AddToRoleAsync(user, role);

                    Email email = new Email();
                    var body = "<h1>Strengthening Solutions</h1> <br /> <hr>" +
                        "<p><strong>Email:</strong> " + Email + "</p>" +
                        "<p><strong>Password:</strong> " + randomPassword + "</p>" +
                        "<br /> <hr>";
                    try
                    {
                        //email the password to the user:
                        email.sendEmail(Email, "Strengthening Solutions", body);

                        ///////////////////////////////////////////////////
                        ///store files from FormData:

                        //store contract:
                        //config
                        var contract = formCollection.Files.First();
                            var contractFolder = Path.Combine("Resources", "Employees", "Contracts");
                            var contractPath = Path.Combine(Directory.GetCurrentDirectory(), contractFolder);
                            //storage
                            var contractFileName = ContentDispositionHeaderValue.Parse(EmployeeID).ToString() + ".pdf";
                            //attach contract name to emp table
                            employeeRecord.Contract = contractFileName;
                            var contractFullPath = Path.Combine(contractPath, contractFileName);
                            using (var stream = new FileStream(contractFullPath, FileMode.Create))
                            {
                                contract.CopyTo(stream);
                            }


                            //check if photo to store:
                            if (formCollection.Files.Count == 2)
                            {
                                //get file
                                var photo = formCollection.Files[1];
                                //config
                                var photoFolder = Path.Combine("Resources", "Employees", "Images");
                                var photoPath = Path.Combine(Directory.GetCurrentDirectory(), photoFolder);
                                //storage
                                var extension = photo.ContentType.Split('/')[1];
                                var photoFileName = ContentDispositionHeaderValue.Parse(EmployeeID).ToString() + "." + extension;
                                //attatch photo name to emp table
                                employeeRecord.Photo = photoFileName;
                                var photoFullPath = Path.Combine(photoPath, photoFileName);
                                using (var stream = new FileStream(photoFullPath, FileMode.Create))
                                {
                                    photo.CopyTo(stream);
                                }
                            }

                        //add employeeRecord to repo
                        this.EmployeeRepo.Add(employeeRecord);

                    }
                    catch (Exception ex)
                    {
                        StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                    }

                }

                if (result.Errors.Any())
                {
                    StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                }

            }
            else
            {
                return Forbid("Account with provided email address already exists");
            }

            return Ok("Account created successfully");

        }

        static string generatePassword()
        {
            //ascii 33 - 122

            string output = "";
            for (int i = 0; i < 2; i++)
            {
                output += getCap();
                output += getLow();
                output += getSpecial();
                output += getDigit();
            }
            return output;
        }

        static int randomRange(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);
        }

        static char getCap()
        {
            //65-90
            return (char) randomRange(65, 90);
        }

        static char getLow()
        {
            //97-122
            return (char) randomRange(97, 122);

        }

        static char getDigit()
        {
            //48-57
            return (char) randomRange(48, 58);
        }

        static char getSpecial()
        {
            //58-64
            return (char) randomRange(58, 64);
        }

        [HttpGet, DisableRequestSizeLimit]
        [Route("token")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Token()
        {
            var header = HttpContext.Request.Headers["Authorization"][0];
            var token = header.Substring(header.IndexOf(" ") + 1);
            var handler = new JwtSecurityTokenHandler();
            var jwt = handler.ReadJwtToken(token);
            string sub = jwt.Subject;
            //linking to query for the sub's role:

            var userRole = await _userManager.GetRolesAsync(await _userManager.FindByNameAsync( sub ));

            return Ok(new
            {
                role = userRole[0]
            });
        }

        //create a trainer or generalemployee
        [HttpPost, DisableRequestSizeLimit]
        [Route("createEmployee")]
        /*[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin, superuser")]*/
        public async Task<IActionResult> createEmployee()
        {
            var formCollection = await Request.ReadFormAsync();

            //1. convert employee back to an object and pull values 
            string s = formCollection.Keys.FirstOrDefault();
            string decode = HttpUtility.UrlDecode(s);
            var employee = JObject.Parse(decode);

            string EmployeeID = Guid.NewGuid().ToString(); //use this for creation and file storage
            string Name = employee["Name"].ToString();
            string Surname = employee["Surname"].ToString();
            string IDNumber = employee["IDNumber"].ToString();
            string Phone = employee["Phone"].ToString();
            string Email = employee["Email"].ToString();
            string TitleId = employee["TitleID"].ToString();
            string EmployeeTypeId = employee["EmployeeTypeID"].ToString();
            string QualificationID = employee["QualificationID"].ToString();
            string uvmRole = employee["role"].ToString();


            string[] supportedRole = { "trainer", "generalemployee" };
            bool flag = false;
            foreach (var role in supportedRole)
                if (role == uvmRole)
                {
                    flag = true;
                    break;
                }
            if (!flag)
                return BadRequest(uvmRole + " is not supported");

            //check if role exists:
            var exists = await _roleManager.FindByNameAsync(uvmRole);
            if (exists == null)
            {
                //role does not exists yet:
                //create the role here:
                IdentityRole newRole = new IdentityRole
                {
                    Name = uvmRole
                };
                IdentityResult result = await _roleManager.CreateAsync(newRole);

            }

            //Create the user
            var user = await _userManager.FindByNameAsync(Email);

            if (user == null)
            {

                var emptitle = await this.TitleRepo._GetTitleIdAsync(Convert.ToInt32(TitleId));

                //Create new user - no existing account with matching email address
                user = new AppUser
                {
                    Id = EmployeeID,
                    UserName = Email,
                    Email = Email,
                    PhoneNumber = Phone,
                    FirstName = Name,
                    LastName = Surname,
                    Title = emptitle
                };

                //assign a password from generator
                string randomPassword = generatePassword();
                var result = await _userManager.CreateAsync(user, randomPassword);



                if (result.Succeeded)
                {

                    //create record to the Employee table:
                    Employee employeeRecord = new Employee
                    {
                        Photo = null,
                        Contract = null,
                        IDNumber = IDNumber,
                        AppUser = await _userManager.FindByNameAsync(Email),
                        EmployeeType = await this.EmployeeTypeRepo._GetEmployeeTypeIdAsync(Convert.ToInt32(EmployeeTypeId)),
                        Qualification = await this.QualificationRepo._GetQualificationIdAsync(Convert.ToInt32(QualificationID)),
                        UserID = EmployeeID
                    };
                    ///////////////////////////////////

                    await _userManager.AddToRoleAsync(user, uvmRole);

                    Email email = new Email();
                    var body = "<h1>Strengthening Solutions</h1> <br /> <hr>" +
                        "<p><strong>Email:</strong> " + Email + "</p>" +
                        "<p><strong>Password:</strong> " + randomPassword + "</p>" +
                        "<br /> <hr>";
                    try
                    {
                        //email the password to the user:
                        email.sendEmail(Email, "Strengthening Solutions", body);

                        ///////////////////////////////////////////////////
                        ///store files from FormData:

                        //store contract:
                        //config
                        var contract = formCollection.Files.First();
                        var contractFolder = Path.Combine("Resources", "Employees", "Contracts");
                        var contractPath = Path.Combine(Directory.GetCurrentDirectory(), contractFolder);
                        //storage
                        var contractFileName = ContentDispositionHeaderValue.Parse(EmployeeID).ToString() + ".pdf";
                        //attach contract name to emp table
                        employeeRecord.Contract = contractFileName;
                        var contractFullPath = Path.Combine(contractPath, contractFileName);
                        using (var stream = new FileStream(contractFullPath, FileMode.Create))
                        {
                            contract.CopyTo(stream);
                        }


                        //check if photo to store:
                        if (formCollection.Files.Count == 2)
                        {
                            //get file
                            var photo = formCollection.Files[1];
                            //config
                            var photoFolder = Path.Combine("Resources", "Employees", "Images");
                            var photoPath = Path.Combine(Directory.GetCurrentDirectory(), photoFolder);
                            //storage
                            var extension = photo.ContentType.Split('/')[1];
                            var photoFileName = ContentDispositionHeaderValue.Parse(EmployeeID).ToString() + "." + extension;
                            //attatch photo name to emp table
                            employeeRecord.Photo = photoFileName;
                            var photoFullPath = Path.Combine(photoPath, photoFileName);
                            using (var stream = new FileStream(photoFullPath, FileMode.Create))
                            {
                                photo.CopyTo(stream);
                            }
                        }

                        //add employeeRecord to repo
                        this.EmployeeRepo.Add(employeeRecord);

                    }
                    catch (Exception ex)
                    {
                        StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                    }

                }

                if (result.Errors.Any())
                {
                    StatusCode(StatusCodes.Status500InternalServerError, "Internal error. Please contact support");
                }

            }
            else
            {
                return Forbid("Account with provided email address already exists");
            }
            return Ok("Account created successfully");

        }

        // PUT api/employees/update/5
        [HttpPost, DisableRequestSizeLimit]
        [Route("update")]
        public async Task<IActionResult> PutEmployee()
        {
            var formCollection = await Request.ReadFormAsync();

            //1. convert employee back to an object and pull values 
            string s = formCollection.Keys.FirstOrDefault();
            string decode = HttpUtility.UrlDecode(s);
            var employee = JObject.Parse(decode);
            string Name = employee["Name"].ToString();
            string Surname = employee["Surname"].ToString();
            string IDNumber = employee["IDNumber"].ToString();
            string Phone = employee["Phone"].ToString();
            string Email = employee["Email"].ToString();
            string TitleId = employee["TitleID"].ToString();
            string EmployeeTypeId = employee["EmployeeTypeID"].ToString();
            string QualificationID = employee["QualificationID"].ToString();
            string uvmRole = employee["role"].ToString();
            string AspId = employee["EmployeeID"].ToString();
            bool RemovePhoto = Convert.ToBoolean(employee["RemovePhoto"]);

            //get user ID from AspUserTable:
            //var AspId = await _userManager.findB

            if (formCollection.Files.Count != 0)
            {
                //fetch old file names:
                var oldEmpRecord = this.EmployeeRepo.GetByUserIdAsync(AspId);
                var oldPhoto = oldEmpRecord.Result.Photo;
                var oldContract = oldEmpRecord.Result.Contract;

                //file swapping needs to occour here:
                //check for length 0:
                if (formCollection.Files.Count == 1)
                {

                    //either photo or contract to swap
                    var file = formCollection.Files[0];
                    if (file.ContentType == "application/pdf")
                    {
                        //single file to swap is pdf

                    } else
                    {
                        //single file to swap is photo

                    }

                } else
                {

                    //two files exist


                }

            }

            

            //var toUpdate = await EmployeeRepo._GetEmployeeIdAsync(id);
            //if (toUpdate == null)
            //{
            //    return NotFound("Could not find existing employee with id:" + id);
            //}
            //try
            //{
            //    toUpdate.Photo = employee.Photo;
            //    toUpdate.IDNumber = employee.IDNumber;
            //    await EmployeeRepo.SaveChangesAsync();
            //    return Ok();
            //}
            //catch (Exception err)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            //}
            return Ok();
        }

        static void deleteFile()
        {

        }

        static void contractSwap()
        {

        }

        static void photoSwap()
        {

        }

        // DELETE api/Employee/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteEmployeeType(int id)
        {
            var tempEmployee = await EmployeeRepo._GetEmployeeIdAsync(id);
            if (tempEmployee == null)
            {
                return NotFound("Could not find existing Qualification Type with id:" + id);
            }
            try
            {
                EmployeeRepo.Delete<Employee>(tempEmployee);
                await EmployeeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/Employee/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetEmployees()
        {
            try
            {
                var employeeList = await EmployeeRepo.GetAllEmployeesAsync();
                if (employeeList == null) return Ok(0);
                return Ok(employeeList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/Employee/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingEmployees(string input)
        {
            try
            {
                var employees = await EmployeeRepo.GetEmployeesAsync(input);
                if (employees == null) return Ok(0);
                return Ok(employees);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<IActionResult> EmployeeExists(int id)
        {
            try
            {
                var qualificationType = await EmployeeRepo._GetEmployeeIdAsync(id);
                if (qualificationType == null) return Ok(0);
                return Ok(qualificationType);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }
    }
}
