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
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleRepo ScheduleRepo;
        public ScheduleController(IScheduleRepo scheduleRepo)
        {
            this.ScheduleRepo = scheduleRepo;
        }

        // POST api/schedule/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSchedule(Schedule schedule)
        {
            try
            {
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
                //toUpdate.Name = saleCategory.Name;
                //toUpdate.Description = saleCategory.Description;
                //toUpdate.CapacityBooked = schedule.CapacityBooked;
                if (schedule.BookingAttendance!= null)
                {
                    toUpdate.BookingAttendance = schedule.BookingAttendance;
                }

                if (schedule.DateSession != null)
                {
                    //ensure new record is made, and not just deleting existing one
                    toUpdate.DateSession = schedule.DateSession;
                }

                toUpdate.DateSession = schedule.DateSession;
                toUpdate.VenueID = schedule.VenueID;
                toUpdate.BookingTypeID = schedule.BookingTypeID;
                toUpdate.LessonID = schedule.LessonID;
                toUpdate.EmployeeID = schedule.EmployeeID;

                //ScheduleRepo.Update<Schedule>(schedule);
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
                ScheduleRepo.Delete<Schedule>(tempSchedule);
                if (await ScheduleRepo.SaveChangesAsync())
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

        // GET: api/schedule/getDateSessions
        [HttpGet]
        [Route("getDateSessions")]
        public async Task<IActionResult> GetScheduleDateSessions()
        {
            try
            {
                var dates = await ScheduleRepo.GetAllDateSessions();
                if (dates == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(dates);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
