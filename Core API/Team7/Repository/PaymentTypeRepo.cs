using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class PaymentTypeRepo : IPaymentTypeRepo
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
        public async Task<object> GetAllPaymentTypesAsync()
        {
            IQueryable<PaymentType> query = DB.PaymentType;
            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await query.Select(pt => new
                {
                    pt.PaymentTypeID,
                    pt.Name
                }).ToListAsync()
            };
        }

        public async Task<object> GetPaymentTypesAsync(string name)
        {
            IQueryable<PaymentType> query = DB.PaymentType.Where(pt => pt.Name == name);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(pt => new
                    {
                        pt.PaymentTypeID,
                        pt.Name
                    }).ToListAsync()
                };
            }

        }

        public async Task<object> GetPaymentTypeIdAsync(int id)
        {
            IQueryable<PaymentType> query = DB.PaymentType.Where(pt => pt.PaymentTypeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(pt => new
                    {
                        pt.PaymentTypeID,
                        pt.Name,
                        Payment =
                            pt
                            .Payment
                            .Select(p => new {
                                p.PaymentID,
                                p.Sale,
                                p.Booking}),
                    }).ToListAsync()
                };
            }
        }

        public async Task<PaymentType> _GetPaymentTypeIdAsync(int id)
        {
            IQueryable<PaymentType> query = DB.PaymentType.Where(pt => pt.PaymentTypeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }


        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
