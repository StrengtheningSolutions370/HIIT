using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IClientRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<Client[]> GetAllClientsAsync();

        Task<Client[]> GetClientsAsync(string input);

        Task<Client> GetClientIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
