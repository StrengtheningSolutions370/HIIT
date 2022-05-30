using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IVenueRepo
    {

        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllVenuesAsync();

        Task<Venue[]> _GetAllVenuesAsync();

        Task<object> GetVenuesAsync(string name, string? address);

        Task<Venue[]> _GetVenuesAsync(string name, string? address);

        Task<object> GetVenueIdAsync(int id);

        Task<Venue> _GetVenueIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
