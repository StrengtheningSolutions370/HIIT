using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IOrderStatusRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<OrderStatus[]> GetAllOrderStatussAsync();

        //Task<OrderStatus[]> GetOrderStatussAsync(string input);

        //Task<OrderStatus> GetOrderStatusIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
