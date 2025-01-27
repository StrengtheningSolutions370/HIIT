﻿using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class OrderStatusRepo : IOrderStatusRepo
    {
        readonly private AppDB DB;

        public OrderStatusRepo(AppDB appDatabaseContext)
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


        //public async Task<OrderStatus[]> GetAllOrderStatussAsync()
        //{
        //    IQueryable<OrderStatus> query = DB.OrderStatus;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<OrderStatus[]> GetOrderStatussAsync(string input)
        //{
        //    IQueryable<OrderStatus> query = DB.OrderStatus.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<OrderStatus> GetOrderStatusIdAsync(int id)
        //{
        //    IQueryable<OrderStatus> query = DB.OrderStatus.Where(v => v.VenueID == id);
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
