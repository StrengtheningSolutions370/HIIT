using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IBookingPriceHistoryRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<bool> RemoveRangeScheduleIdAsync(int scheduleID);

        //Task<BookingPriceHistory[]> GetAllBookingPriveHistorysAsync();

        //Task<BookingPriceHistory[]> GetBookingPriceHistorysAsync(string input);

        //Task<BookingPriceHistory> GetBookingPriceHistoryIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
