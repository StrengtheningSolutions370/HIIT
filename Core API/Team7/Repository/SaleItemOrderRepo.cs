using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models;

namespace Team7.Repository
{
    public class SaleItemOrderRepo : ISaleItemOrderRepo
    {
        readonly private AppDB DB;

        public SaleItemOrderRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

        public async Task<SaleItemOrder[]> GetAllSaleItemOrderAsync()
        {
            var query = DB.SaleItemOrder.Select(o =>
                new SaleItemOrder
                {
                    SaleItemID = o.SaleItemID,
                    SaleItemOrderID = o.SaleItemOrderID,
                    OrderRecievedID = o.OrderRecievedID,
                    QuantityReceived = o.QuantityReceived,
                    SaleItems = o.SaleItems,
                    OrdersRecieved = o.OrdersRecieved,
                }
            );

            if (query.Any())
                return query.ToArray();

            return null;
        }

    }
}
