using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface ISaleItemRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<SaleItem[]> GetAllSaleItemsAsync();

        //Task<SaleItem[]> GetSaleItemsAsync(string input);

        //Task<SaleItem> GetSaleItemIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
