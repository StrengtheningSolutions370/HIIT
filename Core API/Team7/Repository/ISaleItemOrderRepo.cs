using System.Threading.Tasks;
using Team7.Models;

namespace Team7.Repository
{
    public interface ISaleItemOrderRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<SaleItemOrder[]> GetAllSaleItemOrderAsync();

        Task<bool> SaveChangesAsync();
    }
}
