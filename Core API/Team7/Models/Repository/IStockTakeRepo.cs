using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IStockTakeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<StockTake[]> GetAllStockTakesAsync();

        //Task<StockTake[]> GetStockTakesAsync(string input);

        //Task<StockTake> GetStockTakeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
