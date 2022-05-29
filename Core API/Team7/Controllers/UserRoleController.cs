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
    public class UserRoleController : ControllerBase
    {
        private readonly IUserRoleRepo UserRoleRepo;
        public UserRoleController(IUserRoleRepo userRoleRepo)
        {
            this.UserRoleRepo = userRoleRepo;
        }

        // POST api/UserRole/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostUserRole(UserRole userRole)
        {
            try
            {
                UserRoleRepo.Add(userRole);
                await UserRoleRepo.SaveChangesAsync();
                return Ok(userRole);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/UserRole/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutUserRole(int id, [FromBody] UserRole userRole)
        {
            var toUpdate = await UserRoleRepo._GetUserRoleIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing User Role with id:" + id);
            }
            try
            {
                toUpdate.Name = userRole.Name;
                toUpdate.Description = userRole.Description;
                toUpdate.Permission = userRole.Permission;
                UserRoleRepo.Update<UserRole>(toUpdate);
                await UserRoleRepo.SaveChangesAsync();
                return Ok("Successfully updated");
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/UserRole/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteUserRole(int id)
        {
            var tempUserRole = await UserRoleRepo._GetUserRoleIdAsync(id);
            if (tempUserRole == null)
            {
                return Ok(0);
            }
            try
            {
                UserRoleRepo.Delete<UserRole>(tempUserRole);
                await UserRoleRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/UserRole/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetUserRoles()
        {
            try
            {
                var userRoleList = await UserRoleRepo._GetAllUserRolesAsync();
                if (userRoleList == null)
                {
                    return Ok(0);
                }
                return Ok(userRoleList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/UserRole/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingUserRoles(string name, string? description = null)
        {
            try
            {
                var userRole = await UserRoleRepo.GetUserRolesAsync(name,description);
                if (userRole == null) return Ok(0);
                return Ok(userRole);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<object> UserRoleExists(int id)
        {
            try
            {
                var userRole = await UserRoleRepo.GetUserRoleIdAsync(id);
                if (userRole == null) return Ok(0);
                return Ok(userRole);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
           
        }
    }
}

