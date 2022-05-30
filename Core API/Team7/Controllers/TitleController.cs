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
    public class TitleController : ControllerBase
    {
        private readonly ITitleRepo TitleRepo;
        public TitleController(ITitleRepo titleRepo)
        {
            this.TitleRepo = titleRepo;
        }

        // POST api/Title/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostTitle(Title title)
        {
            try
            {
                TitleRepo.Add(title);
                await TitleRepo.SaveChangesAsync();
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
        public async Task<IActionResult> PutTitle(int id, [FromBody] Title title)
        {
            var toUpdate = await TitleRepo._GetTitleIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Title with id:" + id);
            }
            try
            {
                toUpdate.Description = title.Description;
                //VenueRepo.Update<Venue>(tempVenue);
                await TitleRepo.SaveChangesAsync();
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
        public async Task<IActionResult> DeleteTitle(int id)
        {
            var tempTitle = await TitleRepo._GetTitleIdAsync(id);
            if (tempTitle == null)
            {
                return NotFound("Could not find existing Title with id:" + id);
            }
            try
            {
                TitleRepo.Delete<Title>(tempTitle);
                await TitleRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/title/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetTitles()
        {
            try
            {
                var titleList = await TitleRepo.GetAllTitlesAsync();
                if (titleList == null)return Ok(0);
                return Ok(titleList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/title/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingTitles(string input)
        {
            try
            {
                var title = await TitleRepo.GetTitlesAsync(input);
                if (title == null) return Ok(0);
                return Ok(title);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<IActionResult> TitleExists(int id)
        {
            try
            {
                var title = await TitleRepo._GetTitleIdAsync(id);
                if (title == null) return Ok(0);
                return Ok(title);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }
    }
}

