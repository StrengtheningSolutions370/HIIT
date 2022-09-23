using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IBookingRepo
    {
        void Add<T>(T Entity) where T : class;

        Task<object> GetMyBookingsAsync(string aspNetUserID);

        Task<bool> CancelMyBooking(string aspNetUserID, int bookingID, int scheduleID);

        Task<Booking[]> GetAllBookingsAsync();

        Task<bool> SaveChangesAsync();

    }
}
