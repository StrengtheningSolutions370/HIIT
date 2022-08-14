using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ISaleLineRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<SaleLine[]> GetAllSaleLinesAsync();

        //Task<SaleLine[]> GetSaleLinesAsync(string input);

        //Task<SaleLine> GetSaleLineIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
