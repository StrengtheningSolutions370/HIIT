using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualificationController : ControllerBase
    {
        private readonly IQualificationRepo QualificationRepo;
        public QualificationController(IQualificationRepo qualificationRepo)
        {
            this.QualificationRepo = qualificationRepo;
        }

        // POST api/qualification/add
        [HttpPost]
        [Route("add")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostQualification(Qualification qualification)
        {
            try
            {
                QualificationRepo.Add(qualification);
                await QualificationRepo.SaveChangesAsync();
                return Ok();
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
            var toUpdate = await QualificationRepo._GetQualificationIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Qualification with id:" + id);
            }
            try
            {
                toUpdate.Description = qualification.Description;
                toUpdate.QualificationTypeID = qualification.QualificationTypeID;
                await QualificationRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/qualification/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteQualification(int id)
        {
            var tempQualification = await QualificationRepo._GetQualificationIdAsync(id);



            if (tempQualification == null)
            {
                return NotFound("Could not find existing Qualification with id:" + id);
            }

            if (tempQualification.Employee != null)
                return Conflict(new { qualification = tempQualification });

            try
            {
                QualificationRepo.Delete<Qualification>(tempQualification);
                await QualificationRepo.SaveChangesAsync();
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
        public async Task<IActionResult> GetQualifications()
        {
            try
            {
                var qualificationList = await QualificationRepo.GetAllQualificationsAsync();
                if (qualificationList == null) return Ok(0);
                return Ok(qualificationList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/qualification/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingQualifications(string input)
        {
            try
            {
                var tempQualifications = await QualificationRepo.GetQualificationsAsync(input);
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
        public async Task<IActionResult> QualificationExists(int id)
        {
            try
            {
                var qualification = await QualificationRepo._GetQualificationIdAsync(id);
                if (qualification == null) return Ok(0);
                return Ok(qualification);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

    }
}
