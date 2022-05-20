using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class PaymentTypeRepo //: IPaymentTypeRepo
    {
        readonly private AppDB DB;

        public PaymentTypeRepo(AppDB appDatabaseContext)
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


        //public async Task<PaymentType[]> GetAllPaymentTypesAsync()
        //{
        //    IQueryable<PaymentType> query = DB.PaymentType;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<PaymentType[]> GetPaymentTypesAsync(string input)
        //{
        //    IQueryable<PaymentType> query = DB.PaymentType.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<PaymentType> GetPaymentTypeIdAsync(int id)
        //{
        //    IQueryable<PaymentType> query = DB.PaymentType.Where(v => v.VenueID == id);
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
