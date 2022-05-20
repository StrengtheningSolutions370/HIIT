using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IStockTakeLineRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<StockTakeLine[]> GetAllStockTakeLinesAsync();

        //Task<StockTakeLine[]> GetStockTakeLinesAsync(string input);

        //Task<StockTakeLine> GetStockTakeLineIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
