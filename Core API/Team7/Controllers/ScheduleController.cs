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
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleRepo ScheduleRepo;
        private readonly IBookingPriceHistoryRepo BookingPriceHistoryRepo;
        public ScheduleController(IScheduleRepo scheduleRepo, IBookingPriceHistoryRepo bookingPriceHistoryRepo)
        {
            this.ScheduleRepo = scheduleRepo;
            this.BookingPriceHistoryRepo = bookingPriceHistoryRepo;
        }

        // POST api/schedule/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSchedule(Schedule schedule)
        {
            try
            {
                Schedule toAdd = new Schedule
                {
                    VenueID = schedule.VenueID, 
                    BookingTypeID = schedule.BookingTypeID,
                    LessonID = schedule.LessonID,
                    EmployeeID = schedule.EmployeeID,
                    StartDateTime = schedule.StartDateTime, 
                    EndDateTime = schedule.EndDateTime
                };

                if (schedule.BookingPriceHistory != null)
                {
                    //BookingPriceHistory btPriceHistory = ;

                    BookingPriceHistory bookingPrice = new BookingPriceHistory
                    {
                        Amount = schedule.BookingPriceHistory.FirstOrDefault().Amount,
                        Date = System.DateTime.Now,
                        ScheduleID = schedule.ScheduleID,
                        Schedule = schedule
                    };
                    toAdd.BookingPriceHistory.Add(bookingPrice);
                }

                //if (bookingType.BookingPriceHistory != null)
                //{
                //    BookingPriceHistory btPriceHistory = bookingType.BookingPriceHistory.FirstOrDefault();

                //    BookingPriceHistory bookingPrice = new BookingPriceHistory
                //    {
                //        Amount = btPriceHistory.Amount,
                //        Date = System.DateTime.Now,
                //        ScheduleID = bookingType.BookingTypeID,
                //        BookingType = bookingType
                //    };
                //    toAdd.BookingPriceHistory.Add(bookingPrice);
                //}
                ScheduleRepo.Add(schedule);
                if (await ScheduleRepo.SaveChangesAsync())
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
        public async Task<IActionResult> PutSchedule(int id, [FromBody] Schedule schedule)
        {
            var toUpdate = await ScheduleRepo._GetScheduleIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Sale Category with ID - " + id);
            }
            try
            {
                if (schedule.BookingAttendance != null)
                {
                    toUpdate.BookingAttendance = schedule.BookingAttendance;
                }

                if (schedule.BookingPriceHistory != null)
                {
                    BookingPriceHistory bookingPrice = new BookingPriceHistory
                    {
                        Amount = schedule.BookingPriceHistory.FirstOrDefault().Amount,
                        Date = System.DateTime.Now,
                        ScheduleID = schedule.ScheduleID,
                        Schedule = schedule
                    };

                    toUpdate.BookingPriceHistory.Add(bookingPrice);
                }


                toUpdate.StartDateTime = schedule.StartDateTime;
                toUpdate.EndDateTime = schedule.EndDateTime;
                toUpdate.VenueID = schedule.VenueID;
                toUpdate.BookingTypeID = schedule.BookingTypeID;
                toUpdate.LessonID = schedule.LessonID;
                toUpdate.EmployeeID = schedule.EmployeeID;

                //ScheduleRepo.Update<Schedule>(toUpdate);
                //Testing if this way works.. doubt it when we update stuff like venue, booking attendance etc. 

                if (await ScheduleRepo.SaveChangesAsync())
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


        // DELETE api/schedule/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSchedule(int id)
        {
            var tempSchedule = await ScheduleRepo._GetScheduleIdAsync(id);
            if (tempSchedule == null)
            {
                return NotFound();
            }
            try
            {
                if (await BookingPriceHistoryRepo.RemoveRangeScheduleIdAsync(id))
                {
                    ScheduleRepo.Delete<Schedule>(tempSchedule);
                    if (await ScheduleRepo.SaveChangesAsync())
                    {
                        return Ok();
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                    }
                } else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Unable to delete price history records related to schedule.");
                }
                

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/schedule/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetSchedules()
        {
            try
            {
                var scheduleList = await ScheduleRepo.GetAllSchedulesAsync();
                if (scheduleList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(scheduleList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/schedule/getDate/{input}
        [HttpGet]
        [Route("getDate")]
        public async Task<IActionResult> GetScheduleByDate(DateTime dateTime)
        {
            try
            {
                var schedule = await ScheduleRepo.GetSchedulesAsync(dateTime);
                if (schedule == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(schedule);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
