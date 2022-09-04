using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using static iTextSharp.text.pdf.AcroFields;


namespace Team7.Models.Repository
{
    public class BookingRepo : IBookingRepo
    {
        readonly private AppDB DB;
        private readonly IBookingAttendanceRepo _bookingAttendanceRepo;
        private readonly IBookingRepo _bookingRepo;

        public BookingRepo(AppDB appDatabaseContext, IBookingAttendanceRepo bookingAttendanceRepo)
        {
            DB = appDatabaseContext;
            this._bookingAttendanceRepo = bookingAttendanceRepo;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }

        public async Task<bool> CancelMyBooking(string aspNetUserID, int bookingID, int scheduleID)
        {
            IQueryable<BookingAttendance> query = DB.BookingAttendance.Where(x => x.BookingID == bookingID && x.ScheduleID == scheduleID);

            if (!query.Any())
            {
                return false;
            }

            
            _bookingAttendanceRepo.Delete<BookingAttendance>(query.FirstOrDefault());

            await this.SaveChangesAsync();

            //Look into deleting Payment associated with Booking if the BookingAttendance is empty.
            //Below finds the right record but for some reason the Payment ICollection is Null. No time to go down that rabbit hole now (04/09)

            //IQueryable<Booking> BookingQuery = DB.Booking.Where(x => x.BookingAttendance.Count<BookingAttendance>() == 0);

            //if (BookingQuery.Any())
            //{
            //    BookingQuery.FirstOrDefault().Payment.FirstOrDefault().BookingID = null;
            //    this.Delete<Booking>(BookingQuery.FirstOrDefault());
            //}

            
            return true;

            //IQueryable<Booking> query = DB.Booking;
            //IQueryable<BookingAttendance> queryAttendance = null;
            //query = query.Where(x => x.Client.AppUser.Id == aspNetUserID);
            //query = query.Where(x => x.BookingID == bookingID);


            ////queryAttendance = item.BookingAttendance.Where(x => x.ScheduleID == scheduleID).ToList();
            //foreach (Booking item in query)
            //{
            //    queryAttendance = item.BookingAttendance.Where(x => x.ScheduleID == scheduleID).AsQueryable<BookingAttendance>();
            //    foreach(BookingAttendance line in queryAttendance)
            //    {
            //        _bookingAtendanceRepo.Delete<BookingAttendance>(line);
            //    }
            //}

            //return true;
        }

        public async Task<object> GetMyBookingsAsync(string aspNetUserID)
        {
            IQueryable<Booking> query = DB.Booking;
            query = query.Where(x => x.Client.AppUser.Id == aspNetUserID);
            if (!query.Any())
            {
                return null;
            }
                       
            return new
            {

                result = await query.Select(b =>
                new
                {
                  b.BookingID,
                  b.Date,
                  BookingAttendance = b
                  .BookingAttendance
                  .Select(ba => new { ba.BookingAttendanceID, ba.Attended, ba.ScheduleID,
                      Schedule = new { 
                          ba.Schedule.StartDateTime, 
                          ba.Schedule.EndDateTime,
                          ba.Schedule.Venue,
                          ba.Schedule.Lesson.Name,
                          BookingPriceHistory = ba
                          .Schedule
                          .BookingPriceHistory
                          .Select(bph => new
                          {
                              bph.Date,
                              bph.Amount
                          })
                      }                                      
                  })
                }).ToListAsync()
            };
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
