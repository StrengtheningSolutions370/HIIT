using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IPriceHistoryRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<PriceHistory[]> GetAllPriceHistorysAsync();

        //Task<PriceHistory[]> GetPriceHistorysAsync(string input);

        //Task<PriceHistory> GetPriceHistoryIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
