using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepo BookingRepo;
        public BookingController(IBookingRepo bookingRepo)
        {
            this.BookingRepo = bookingRepo;
        }


        [HttpGet]
        [Route("getMyBookings")]
        public async Task<IActionResult> GetClientBookings(string aspNetUserID)
        {
            try
            {
                var bookingList = await BookingRepo.GetMyBookingsAsync(aspNetUserID);
                if (bookingList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(bookingList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // DELETE api/booking/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> CancelBooking(string aspNetUserID, int bookingID, int scheduleID)
        {
            try
            {
                var successCancel = await BookingRepo.CancelMyBooking(aspNetUserID, bookingID, scheduleID);
                if (successCancel == false)
                {
                    return NotFound();
                }
                else
                {
                    if (await BookingRepo.SaveChangesAsync())
                    {
                        return Ok();
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to cancel booking in the database. Contact support.");
                    }
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

    }
}
