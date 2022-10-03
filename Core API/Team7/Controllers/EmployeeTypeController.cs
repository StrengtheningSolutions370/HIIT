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
    public class EmployeeTypeController : ControllerBase
    {
        private readonly IEmployeeTypeRepo EmployeeTypeRepo;
        public EmployeeTypeController(IEmployeeTypeRepo employeeTypeRepo)
        {
            this.EmployeeTypeRepo = employeeTypeRepo;
        }


        // POST api/EmployeeType/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostQualificationType(EmployeeType employeeType)
        {
            try
            {
                EmployeeTypeRepo.Add(employeeType);
                await EmployeeTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/employeetypes/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutEmployeeType(int id, [FromBody] EmployeeType employeeType)
        {
            var toUpdate = await EmployeeTypeRepo._GetEmployeeTypeIdAsyncOriginal(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing employee type with id:" + id);
            }
            try
            {
                toUpdate.Name = employeeType.Name;
                toUpdate.Description = employeeType.Description;
                toUpdate.Employee = employeeType.Employee;
                //EmployeeTypeRepo.Update<Venue>(tempVenue);
                await EmployeeTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/EmployeeType/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteEmployeeType(int id)
        {
            var tempEmployeeType = await EmployeeTypeRepo._GetEmployeeTypeIdAsync(id);
            if (tempEmployeeType == null)
            {
                return NotFound("Could not find existing employee type with id:" + id);
            }
            try
            {
                if (tempEmployeeType.Employee != null)
                {
                    if (tempEmployeeType.Employee.Count != 0)
                        return Conflict(tempEmployeeType);
                }
                EmployeeTypeRepo.Delete<EmployeeType>(tempEmployeeType);
                await EmployeeTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/EmployeeType/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetEmployeeTypes()
        {
            try
            {
                var employeeTypeList = await EmployeeTypeRepo.GetAllEmployeeTypesAsync();
                if (employeeTypeList == null) return Ok(0);
                return Ok(employeeTypeList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/EmployeeType/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingEmployeeTypes(string input)
        {
            try
            {
                var employeeTypes = await EmployeeTypeRepo.GetEmployeeTypesAsync(input);
                if (employeeTypes == null) return Ok(0);
                return Ok(employeeTypes);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<IActionResult> EmployeeTypeExists(int id)
        {
            try
            {
                var employeeType = await EmployeeTypeRepo._GetEmployeeTypeIdAsync(id);
                if (employeeType == null) return Ok(0);
                return Ok(employeeType);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }
    }
}
