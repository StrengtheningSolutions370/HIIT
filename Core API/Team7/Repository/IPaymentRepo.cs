using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IPaymentRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllSalePaymentsAsync();

        Task<object> GetAllBookingPaymentsAsync();

        //Task<Receipt[]> GetReceiptsAsync(string input);

        //Task<Receipt> GetReceiptIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
