using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class BookingTypeRepo : IBookingTypeRepo
    {
        readonly private AppDB DB;

        public BookingTypeRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllBookingTypesAsync()
        {
            IQueryable<BookingType> query = DB.BookingType;
            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await query.Select(bt => new
                {
                    bt.BookingTypeID,
                    bt.Name,
                    bt.Description,
                    bt.Colour,
                    bt.Capacity,
                    Schedule =
                            bt
                            .Schedule
                            .Select(sch => new {
                                sch.ScheduleID,
                                sch.Venue,
                                Lesson = new { sch.Lesson.LessonID, sch.Lesson.Name },
                                sch.StartDateTime,
                                sch.EndDateTime,
                                sch.Employee,
                                BookingAttendance =
                            sch
                            .BookingAttendance
                            .Select(ba => new { ba.BookingAttendanceID, ba.Attended }),
                                BookingPriceHistory =
                            sch
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                            })
                }).ToListAsync()
            };
        }

        public async Task<object> GetBookingTypesAsync(string name, string description)
        {
            IQueryable<BookingType> query = DB.BookingType.Where(bt => bt.Name == name || bt.Description == description);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(bt => new
                    {
                        bt.BookingTypeID,
                        bt.Name,
                        bt.Description,
                        bt.Colour,
                        bt.Capacity,
                        Schedule =
                            bt
                            .Schedule
                            .Select(sch => new {
                                sch.ScheduleID,
                                sch.Venue,
                                Lesson = new { sch.Lesson.LessonID, sch.Lesson.Name },
                                sch.StartDateTime,
                                sch.EndDateTime,
                                sch.Employee,
                                BookingAttendance =
                            sch
                            .BookingAttendance
                            .Select(ba => new { ba.BookingAttendanceID, ba.Attended }),
                                BookingPriceHistory =
                            sch
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                            })
                    }).ToListAsync()
                };
            }

        }

        public async Task<object> GetBookingTypeIdAsync(int id)
        {
            IQueryable<BookingType> query = DB.BookingType.Where(bt => bt.BookingTypeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(bt => new
                    {
                        bt.BookingTypeID,
                        bt.Name,
                        bt.Description,
                        bt.Colour,
                        bt.Capacity,
                        Schedule =
                            bt
                            .Schedule
                            .Select(sch => new {
                                sch.ScheduleID,
                                sch.Venue,
                                Lesson = new { sch.Lesson.LessonID, sch.Lesson.Name },
                                sch.StartDateTime,
                                sch.EndDateTime,
                                sch.Employee,
                                BookingAttendance =
                            sch
                            .BookingAttendance
                            .Select(ba => new { ba.BookingAttendanceID, ba.Attended }),
                                BookingPriceHistory =
                            sch
                            .BookingPriceHistory
                            .Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                            })
                    }).ToListAsync()
                };
            }
        }

        public async Task<BookingType> _GetBookingTypeIdAsync(int id)
        {
            IQueryable<BookingType> query = DB.BookingType.Where(bt => bt.BookingTypeID == id).Select(b => new BookingType
            {
                BookingTypeID = b.BookingTypeID,
                Name = b.Name,
                Description = b.Description,
                Capacity = b.Capacity,
                Colour = b.Colour,
                Schedule = b.Schedule
            });

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
