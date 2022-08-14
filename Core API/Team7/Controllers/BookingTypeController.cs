using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
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
        public async Task<IActionResult> PostBookingType([FromBody] BookingType bookingType)
        {
            try
            {
                BookingType toAdd = new BookingType
                {
                    Name = bookingType.Name,
                    Description = bookingType.Description,
                    Capacity = bookingType.Capacity,
                    Colour = bookingType.Colour
                };

                if (bookingType.BookingPriceHistory != null)
                {
                    BookingPriceHistory btPriceHistory = bookingType.BookingPriceHistory.FirstOrDefault();

                    BookingPriceHistory bookingPrice = new BookingPriceHistory
                    {
                        Amount = btPriceHistory.Amount,
                        Date = System.DateTime.Now,
                        BookingTypeID = bookingType.BookingTypeID,
                        BookingType = bookingType
                    };
                    toAdd.BookingPriceHistory.Add(bookingPrice);
                }

                BookingTypeRepo.Add(toAdd);
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
        public async Task<IActionResult> PutBookingType(int id, [FromBody] BookingType bookingType)
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
                toUpdate.Capacity = bookingType.Capacity;
                toUpdate.Colour = bookingType.Colour;


                if (bookingType.BookingPriceHistory != null)
                {
                    var btPriceHistory = bookingType.BookingPriceHistory.FirstOrDefault();

                    BookingPriceHistory bookingPrice = new BookingPriceHistory
                    {
                        Amount = btPriceHistory.Amount,
                        Date = System.DateTime.Now,
                        BookingTypeID = bookingType.BookingTypeID,
                        BookingType = bookingType
                    };
                    toUpdate.BookingPriceHistory.Add(bookingPrice);
                }

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
        public async Task<IActionResult> DeleteBookingType(int id)
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

        // GET: api/bookingtype/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingBookingType(string name, string description)
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
