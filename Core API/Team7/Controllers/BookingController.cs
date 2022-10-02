using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.Services;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepo BookingRepo;
        private readonly IBookingAttendanceRepo BookingAttendanceRepo;
        public BookingController(IBookingRepo bookingRepo, IBookingAttendanceRepo bookingAttendanceRepo)
        {
            this.BookingRepo = bookingRepo;
            this.BookingAttendanceRepo = bookingAttendanceRepo;
        }

        [HttpPost]
        [Route("TrackAttendance")]
        public async Task<IActionResult> TrackAttendance(AttendanceViewModel[] attendance)
        {
            try
            {
                var success = await BookingAttendanceRepo.TrackAttendance(attendance);
                if (success == false)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError,"Unable to track attendance in API");
                }
                else
                {
                    return Ok(true);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        [HttpGet]
        [Route("reminders")]
        public async Task<IActionResult> sendReminders()
        {

            var list = BookingRepo.GetAllBookingsAsync().Result;

            if (list == null) return Ok();

            foreach (var booking in list)
            {
                var email = booking.Client.AppUser.Email;
                var date = booking.Date;
                var phone = booking.Client.AppUser.PhoneNumber;
                var name = booking.Client.AppUser.FirstName + " " + booking.Client.AppUser.LastName;
                var d = date.Year + "/" + date.Month + "/" + date.Day;
                var t = date.TimeOfDay;

                Sms s = new Sms();
                s.sendSMS("+27" + phone.Trim('0'), "Hi, " + name + ". Reminder for booking at BSC for: " + t.ToString().Substring(0, 5) + " on " + d +". Be sure to put your workout pants on! See you there! :)" );
                //Email e = new Email(email, "Strengthening Solutions", "Reminder for booking on " + date);
                //Thread thr = new Thread(new ThreadStart(e.sendEmail));
                //thr.Start();
            }

            return Ok(list);
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
