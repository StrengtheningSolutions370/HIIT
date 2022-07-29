using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ISaleItemRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllSaleItemsAsync();

        Task<object> GetSaleItemsAsync(string name, string description);

        Task<object> GetSaleItemIdAsync(int id);
        Task<SaleItem> _GetSaleItemIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
