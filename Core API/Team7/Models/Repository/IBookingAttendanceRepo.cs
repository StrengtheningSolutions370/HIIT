using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IBookingAttendanceRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<BookingAttendance[]> GetAllBookingAttendancesAsync();

        //Task<BookingAttendance[]> GetBookingAttendancesAsync(string input);

        //Task<BookingAttendance> GetBookingAttendanceIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
