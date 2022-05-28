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


        public async Task<VAT[]> GetAllVATsAsync()
        {
            IQueryable<VAT> query = DB.VAT;
            return await query.ToArrayAsync();

        }

        public async Task<VAT[]> GetVATsAsync(decimal? percentage, DateTime? date)
        {
            IQueryable<VAT> query = DB.VAT.Where(v => v.Percentage == percentage || v.Date == date); 
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<VAT> GetVATIdAsync(int id)
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

        Task<VAT[]> IVATRepo.GetVATsAsync(string input)
        {
            throw new NotImplementedException();
        }
    }
}
