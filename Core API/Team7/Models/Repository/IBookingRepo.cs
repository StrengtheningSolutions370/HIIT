using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IBookingRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<Booking[]> GetAllBookingsAsync();

        Task<Booking[]> GetBookingsAsync(string input);

        Task<Booking> GetBookingIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
