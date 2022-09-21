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


        public async Task<Refund[]> GetAllRefundsAsync()
        {
            var query = DB.Refund.Select(r => new Refund
            {
                RefundID = r.RefundID,
                Date = r.Date,
                Notes = r.Notes,
                Total = r.Total,
                complete = r.complete,
                Payment = new Payment
                {
                    PaymentID = r.Payment.PaymentID,
                    PaymentTypeID = r.Payment.PaymentTypeID,
                    SaleID = r.Payment.SaleID,
                    Sale = new Sale
                    {
                        AppUser = r.Payment.Sale.AppUser
                    }
                },
                RefundReason = r.RefundReason,
            });

            if (query.Any())
                return await query.ToArrayAsync();

            return null;
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

        public async Task<Refund> GetRefundByIdAsync(int id)
        {
            var r = DB.Refund.Where(p => p.RefundID == id);

            if (r.Any())
                return await r.SingleAsync();

            return null;
        }
    }
}
