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
    public class QualificationController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/Qualification
        [ResponseType(typeof(IEnumerable<QUALIFICATION>))]
        [Route("api/getqualifications")]
        public IQueryable<QUALIFICATION> GetQUALIFICATIONs()
        {
            return db.QUALIFICATIONs;
        }

        // GET: api/Qualification/5
        [ResponseType(typeof(QUALIFICATION))]
        [Route("api/getqualification")]
        public async Task<IHttpActionResult> GetQUALIFICATION(int id)
        {
            QUALIFICATION qUALIFICATION = await db.QUALIFICATIONs.FindAsync(id);
            if (qUALIFICATION == null)
            {
                return NotFound();
            }

            return Ok(qUALIFICATION);
        }

        // PUT: api/Qualification/5
        [ResponseType(typeof(void))]
        [Route("api/putqualification")]
        public async Task<IHttpActionResult> PutQUALIFICATION(int id, QUALIFICATION qUALIFICATION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != qUALIFICATION.QUALIFICATION_ID)
            {
                return BadRequest();
            }

            db.Entry(qUALIFICATION).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QUALIFICATIONExists(id))
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

        // POST: api/Qualification
        [ResponseType(typeof(QUALIFICATION))]
        [Route("api/postqualification")]
        public async Task<IHttpActionResult> PostQUALIFICATION(QUALIFICATION qUALIFICATION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.QUALIFICATIONs.Add(qUALIFICATION);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = qUALIFICATION.QUALIFICATION_ID }, qUALIFICATION);
        }

        // DELETE: api/Qualification/5
        [ResponseType(typeof(QUALIFICATION))]
        [Route("api/deletequalification")]

        public async Task<IHttpActionResult> DeleteQUALIFICATION(int id)
        {
            QUALIFICATION qUALIFICATION = await db.QUALIFICATIONs.FindAsync(id);
            if (qUALIFICATION == null)
            {
                return NotFound();
            }

            db.QUALIFICATIONs.Remove(qUALIFICATION);
            await db.SaveChangesAsync();

            return Ok(qUALIFICATION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/qualificationexists")]
        private bool QUALIFICATIONExists(int id)
        {
            return db.QUALIFICATIONs.Count(e => e.QUALIFICATION_ID == id) > 0;
        }
    }
}