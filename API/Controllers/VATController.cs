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
    public class VATController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/VAT
        [ResponseType(typeof(IEnumerable<VAT>))]
        [Route("api/getvats")]
        public IQueryable<VAT> GetVATs()
        {
            return db.VATs;
        }

        // GET: api/VAT/5
        [ResponseType(typeof(VAT))]
        [Route("api/getvat")]
        public async Task<IHttpActionResult> GetVAT(int id)
        {
            VAT vAT = await db.VATs.FindAsync(id);
            if (vAT == null)
            {
                return NotFound();
            }

            return Ok(vAT);
        }

        // PUT: api/VAT/5
        [ResponseType(typeof(void))]
        [Route("api/putvat")]
        public async Task<IHttpActionResult> PutVAT(int id, VAT vAT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vAT.VAT_ID)
            {
                return BadRequest();
            }

            db.Entry(vAT).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VATExists(id))
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

        // POST: api/VAT
        [ResponseType(typeof(VAT))]
        [Route("api/postvat")]
        public async Task<IHttpActionResult> PostVAT(VAT vAT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VATs.Add(vAT);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vAT.VAT_ID }, vAT);
        }

        // DELETE: api/VAT/5
        [ResponseType(typeof(VAT))]
        [Route("api/deletevat")]
        public async Task<IHttpActionResult> DeleteVAT(int id)
        {
            VAT vAT = await db.VATs.FindAsync(id);
            if (vAT == null)
            {
                return NotFound();
            }

            db.VATs.Remove(vAT);
            await db.SaveChangesAsync();

            return Ok(vAT);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/vatexists")]
        private bool VATExists(int id)
        {
            return db.VATs.Count(e => e.VAT_ID == id) > 0;
        }
    }
}