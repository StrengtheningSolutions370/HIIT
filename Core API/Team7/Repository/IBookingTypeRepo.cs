using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IBookingTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllBookingTypesAsync();

        Task<object> GetBookingTypesAsync(string name, string description);

        Task<object> GetBookingTypeIdAsync(int id);

        Task<BookingType> _GetBookingTypeIdAsync(int id);
        Task<BookingType> _GetBookingTypeIdAsyncOriginal(int id);



        Task<bool> SaveChangesAsync();
    }
}
