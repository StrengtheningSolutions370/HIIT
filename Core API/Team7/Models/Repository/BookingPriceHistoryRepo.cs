using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class BookingPriceHistoryRepo : IBookingPriceHistoryRepo
    {
        readonly private AppDB DB;

        public BookingPriceHistoryRepo(AppDB appDatabaseContext)
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


        //public async Task<BookingPriceHistory[]> GetAllBookingPriceHistorysAsync()
        //{
        //    IQueryable<BookingPriceHistory> query = DB.BookingPriceHistory;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<BookingPriceHistory[]> GetBookingPriceHistorysAsync(string input)
        //{
        //    IQueryable<BookingPriceHistory> query = DB.BookingPriceHistory.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<BookingPriceHistory> GetBookingPriceHistoryIdAsync(int id)
        //{
        //    IQueryable<BookingPriceHistory> query = DB.BookingPriceHistory.Where(v => v.VenueID == id);
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
