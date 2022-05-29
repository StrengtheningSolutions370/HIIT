using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.Models;
using Microsoft.EntityFrameworkCore;
using Team7.Context;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualificationTypeController : ControllerBase
    {
        private readonly IQualificationTypeRepo QualificationTypeRepo;
        public QualificationTypeController(IQualificationTypeRepo qualificationTypeRepo)
        {
            this.QualificationTypeRepo = qualificationTypeRepo;
        }

        // POST api/Title/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostQualificationType(QualificationType qualificationType)
        {
            try
            {
                QualificationTypeRepo.Add(qualificationType);
                await QualificationTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/Title/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutQualificationType(int id, [FromBody] QualificationType qualificationType)
        {
            var toUpdate = await QualificationTypeRepo._GetQualificationTypeIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Qualification Type with id:" + id);
            }
            try
            {
                toUpdate.Name = qualificationType.Name;
                await QualificationTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/Title/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteQualificationType(int id)
        {
            var tempQualificationType = await QualificationTypeRepo._GetQualificationTypeIdAsync(id);
            if (tempQualificationType == null)
            {
                return NotFound("Could not find existing Qualification Type with id:" + id);
            }
            try
            {
                QualificationTypeRepo.Delete<QualificationType>(tempQualificationType);
                await QualificationTypeRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

       //GET: api/title/getAll
       [HttpGet]
       [Route("getAll")]
        public async Task<IActionResult> GetQualificationTypes()
        {
            try
            {
                var qualificationTypeList = await QualificationTypeRepo.GetAllQualificationTypesAsync();
                if (qualificationTypeList == null) return Ok(0);
                return Ok(qualificationTypeList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }
    }

    //// GET: api/title/getMatch/{input}
    //[HttpGet]
    //[Route("getMatch")]
    //public async Task<IActionResult> GetMatchingQualificationTypes(string input)
    //{
    //    try
    //    {
    //        var qualificationType = await QualificationTypeRepo.GetQualificationTypesAsync(input);
    //        return Ok(qualificationType);
    //    }
    //    catch (Exception err)
    //    {
    //        return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
    //    }

        // GET: api/title/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingQualificationTypes(string input)
        {
            try
            {
                var qualificationTypes = await QualificationTypeRepo.GetQualificationTypesAsync(input);
                if (qualificationTypes == null) return Ok(0);
                return Ok(qualificationTypes);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<IActionResult> QualificationTypeExists(int id)
        {
            try
            {
                var qualificationType = await QualificationTypeRepo._GetQualificationTypeIdAsync(id);
                if (qualificationType == null) return Ok(0);
                return Ok(qualificationType);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

    }
}

