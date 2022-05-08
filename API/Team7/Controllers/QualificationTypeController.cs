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
    public class QualificationTypeController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/QualificationType
        [ResponseType(typeof(IEnumerable<QUALIFICATION_TYPE>))]
        [Route("api/getqualificationtypes")]
        public IQueryable<QUALIFICATION_TYPE> GetQUALIFICATION_TYPE()
        {
            return db.QUALIFICATION_TYPE;
        }

        // GET: api/QualificationType/5
        [ResponseType(typeof(QUALIFICATION_TYPE))]
        [Route("api/getqualificationtype")]
        public async Task<IHttpActionResult> GetQUALIFICATION_TYPE(int id)
        {
            QUALIFICATION_TYPE qUALIFICATION_TYPE = await db.QUALIFICATION_TYPE.FindAsync(id);
            if (qUALIFICATION_TYPE == null)
            {
                return NotFound();
            }

            return Ok(qUALIFICATION_TYPE);
        }

        // PUT: api/QualificationType/5
        [ResponseType(typeof(void))]
        [Route("api/putqualificationtype")]

        public async Task<IHttpActionResult> PutQUALIFICATION_TYPE(int id, QUALIFICATION_TYPE qUALIFICATION_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != qUALIFICATION_TYPE.QUALIFICATION_TYPE_ID)
            {
                return BadRequest();
            }

            db.Entry(qUALIFICATION_TYPE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QUALIFICATION_TYPEExists(id))
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

        // POST: api/QualificationType
        [ResponseType(typeof(QUALIFICATION_TYPE))]
        [Route("api/postqualificationtype")]

        public async Task<IHttpActionResult> PostQUALIFICATION_TYPE(QUALIFICATION_TYPE qUALIFICATION_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.QUALIFICATION_TYPE.Add(qUALIFICATION_TYPE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = qUALIFICATION_TYPE.QUALIFICATION_TYPE_ID }, qUALIFICATION_TYPE);
        }

        // DELETE: api/QualificationType/5
        [ResponseType(typeof(QUALIFICATION_TYPE))]
        [Route("api/deletequalificationtype")]

        public async Task<IHttpActionResult> DeleteQUALIFICATION_TYPE(int id)
        {
            QUALIFICATION_TYPE qUALIFICATION_TYPE = await db.QUALIFICATION_TYPE.FindAsync(id);
            if (qUALIFICATION_TYPE == null)
            {
                return NotFound();
            }

            db.QUALIFICATION_TYPE.Remove(qUALIFICATION_TYPE);
            await db.SaveChangesAsync();

            return Ok(qUALIFICATION_TYPE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/qualificationtypeexists")]

        private bool QUALIFICATION_TYPEExists(int id)
        {
            return db.QUALIFICATION_TYPE.Count(e => e.QUALIFICATION_TYPE_ID == id) > 0;
        }
    }
}