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


        public async Task<object> GetAllVenuesAsync()
        {
            IQueryable<Venue> query = DB.Venue;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Venue.Select(v => new
                    {
                        v.VenueID,
                        v.Name,
                        v.Address,
                        v.PostalCode,
                        v.Capacity,
                        Schedules = v
                            .Schedules
                            .Select(s => new { s.CapacityBooked })
                    }).ToListAsync()
                };
            }
        }

        public async Task<Venue[]> _GetAllVenuesAsync()
        {
            IQueryable<Venue> query = DB.Venue;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<object> GetVenuesAsync(string name, string address = null)
        {
            IQueryable<Venue> query = DB.Venue;
            if (address == null)
            {
                query = DB.Venue.Where(v => v.Name == name || v.Address == name);
            } else
            {
                query = DB.Venue.Where(v => v.Name == name || v.Address == address);
            }

            if (!query.Any())
            {
                return null;
            } else
            {
                return new
                {
                    result = await query.Select(v => new
                    {
                        v.VenueID,
                        v.Name,
                        v.Address,
                        v.PostalCode,
                        v.Capacity,
                        Schedules = v
                            .Schedules
                            .Select(s => new { s.CapacityBooked })
                    }).ToListAsync()
                };
            }

        }

        public async Task<Venue[]> _GetVenuesAsync(string name, string address = null)
        {
            IQueryable<Venue> query = DB.Venue;
            if (address == null)
            {
                query = DB.Venue.Where(v => v.Name == name);
            }
            else
            {
                query = DB.Venue.Where(v => v.Name == name || v.Address == address);
            }

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<object> GetVenueIdAsync(int id)
        {
            IQueryable<Venue> query = DB.Venue.Where(v => v.VenueID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                 return new
                {
                    result = await query.Select(v => new
                    {
                        v.VenueID,
                        v.Name,
                        v.Address,
                        v.PostalCode,
                        v.Capacity,
                        Schedules = v
                            .Schedules
                            .Select(s => new {s.CapacityBooked })
                    }).ToListAsync()
                };
            }
        }

        public async Task<Venue> _GetVenueIdAsync(int id)
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
