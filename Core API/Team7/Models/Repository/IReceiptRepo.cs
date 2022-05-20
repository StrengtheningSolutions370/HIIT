using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IReceiptRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Receipt[]> GetAllReceiptsAsync();

        //Task<Receipt[]> GetReceiptsAsync(string input);

        //Task<Receipt> GetReceiptIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
