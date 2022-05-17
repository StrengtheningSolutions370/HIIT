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

        //Creating a new venue. This will receive a list of the venues containing their venue information.
        [HttpPost]
        [Route("createVenue")]
        public object CreateVenue(Venue venueVM)
        {

            db.Venue.Add(venueVM);
            db.SaveChanges();

            return Ok();

        }
        //Delete venue. This will delete a venue entity and all associated data.
        [HttpDelete]
        [Route("deleteVenue")]
        public object DeleteVenue(Venue venueVM)
        {

            db.Venue.Remove(venueVM);
            db.SaveChanges();

            return Ok();

    }
        //Updating existing venue.This will receive a list of the venues containing their venue information.
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
