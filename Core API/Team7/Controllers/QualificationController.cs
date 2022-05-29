using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualificationController : ControllerBase
    {
        private readonly IQualificationRepo qualificationRepo;
        public QualificationController(IQualificationRepo qualificationRepo)
        {
            this.qualificationRepo = qualificationRepo;
        }

        // POST api/qualification/add
        [HttpPost]
        [Route("add")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostQualification(Qualification qualification)
        {
            try
            {
                qualificationRepo.Add(qualification);
                await qualificationRepo.SaveChangesAsync();
                return Ok(qualification);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/qualification/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutQualification(int id, [FromBody] Qualification qualification)
        {
            var toUpdate = await qualificationRepo._GetQualificationIdAsync(id);
                if (toUpdate == null)
            {
                return NotFound("Could not find existing Qualification with id:" + id);
            }
            try
            {
                toUpdate.Description = qualification.Description;
                toUpdate.QualificationTypeID = qualification.QualificationTypeID;
                await qualificationRepo.SaveChangesAsync();
                return Ok("Successfully updated");
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/qualification/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteVenue(int id)
        {
            var tempQualification = await qualificationRepo._GetQualificationIdAsync(id);
            if (tempQualification == null)
            {
                return NotFound();
            }
            try
            {
                qualificationRepo.Delete<Qualification>(tempQualification);
                await qualificationRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/qualification/getAll
        [HttpGet]
        [Route("getAll")]
        //public async Task<IActionResult> GetVenues()
        //{
        //    try
        //    {
        //        var qualificationList = await qualificationRepo.GetAllQualificationsAsync();
        //        if (qualificationList == null)
        //        {
        //            return Ok(0);
        //        }
        //        return Ok(qualificationList);
        //    }
        //    catch (Exception err)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
        //    }
        //}

        // GET: api/qualification/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingQualifications(string description)
        {
            try
            {
                var tempQualifications = await qualificationRepo.GetQualificationsAsync(description);
                if (tempQualifications == null) return Ok(0);
                return Ok(tempQualifications);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]

        public async Task<object> QualificationExists(int id)
        {
            return await qualificationRepo.GetQualificationIdAsync(id);
        }
    }
}
