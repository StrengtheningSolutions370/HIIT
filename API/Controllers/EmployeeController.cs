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
    public class EmployeeController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/Employee
        [ResponseType(typeof(IEnumerable<EMPLOYEE>))]
        [Route("api/getemployees")]
        public IQueryable<EMPLOYEE> GetEMPLOYEEs()
        {
            return db.EMPLOYEEs;
        }

        // GET: api/Employee/5
        [ResponseType(typeof(EMPLOYEE))]
        [Route("api/getemployee")]
        public async Task<IHttpActionResult> GetEMPLOYEE(int id)
        {
            EMPLOYEE eMPLOYEE = await db.EMPLOYEEs.FindAsync(id);
            if (eMPLOYEE == null)
            {
                return NotFound();
            }

            return Ok(eMPLOYEE);
        }

        // PUT: api/Employee/5
        [ResponseType(typeof(void))]
        [Route("api/putemployee")]
        public async Task<IHttpActionResult> PutEMPLOYEE(int id, EMPLOYEE eMPLOYEE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eMPLOYEE.EMPLOYEE_ID)
            {
                return BadRequest();
            }

            db.Entry(eMPLOYEE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EMPLOYEEExists(id))
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

        // POST: api/Employee
        [ResponseType(typeof(EMPLOYEE))]
        [Route("api/postemployee")]
        public async Task<IHttpActionResult> PostEMPLOYEE(EMPLOYEE eMPLOYEE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMPLOYEEs.Add(eMPLOYEE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eMPLOYEE.EMPLOYEE_ID }, eMPLOYEE);
        }

        // DELETE: api/Employee/5
        [ResponseType(typeof(EMPLOYEE))]
        [Route("api/deleteemployee")]
        public async Task<IHttpActionResult> DeleteEMPLOYEE(int id)
        {
            EMPLOYEE eMPLOYEE = await db.EMPLOYEEs.FindAsync(id);
            if (eMPLOYEE == null)
            {
                return NotFound();
            }

            db.EMPLOYEEs.Remove(eMPLOYEE);
            await db.SaveChangesAsync();

            return Ok(eMPLOYEE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/employeeexists")]
        private bool EMPLOYEEExists(int id)
        {
            return db.EMPLOYEEs.Count(e => e.EMPLOYEE_ID == id) > 0;
        }
    }
}