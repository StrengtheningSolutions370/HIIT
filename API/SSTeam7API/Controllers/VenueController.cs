using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SSTeam7API.Models;
using SSTeam7API.ViewModels;

namespace SSTeam7API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenueController : ControllerBase
    {
        private readonly AppDbContext db = new AppDbContext();

        // Creating a venue list. The list will contain all venues.
        [HttpGet]
        [Route("getVenues")]
        public object GetVenues(int id)
        {
            var venueList = db.Venue.ToList();

            return venueList;
        }

        //Creating a new order. This will receive a list of the basket products containing their product information and ordered quantity
        [HttpPost]
        [Route("createVenue")]
        public object CreateVenue(Venue venueVM)
        {

            db.Venue.Add(venueVM);
            db.SaveChanges();

            return Ok();

        }

        [HttpDelete]
        [Route("deleteVenue")]
        public object DeleteVenue(Venue venueVM)
        {

            db.Venue.Remove(venueVM);
            db.SaveChanges();

            return Ok();

        }

        [HttpPut]
        [Route("updateVenue")]
        public object UpdateVenue(Venue venueVM)
        {

            db.Venue.Update(venueVM);
            db.SaveChanges();

            return Ok();

        }


    }
}
