using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class VATRepo : IVATRepo
    {

        readonly private AppDB DB;

        public VATRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllVATsAsync()
        {
            IQueryable<VAT> query = DB.VAT;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.VAT.Select(vat => new
                    {
                        vat.VATID,
                        vat.Percentage,
                        vat.Date
                    }).ToListAsync()
                };
            }
        }

        public async Task<object> GetVATsAsync(decimal? percentage, DateTime? date)
        {
            IQueryable<VAT> query = DB.VAT.Where(v => v.Percentage == percentage || v.Date == date); 
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(vat => new
                    {
                        vat.VATID,
                        vat.Percentage,
                        vat.Date
                    }).ToListAsync()
                };
            }
        }

        public async Task<object> GetVATIdAsync(int id)
        {
            IQueryable<VAT> query = DB.VAT.Where(v => v.VATID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.VAT.Select(vat => new
                    {
                        vat.VATID,
                        vat.Percentage,
                        vat.Date
                    }).ToListAsync()
                };
            }
        }

        public async Task<VAT> _GetVATIdAsync(int id)
        {
            IQueryable<VAT> query = DB.VAT.Where(v => v.VATID == id);
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
