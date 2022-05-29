using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;

namespace Team7.Models.Repository
{
    public class VenueRepo: IVenueRepo
    {
        readonly private AppDB DB;

        public VenueRepo(AppDB appDatabaseContext)
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


        public async Task<Venue[]> GetAllVenuesAsync()
        {
            IQueryable<Venue> query = DB.Venue;
            return await query.ToArrayAsync();

        }

        public async Task<Venue[]> GetVenuesAsync(string input)
        {
            IQueryable<Venue> query = DB.Venue.Where(v => v.Name == input || v.Address == input);
            if (!query.Any())
            {
                return null;
            } else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<Venue> GetVenueIdAsync(int id)
        {
            IQueryable<Venue> query = DB.Venue.Where(v => v.VenueID == id);
            if (!query.Any())
            {
                return null;
            } else
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
