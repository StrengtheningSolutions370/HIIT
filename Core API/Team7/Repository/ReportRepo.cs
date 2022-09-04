using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Repository
{
    public class ReportRepo: IReportRepo
    {
        readonly private AppDB DB;

        public ReportRepo(AppDB appDatabaseContext, ISaleItemRepo saleItemRepo)
        {
            DB = appDatabaseContext;

        }
        public async Task<object> getAllSaleCategoryReport()
        {
            IQueryable<SaleCategory> query = DB.SaleCategory;
            if (!query.Any())
            {
                return null;
            }
            return new
            {

                result = await query.Select(sc =>
                new
                {
                   sc.SaleCategoryID,
                   sc.Name,
                   saleItem = sc
                   .SaleItem
                   .Select(si => new 
                   {
                       si.SaleItemID,
                       si.Name,
                       si.QuantityOnHand,
                       PriceHistory = si
                        .PriceHistory
                        .Select(sph => new {sph.PriceHistoryID, sph.Date, sph.CostAmount, sph.SaleAmount}),
                       SaleLine = si
                       .SaleLine
                       .Select(sl => new {sl.SaleLineID, sl.Quantity, date = sl.Sale.Date})
                   })
                }).ToListAsync()
            };
        }

        public async Task<object> getAllSaleItemReport()
        {
            IQueryable<SaleItem> query = DB.SaleItem;
            if (!query.Any())
            {
                return null;
            }
            return new
            {

                result = await query.Select(si =>
                new
                {
                    si.SaleItemID,
                    si.Name,
                    si.QuantityOnHand,
                    PriceHistory = si
                        .PriceHistory
                        .Select(sph => new { sph.PriceHistoryID, sph.Date, sph.CostAmount, sph.SaleAmount }),
                    SaleLine = si
                       .SaleLine
                       .Select(sl => new { sl.SaleLineID, sl.Quantity, date = sl.Sale.Date, user = sl.Sale.AppUser }),
                    SaleCategory = new { si.SaleCategory.SaleCategoryID, si.SaleCategory.Name, si.SaleCategory.Description }

                }).ToListAsync()
            };
        }

        public async Task<object> getAllBookingReport()
        {
            IQueryable<Booking> query = DB.Booking;
            if (!query.Any())
            {
                return null;
            }
            return new
            {

                result = await query.Select(b =>
                new
                {
                    b.BookingID,
                    b.Date,
                    BookingAttendance = b
                    .BookingAttendance
                    .Select(ba => new
                    {
                        ba.BookingAttendanceID,
                        ba.ScheduleID,
                        ba.Attended,
                        BookingPriceHistory = ba
                        .Schedule.BookingPriceHistory.Select(bph => new { bph.BookingPriceHistoryID, bph.Date, bph.Amount })
                    })

                }).ToListAsync()
            };
        }
    }
}
