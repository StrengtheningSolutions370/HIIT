using System.Threading.Tasks;
using Team7.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Team7.Models.Repository
{
    public class RefundRepo : IRefundRepo
    {
        readonly private AppDB DB;

        public RefundRepo(AppDB appDatabaseContext)
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


        //public async Task<Refund[]> GetAllRefundsAsync()
        //{
        //    IQueryable<Refund> query = DB.Refund;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<Refund[]> GetRefundsAsync(string input)
        //{
        //    IQueryable<Refund> query = DB.Refund.Where(v => v.Name == input || v.Address == input);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.ToArrayAsync();
        //    }
        //    return null;

        //}

        //public async Task<Refund> GetRefundIdAsync(int id)
        //{
        //    IQueryable<Refund> query = DB.Refund.Where(v => v.VenueID == id);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.SingleAsync();
        //    }
        //    return null;
        //}

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

        public async Task<Refund> GetRefundByIdAsync(int id)
        {
            var r = DB.Refund.Where(p => p.PaymentID == id);

            if (r.Any())
                return await r.SingleAsync();

            return null;
        }
    }
}
