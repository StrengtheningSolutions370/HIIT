using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IVATRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllVATsAsync();

        Task<object> GetVATsAsync(string input);

        Task<VAT> GetVATIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
