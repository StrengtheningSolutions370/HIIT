using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class PaymentRepo : IPaymentRepo
    {
        readonly private AppDB DB;

        public PaymentRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllSalePaymentsAsync()
        {
            IQueryable<Payment> query = DB.Payment;
            query = query.Where(x => x.SaleID != null);
            if (!query.Any())
            {
                return null;
            }
           
            //var tempBook = query.Select(p => p.Booking.BookingID);
            return new
                {

                    result = await query.Select(p =>
                    new
                    {
                        p.PaymentID,
                        PaymentType = new
                        {
                            p.PaymentType.PaymentTypeID,
                            p.PaymentType.Name
                        },
                        //Sale = new
                        //{
                        //    p.Sale.SaleID,
                        //    p.Sale.Date,
                        //    p.Sale.AppUser.FirstName,
                        //    p.Sale.AppUser.LastName,    
                        //    SaleLine = p.Sale.SaleLine.Select(sl => new { sl.SaleLineID, sl.Quantity, sl.SaleItem })
                        //}
                        Sale = new
                        {
                            SaleID = p.Sale.SaleID,
                            Date = p.Sale.Date,
                            UserID = p.Sale.UserID,
                            AppUser = p.Sale.AppUser,
                            SaleLine = p.Sale.SaleLine.Select(sl => new SaleLine {
                                SaleLineID = sl.SaleLineID,
                                Quantity = sl.Quantity,
                                SaleID = sl.SaleLineID,
                                SaleItem = new SaleItem
                                {
                                    SaleItemID = sl.SaleItem.SaleItemID,
                                    Name = sl.SaleItem.Name,
                                    Photo = sl.SaleItem.Photo,
                                    Description = sl.SaleItem.Description,
                                    QuantityOnHand = sl.SaleItem.QuantityOnHand,
                                    SaleCategoryID = sl.SaleItem.SaleCategoryID,
                                    PriceHistory = sl.SaleItem.PriceHistory,
                                }
                            }),
                            Payment = p.Sale.Payment
                        }
                    }).ToListAsync()
                };

        }

        public async Task<object> GetAllBookingPaymentsAsync()
        {
            IQueryable<Payment> query = DB.Payment;
            query = query.Where(x => x.BookingID != null);
            if (!query.Any())
            {
                return null;
            }
            //var tempBook = query.Select(p => p.Booking.BookingID);
            
            return new
            {
                
                result = await query.Select(p =>
                new
                {
                    p.PaymentID,
                    PaymentType = new
                    {
                        p.PaymentType.PaymentTypeID,
                        p.PaymentType.Name
                    },
                    Booking = new
                    {
                        p.Booking.BookingID,
                        p.Booking.Date,
                        p.Booking.Client,
                        BookingAttendance = p.Booking.BookingAttendance.Select(ba => new { ba.BookingAttendanceID, ba.Attended })
                    }
                }).ToListAsync()
            };

        }

        //    return new
        //    {

        //        result = await query.Select(p =>
        //        new
        //        {
        //            p.PaymentID,
        //            PaymentType = new
        //            {
        //                p.PaymentType.PaymentTypeID,
        //                p.PaymentType.Name
        //            },
        //            Booking = new
        //            {
        //                p.Booking.BookingID,
        //                p.Booking.Date,
        //                p.Booking.Client,
        //                BookingAttendance = p.Booking.BookingAttendance.Select(ba => new { ba.BookingAttendanceID, ba.Attended })
        //            }
        //        }).ToListAsync()
        //    };
        //} else
        //{
        //    return new
        //    {

        //        result = await query.Select(p =>
        //        new
        //        {
        //            p.PaymentID,
        //            PaymentType = new
        //            {
        //                p.PaymentType.PaymentTypeID,
        //                p.PaymentType.Name
        //            },
        //            Sale = new
        //            {
        //                p.Sale.SaleID,
        //                p.Sale.Date,
        //                p.Sale.AppUser.FirstName,
        //                p.Sale.AppUser.LastName,
        //                SaleLine = p.Sale.SaleLine.Select(sl => new { sl.SaleLineID, sl.Quantity, sl.SaleItem })
        //            },
        //            Booking = new
        //            {
        //                p.Booking.BookingID,
        //                p.Booking.Date,
        //                p.Booking.Client,
        //                BookingAttendance = p.Booking.BookingAttendance.Select(ba => new { ba.BookingAttendanceID, ba.Attended })
        //            }
        //        }).ToListAsync()
        //    };
        //}



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
