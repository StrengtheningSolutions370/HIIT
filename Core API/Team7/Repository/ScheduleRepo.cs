using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ScheduleRepo : IScheduleRepo
    {
        readonly private AppDB DB;

        public ScheduleRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
        }


        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

        public async Task<object> GetAllSchedulesAsync()
        {
            IQueryable<Schedule> query = DB.Schedule;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Schedule.Select(sc => new
                    {
                        sc.ScheduleID,
                        sc.Venue,
                        sc.BookingType,
                        Lesson = new { sc.Lesson.LessonID, sc.Lesson.Name},
                        sc.StartDateTime,
                        sc.EndDateTime,
                        Employee = new { sc.Employee.EmployeeID, sc.Employee.AppUser },
                        BookingAttendance = sc
                        .BookingAttendance
                        .Select(ba => new { ba.BookingAttendanceID, ba.Attended, ba.Booking, ba.Booking.Client.AppUser.FirstName, ba.Booking.Client.AppUser.LastName }),
                        BookingPriceHistory = sc
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                    }).ToListAsync()
                };
            }
        }

        //Get schedules for the entire day
        public async Task<object> GetSchedulesAsync(DateTime input)
        {
            //Can't be used for matching as it only checks the date component not the time
            IQueryable<Schedule> query = DB.Schedule.Where(sc => sc.StartDateTime.Date == input.Date);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(sc => new
                    {
                        sc.ScheduleID,
                        sc.Venue,
                        sc.BookingType,
                        Lesson = new { sc.Lesson.LessonID, sc.Lesson.Name },
                        sc.StartDateTime,
                        sc.EndDateTime,
                        Employee = new { sc.Employee.EmployeeID, sc.Employee.UserID, sc.Employee.AppUser },
                        BookingAttendance = sc
                        .BookingAttendance
                        .Select(ba => new { ba.BookingAttendanceID, ba.Attended, ba.Booking }),
                        BookingPriceHistory = sc
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                    }).ToListAsync()
                };
            }
        }

        public async Task<object> GetScheduleIdAsync(int id)
        {
            IQueryable<Schedule> query = DB.Schedule.Where(sc => sc.ScheduleID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(sc => new
                    {
                        sc.ScheduleID,
                        sc.Venue,
                        sc.BookingType,
                        Lesson = new { sc.Lesson.LessonID, sc.Lesson.Name },
                        sc.StartDateTime,
                        sc.EndDateTime,
                        Employee = new { sc.Employee.EmployeeID, sc.Employee.UserID, sc.Employee.AppUser },
                        BookingAttendance = sc
                        .BookingAttendance
                        .Select(ba => new { ba.BookingAttendanceID, ba.Attended, ba.Booking }),
                        BookingPriceHistory = sc
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                    }).ToListAsync()
                };
            }
        }

        public async Task<Schedule> _GetScheduleIdAsync(int id)
        {
            IQueryable<Schedule> query = DB.Schedule.Where(sc => sc.ScheduleID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }
    }
}
