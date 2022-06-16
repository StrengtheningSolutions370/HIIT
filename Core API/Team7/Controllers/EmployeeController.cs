using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepo EmployeeRepo;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;
        public EmployeeController(UserManager<AppUser> userManager, IEmployeeRepo employeeRepo, RoleManager<IdentityRole> roleManager)
        {
            this.EmployeeRepo = employeeRepo;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("addAdmin")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "superuser")]
        public async Task<IActionResult> RegisterAdmin(UserViewModel userViewModel)
        {

            var role = "admin";

            //check if role exists:
            var exists = await _roleManager.FindByNameAsync(userViewModel.role);
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
            return Ok("Account created successfully");
        }

        [HttpPost]
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

        [HttpPost]
        [Route("addEmployee")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin, superuser")]
        public async Task<IActionResult> RegisterEmployee(UserViewModel userViewModel)
        {

            string[] supportedRole = { "trainer", "generalemployee" };
            bool flag = false;
            foreach (var role in supportedRole)
                if (role == userViewModel.role)
                {
                    flag = true;
                    break;
                }
            if (!flag)
                return BadRequest();

            //check if role exists:
            var exists = await _roleManager.FindByNameAsync(userViewModel.role);
            if (exists == null)
            {
                //role does not exists yet:
                //create the role here:
                IdentityRole newRole = new IdentityRole
                {
                    Name = userViewModel.role
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
                    await _userManager.AddToRoleAsync(user, userViewModel.role);
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
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutEmployee(int id, [FromBody] Employee employee)
        {
            var toUpdate = await EmployeeRepo._GetEmployeeIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing employee with id:" + id);
            }
            try
            {
                toUpdate.Name = employee.Name;
                toUpdate.Surname = employee.Surname;
                toUpdate.Photo = employee.Photo;
                toUpdate.IDNumber = employee.IDNumber;
                await EmployeeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
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
