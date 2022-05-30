using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IUserRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<User[]> GetAllUsersAsync();

        //Task<User[]> GetUsersAsync(string input);

        //Task<User> GetUserIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
