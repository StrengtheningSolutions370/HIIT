using System.Threading.Tasks;
using Team7.ViewModels;

namespace Team7.Models.Repository
{
    public interface IBookingAttendanceRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<BookingAttendance[]> GetAllBookingAttendancesAsync();

        //Task<BookingAttendance[]> GetBookingAttendancesAsync(string input);

        //Task<BookingAttendance> GetBookingAttendanceIdAsync(int id);

        Task<bool> TrackAttendance(AttendanceViewModel[] attendanceViewModel);

        Task<bool> SaveChangesAsync();
    }
}
