using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Team7.Models;

namespace Team7.Controllers
{
  //[Route("api/[controller]")]
  //[EnableCors(origins: "*", headers: "*", methods: "*")]
  public class VenueController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/Venue
    [ResponseType(typeof(VENUE[]))]
    [Route("api/getVenues")]
        public VENUE[] GetVENUEs()
        {
            var venueObj = db.VENUEs.ToArray<VENUE>();
            return venueObj;
        }

        // GET: api/Venue/5
        [ResponseType(typeof(VENUE))]
        [Route("api/getVenue")]
        public async Task<IHttpActionResult> GetVENUE(int id)
        {
            VENUE vENUE = await db.VENUEs.FindAsync(id);
            if (vENUE == null)
            {
                return NotFound();
            }

            return Ok(vENUE);
        }

        // PUT: api/Venue/5
        [ResponseType(typeof(void))]
        [Route("api/putVenue")]
        public async Task<IHttpActionResult> PutVENUE(int id, VENUE vENUE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vENUE.VENUE_ID)
            {
                return BadRequest();
            }

            db.Entry(vENUE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VENUEExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Venue
        [ResponseType(typeof(VENUE))]
        [Route("api/postVenue")]
        public async Task<IHttpActionResult> PostVENUE(VENUE vENUE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VENUEs.Add(vENUE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vENUE.VENUE_ID }, vENUE);
        }

        // DELETE: api/Venue/5
        [ResponseType(typeof(VENUE))]
        [Route("api/deleteVenue")]
        public async Task<IHttpActionResult> DeleteVENUE(int id)
        {
            VENUE vENUE = await db.VENUEs.FindAsync(id);
            if (vENUE == null)
            {
                return NotFound();
            }

            db.VENUEs.Remove(vENUE);
            await db.SaveChangesAsync();

            return Ok(vENUE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/venueexists")]
        private bool VENUEExists(int id)
        {
            return db.VENUEs.Count(e => e.VENUE_ID == id) > 0;
        }
    }
}
