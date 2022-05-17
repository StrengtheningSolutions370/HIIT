using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class VenuesController : ControllerBase
    {
        private IVenueRepo VenueRepo;

        public VenuesController(IVenueRepo venueRepo)
        {
            this.VenueRepo = venueRepo;
        }
        // GET: api/<VenuesController>
        [HttpGet]
        [Route("getVenues")]
        public async Task<IActionResult> getVenues()
        {
            try
            {
                var venueList = await VenueRepo.GetAllVenuesAsync();
                return Ok(venueList);
            } 
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Stupid ERROR Fire me");
            }

        }

        // GET api/<VenuesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> getVenue(int id)
        {
            var venue = await VenueRepo.GetVenueAsync(id);
            return venue;
        }

        // POST api/<VenuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<VenuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<VenuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
