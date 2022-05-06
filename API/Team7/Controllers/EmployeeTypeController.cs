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
    public class EmployeeTypeController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/EmployeeType
        [ResponseType(typeof(IEnumerable<EMPLOYEE_TYPE>))]
        [Route("api/getemployeetypes")]
        public IQueryable<EMPLOYEE_TYPE> GetEMPLOYEE_TYPE()
        {
            return db.EMPLOYEE_TYPE;
        }

        // GET: api/EmployeeType/5
        [ResponseType(typeof(EMPLOYEE_TYPE))]
        [Route("api/getemployeetype")]
        public async Task<IHttpActionResult> GetEMPLOYEE_TYPE(int id)
        {
            EMPLOYEE_TYPE eMPLOYEE_TYPE = await db.EMPLOYEE_TYPE.FindAsync(id);
            if (eMPLOYEE_TYPE == null)
            {
                return NotFound();
            }

            return Ok(eMPLOYEE_TYPE);
        }

        // PUT: api/EmployeeType/5
        [ResponseType(typeof(void))]
        [Route("api/putemployeetype")]
        public async Task<IHttpActionResult> PutEMPLOYEE_TYPE(int id, EMPLOYEE_TYPE eMPLOYEE_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eMPLOYEE_TYPE.EMPLOYEE_TYPE_ID)
            {
                return BadRequest();
            }

            db.Entry(eMPLOYEE_TYPE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EMPLOYEE_TYPEExists(id))
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

        // POST: api/EmployeeType
        [ResponseType(typeof(EMPLOYEE_TYPE))]
        [Route("api/postemployeetype")]
        public async Task<IHttpActionResult> PostEMPLOYEE_TYPE(EMPLOYEE_TYPE eMPLOYEE_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMPLOYEE_TYPE.Add(eMPLOYEE_TYPE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eMPLOYEE_TYPE.EMPLOYEE_TYPE_ID }, eMPLOYEE_TYPE);
        }

        // DELETE: api/EmployeeType/5
        [ResponseType(typeof(EMPLOYEE_TYPE))]
        [Route("api/deleteemployeetype")]
        public async Task<IHttpActionResult> DeleteEMPLOYEE_TYPE(int id)
        {
            EMPLOYEE_TYPE eMPLOYEE_TYPE = await db.EMPLOYEE_TYPE.FindAsync(id);
            if (eMPLOYEE_TYPE == null)
            {
                return NotFound();
            }

            db.EMPLOYEE_TYPE.Remove(eMPLOYEE_TYPE);
            await db.SaveChangesAsync();

            return Ok(eMPLOYEE_TYPE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/employeetypeexists")]
        private bool EMPLOYEE_TYPEExists(int id)
        {
            return db.EMPLOYEE_TYPE.Count(e => e.EMPLOYEE_TYPE_ID == id) > 0;
        }
    }
}