using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.ViewModels;

namespace Team7.Models.Repository
{
    public class BookingAttendanceRepo : IBookingAttendanceRepo
    {
        readonly private AppDB DB;

        public BookingAttendanceRepo(AppDB appDatabaseContext)
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

        public async  Task<bool> TrackAttendance(AttendanceViewModel[] attendanceViewModel)
        {
            try
            {
                foreach (var attendance in attendanceViewModel)
                {
                    BookingAttendance bookingAttendance = DB.BookingAttendance.Where(x => x.BookingAttendanceID == attendance.BookingAttendanceID).FirstOrDefault();
                    bookingAttendance.Attended = attendance.Attended;
                }
                if (await SaveChangesAsync())
                {
                    return true;
                } else
                {
                    return false;
                }
            }
            catch (System.Exception)
            {
                return false;
                throw;                
            }
  
            
        }


        //public async Task<BookingAttendance[]> GetAllBookingAttendancesAsync()
        //{
        //    IQueryable<BookingAttendance> query = DB.BookingAttendance;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<BookingAttendance[]> GetBookingAttendancesAsync(string input)
        //{
        //    IQueryable<BookingAttendance> query = DB.BookingAttendance.Where(v => v.Name == input || v.Address == input);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.ToArrayAsync();
        //    }
        //    return null;

        //}

        //public async Task<BookingAttendance> GetBookingAttendanceIdAsync(int id)
        //{
        //    IQueryable<BookingAttendance> query = DB.BookingAttendance.Where(v => v.VenueID == id);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.SingleAsync();
        //    }
        //    return null;
        //}

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
