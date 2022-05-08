using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Team7.Models;

namespace Team7.Controllers
{
    public class TitleController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/Title
        [ResponseType(typeof(IEnumerable<TITLE>))]
        [Route("api/gettitles")]
        public IQueryable<TITLE> GetTITLEs()
        {
            return db.TITLEs;
        }

        // GET: api/Title/5
        [ResponseType(typeof(TITLE))]
        [Route("api/gettitle")]
        public async Task<IHttpActionResult> GetTITLE(int id)
        {
            TITLE tITLE = await db.TITLEs.FindAsync(id);
            if (tITLE == null)
            {
                return NotFound();
            }

            return Ok(tITLE);
        }

        // PUT: api/Title/5
        [ResponseType(typeof(void))]
        [Route("api/puttitle")]
        public async Task<IHttpActionResult> PutTITLE(int id, TITLE tITLE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tITLE.TITLE_ID)
            {
                return BadRequest();
            }

            db.Entry(tITLE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TITLEExists(id))
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

        // POST: api/Title
        [ResponseType(typeof(TITLE))]
        [Route("api/posttitle")]
        public async Task<IHttpActionResult> PostTITLE(TITLE tITLE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TITLEs.Add(tITLE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tITLE.TITLE_ID }, tITLE);
        }

        // DELETE: api/Title/5
        [ResponseType(typeof(TITLE))]
        [Route("api/deletetitle")]
        public async Task<IHttpActionResult> DeleteTITLE(int id)
        {
            TITLE tITLE = await db.TITLEs.FindAsync(id);
            if (tITLE == null)
            {
                return NotFound();
            }

            db.TITLEs.Remove(tITLE);
            await db.SaveChangesAsync();

            return Ok(tITLE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/titleexists")]
        private bool TITLEExists(int id)
        {
            return db.TITLEs.Count(e => e.TITLE_ID == id) > 0;
        }
    }
}