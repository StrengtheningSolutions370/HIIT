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
    public class BookingTypeController : ControllerBase
    {
        private readonly IBookingTypeRepo BookingTypeRepo;
        public BookingTypeController(IBookingTypeRepo bookingTypeRepo)
        {
            this.BookingTypeRepo = bookingTypeRepo;
        }

        // POST api/salecategory/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostBookingType(BookingType bookingType)
        {
            try
            {
                BookingTypeRepo.Add(bookingType);
                if (await BookingTypeRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/salecategory/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutSaleCategory(int id, [FromBody] BookingType bookingType)
        {
            var toUpdate = await BookingTypeRepo._GetBookingTypeIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Booking Type with ID - " + id);
            }
            try
            {
                toUpdate.Name = bookingType.Name;
                toUpdate.Description = bookingType.Description;

                if (await BookingTypeRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to update value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/salecategory/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSaleCategory(int id)
        {
            var tempBookingType = await BookingTypeRepo._GetBookingTypeIdAsync(id);
            if (tempBookingType == null)
            {
                return NotFound();
            }
            try
            {
                BookingTypeRepo.Delete(tempBookingType);
                if (await BookingTypeRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/salecategory/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<object> GetAllBookingTypesAsync()
        {
            try
            {
                var bookingTypeList = await BookingTypeRepo.GetAllBookingTypesAsync();
                if (bookingTypeList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(bookingTypeList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/salecategory/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingSaleCategories(string name, string description)
        {
            try
            {
                var bookingType = await BookingTypeRepo.GetBookingTypesAsync(name, description);
                if (bookingType == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(bookingType);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

    }
}
