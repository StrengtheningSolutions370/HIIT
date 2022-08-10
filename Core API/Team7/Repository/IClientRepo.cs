using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IClientRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object[]> GetAllClientsAsync();

        Task<Client[]> GetClientsAsync(string input);

        Task<Client> GetClientIdAsync(string id);

        Task<bool> SaveChangesAsync();
    }
}
