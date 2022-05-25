﻿using Microsoft.AspNetCore.Http;
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
        public UserRoleController(IUserRoleRepo UserRoleRepo)
        {
            this.UserRoleRepo = UserRoleRepo;
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
            var toUpdate = await UserRoleRepo.GetUserRoleIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Venue with id:" + id);
            }
            try
            {
                toUpdate.Name = userRole.Name;
                toUpdate.Description = userRole.Description;
                toUpdate.User = userRole.User;
                toUpdate.Permission = userRole.Permission;
                //VenueRepo.Update<Venue>(tempVenue);
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
            var tempUserRole = await UserRoleRepo.GetUserRoleIdAsync(id);
            if (tempUserRole == null)
            {
                return NotFound();
            }
            try
            {
                UserRoleRepo.Delete(tempUserRole);
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
                var userRoleList = await UserRoleRepo.GetAllUserRolesAsync();
                if (userRoleList == null)
                {
                    return NotFound();
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
        public async Task<IActionResult> GetMatchingUserRoles(string input)
        {
            try
            {
                var venue = await UserRoleRepo.GetUserRolesAsync(input);
                return Ok(venue);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<UserRole> UserRoleExists(int id)
        {
            return await UserRoleRepo.GetUserRoleIdAsync(id);
        }
    }
}
