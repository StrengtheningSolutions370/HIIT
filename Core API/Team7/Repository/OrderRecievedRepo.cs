using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models;

namespace Team7.Repository
{
    public class OrderRecievedRepo : IOrderRecievedRepo
    {

        readonly private AppDB DB;

        public OrderRecievedRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public async Task<OrderRecieved[]> GetAllOrderRecievedAsync()
        {
            var query = DB.OrderRecieved.Select(o => new OrderRecieved
            {
                OrderRecievedID = o.OrderRecievedID,
                SupplierID = o.SupplierID,
                Date = o.Date,
                SaleItemOrders = o.SaleItemOrders,
            });

            if (query.Count() > 0)
                return query.ToArray();
            return null;
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

    }
}
