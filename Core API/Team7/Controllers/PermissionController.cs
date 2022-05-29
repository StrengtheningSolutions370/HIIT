using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionController : ControllerBase
    {
        private readonly IPermissionRepo PermissionRepo;

        public PermissionController(IPermissionRepo permissionRepo)
        {
            this.PermissionRepo = permissionRepo;
        }


        // GET: api/permissions/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetPermissions()
        {
            try
            {
                var permissionList = await PermissionRepo.GetAllPermissionsAsync();
                if (permissionList == null)
                {
                    return NotFound();
                }
                return Ok(permissionList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }
    }
}
