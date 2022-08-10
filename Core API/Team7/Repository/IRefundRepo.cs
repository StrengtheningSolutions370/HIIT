using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IRefundRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Refund[]> GetAllRefundsAsync();

        //Task<Refund[]> GetRefundsAsync(string input);

        //Task<Refund> GetRefundIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
