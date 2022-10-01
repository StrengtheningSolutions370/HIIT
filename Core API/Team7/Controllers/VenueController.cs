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
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostVenue(Venue venue)
        {
            try
            {
                VenueRepo.Add(venue);
                if (await VenueRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the database. Contact support.");
                }

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
            var toUpdate = await VenueRepo._GetVenueIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Venue with ID - " + id);
            }
            try
            {
                toUpdate.Address = venue.Address;
                toUpdate.Name = venue.Name;
                toUpdate.PostalCode = venue.PostalCode;
                toUpdate.Capacity = venue.Capacity;
                VenueRepo.Update<Venue>(toUpdate);

                if (await VenueRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to update value in the database. Contact support.");
                }
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
            var tempVenue = await VenueRepo._GetVenueIdAsync(id);
            if (tempVenue == null)
            {
                return NotFound("Could not find existing Venue with ID - " + id);
            }

            /*if (tempVenue.Schedules != null)
            {
                return Conflict(new { venue = tempVenue });
            }*/

            if (tempVenue.Schedules.Count != 0)
                return Conflict(new { venue = tempVenue });

            try
            {
                VenueRepo.Delete<Venue>(tempVenue);
                if (await VenueRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                }
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
                if (venueList == null) return Ok(0);
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
        public async Task<IActionResult> GetMatchingVenues(string name)
        {
            try
            {
                var venue = await VenueRepo.GetVenuesAsync(name);
                if (venue == null) return Ok(0);
                return Ok(venue);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
