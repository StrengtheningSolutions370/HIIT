using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;

namespace Team7.Models.Repository
{
    public class VenueRepo : IVenueRepo
    {
        private AppDB DB;

        public VenueRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }
        public void Add<T>(T Entity) where T : class
        {
            try
            {
                DB.Add(Entity);
            } catch (Exception)
            {
                
            }
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }

        public async Task<Venue[]> GetAllVenuesAsync()
        {
             IQueryable<Venue> query = DB.Venues;
            return await query.ToArrayAsync();
        }

        public async Task<Venue> GetVenueAsync(string input)
        {
            IQueryable<Venue> query = DB.Venues.Where(v => v.Name == input || v.Address == input);
            return await query.FirstOrDefaultAsync();

        }

        public async Task<bool> SaveChangesAsync()
        {
            return await DB.SaveChangesAsync() > 0;
        }

        public void Update<T>(T Entity) where T : class
        {
            throw new NotImplementedException();
        }
    }
}
