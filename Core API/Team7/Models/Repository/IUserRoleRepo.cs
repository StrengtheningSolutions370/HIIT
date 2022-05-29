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
        Task<object> GetAllUserRolesAsync();
        Task<UserRole[]> _GetAllUserRolesAsync();
        Task<object> GetUserRolesAsync(string name, string? description);
        Task<UserRole[]> _GetUserRolesAsync(string name, string description);
        Task<object> GetUserRoleIdAsync(int id);
        Task<UserRole> _GetUserRoleIdAsync(int id);
        Task<bool> SaveChangesAsync();
    }
}
