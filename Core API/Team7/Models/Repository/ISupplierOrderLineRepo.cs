using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface ISupplierOrderLineRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<SupplierOrderLine[]> GetAllSupplierOrderLinesAsync();

        //Task<SupplierOrderLine[]> GetSupplierOrderLinesAsync(string input);

        //Task<SupplierOrderLine> GetSupplierOrderLineIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
