using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ISaleCategoryRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<SaleCategory[]> GetAllSaleCategorysAsync();

        //Task<SaleCategory[]> GetSaleCategorysAsync(string input);

        //Task<SaleCategory> GetSaleCategoryIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
