using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IBookingTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<BookingType[]> GetAllBookingTypesAsync();

        //Task<BookingType[]> GetBookingTypesAsync(string input);

        //Task<BookingType> GetBookingTypeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
