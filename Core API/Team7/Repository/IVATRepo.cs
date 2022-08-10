using System;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IVATRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllVATsAsync();
        Task<object> GetVATsAsync(decimal? percentage, DateTime? date);
        Task<object> GetVATIdAsync(int id);
        Task<VAT> _GetVATIdAsync(int id);
        Task<bool> SaveChangesAsync();
    }
}
