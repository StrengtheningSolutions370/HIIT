using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ISessionRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Session[]> GetAllSessionsAsync();

        //Task<Session[]> GetSessionsAsync(string input);

        //Task<Session> GetSessionIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
