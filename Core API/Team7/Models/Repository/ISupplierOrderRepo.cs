using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface ISupplierOrderRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<SupplierOrder[]> GetAllSupplierOrdersAsync();

        //Task<SupplierOrder[]> GetSupplierOrdersAsync(string input);

        //Task<SupplierOrder> GetSupplierOrderIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
