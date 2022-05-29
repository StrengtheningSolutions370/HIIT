using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepo EmployeeRepo;
        public EmployeeController(IEmployeeRepo employeeRepo)
        {
            this.EmployeeRepo = employeeRepo;
        }


        // POST api/Employee/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostQualificationType(Employee employee)
        {
            try
            {
                EmployeeRepo.Add(employee);
                await EmployeeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

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
