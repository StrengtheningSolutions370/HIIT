using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenueController : ControllerBase
    {
        private readonly IVenueRepo VenueRepo;
        public VenueController(IVenueRepo venueRepo)
        {
            this.VenueRepo = venueRepo;
        }

        // POST api/venues/add
        [HttpPost]
        [Route("add")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostVenue(Venue venue)
        {
            try
            {
                VenueRepo.Add(venue);
                await VenueRepo.SaveChangesAsync();
                return Ok(venue);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/venues/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutVenue(int id, [FromBody] Venue venue)
        {
            var toUpdate = await VenueRepo.GetVenueIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Venue with id:" + id);
            }
            try
            {
                toUpdate.Address = venue.Address;
                toUpdate.Name = venue.Name;
                toUpdate.PostalCode = venue.PostalCode;
                toUpdate.Capacity = venue.Capacity;
                //VenueRepo.Update<Venue>(tempVenue);
                await VenueRepo.SaveChangesAsync();
                return Ok("Successfully updated");
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/Venues/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteVenue(int id)
        {
            var tempVenue = await VenueRepo.GetVenueIdAsync(id);
            if (tempVenue == null)
            {
                return NotFound();
            }
            try
            {
                VenueRepo.Delete<Venue>(tempVenue);
                await VenueRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/venues/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetVenues()
        {
            try
            {
                var venueList = await VenueRepo.GetAllVenuesAsync();
                if (venueList == null)
                {
                    return NotFound();
                }
                return Ok(venueList);
            } 
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/venues/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingVenues(string name, string? address)
        {
            try
            {
                var venue = await VenueRepo.GetVenuesAsync(name,address);
                if (venue == null) return Ok(0);
                return Ok(venue);
            }
            catch (Exception err)
            {
               return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
            
        }

        [HttpGet]
        [Route("exists")]

        public async Task<Venue> VenueExists(int id)
        {
            return await VenueRepo.GetVenueIdAsync(id);
        }
    }
}
