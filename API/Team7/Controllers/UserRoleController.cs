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
    public class UserRoleController : ApiController
    {
        private HIITEntities db = new HIITEntities();

        // GET: api/UserRole
        [ResponseType(typeof(IEnumerable<USER_ROLE>))]
        [Route("api/getuserroles")]
        public IQueryable<USER_ROLE> GetUSER_ROLE()
        {
            return db.USER_ROLE;
        }

        // GET: api/UserRole/5
        [ResponseType(typeof(USER_ROLE))]
        [Route("api/getuserrole")]
        public async Task<IHttpActionResult> GetUSER_ROLE(int id)
        {
            USER_ROLE uSER_ROLE = await db.USER_ROLE.FindAsync(id);
            if (uSER_ROLE == null)
            {
                return NotFound();
            }

            return Ok(uSER_ROLE);
        }

        // PUT: api/UserRole/5
        [ResponseType(typeof(void))]
        [Route("api/putuserrole")]
        public async Task<IHttpActionResult> PutUSER_ROLE(int id, USER_ROLE uSER_ROLE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSER_ROLE.USER_ROLE_ID)
            {
                return BadRequest();
            }

            db.Entry(uSER_ROLE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USER_ROLEExists(id))
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

        // POST: api/UserRole
        [ResponseType(typeof(USER_ROLE))]
        [Route("api/postuserrole")]
        public async Task<IHttpActionResult> PostUSER_ROLE(USER_ROLE uSER_ROLE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USER_ROLE.Add(uSER_ROLE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = uSER_ROLE.USER_ROLE_ID }, uSER_ROLE);
        }

        // DELETE: api/UserRole/5
        [ResponseType(typeof(USER_ROLE))]
        [Route("api/deleteuserrole")]
        public async Task<IHttpActionResult> DeleteUSER_ROLE(int id)
        {
            USER_ROLE uSER_ROLE = await db.USER_ROLE.FindAsync(id);
            if (uSER_ROLE == null)
            {
                return NotFound();
            }

            db.USER_ROLE.Remove(uSER_ROLE);
            await db.SaveChangesAsync();

            return Ok(uSER_ROLE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/userroleexists")]
        private bool USER_ROLEExists(int id)
        {
            return db.USER_ROLE.Count(e => e.USER_ROLE_ID == id) > 0;
        }
    }
}