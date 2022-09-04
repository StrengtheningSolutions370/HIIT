using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IWriteOffLineRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllWriteOffLinesAsync();

        Task<bool> RemoveRangeSaleItemIdAsync(int SaleItemId);

        //Task<WriteOffLine[]> GetWriteOffLinesAsync(string input);

        //Task<WriteOffLine> GetWriteOffLineIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
