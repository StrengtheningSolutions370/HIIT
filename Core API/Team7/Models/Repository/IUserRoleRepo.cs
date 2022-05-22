using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IUserRoleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<UserRole[]> GetAllUserRolesAsync();

        //Task<UserRole[]> GetUserRolesAsync(string input);

        //Task<UserRole> GetUserRoleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
