using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class PaymentRepo : IPaymentRepo
    {
        readonly private AppDB DB;
        readonly private ISaleItemRepo _saleItemRepo;

        public PaymentRepo(AppDB appDatabaseContext, ISaleItemRepo saleItemRepo)
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


        public async Task<object> GetAllPaymentsAsync()
        {
            IQueryable<Payment> query = DB.Payment;
            if(!query.Any())
            {
                return null;
            }
            return new
            {
                
                result = await query.Select(p =>
                new 
                {
                    p.PaymentID,
                    p.PaymentType,
                    Sale = new {
                    p.Sale.SaleID, p.Sale.Date, p.Sale.AppUser,
                        SaleLine = p.Sale.SaleLine.Select(sl => new { sl.SaleLineID, sl.Quantity, sl.SaleItem})
                    },
                    Booking = new
                    {
                        p.Booking.BookingID, p.Booking.Date, p.Booking.Client,
                            BookingAttendance = p.Booking.BookingAttendance.Select(ba => new {ba.BookingAttendanceID, ba.Attended } )
                    }
                }).ToListAsync()
            };
        }

        //public async Task<Receipt[]> GetReceiptsAsync(string input)
        //{
        //    IQueryable<Receipt> query = DB.Receipt.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<Receipt> GetReceiptIdAsync(int id)
        //{
        //    IQueryable<Receipt> query = DB.Receipt.Where(v => v.VenueID == id);
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
    }
}
