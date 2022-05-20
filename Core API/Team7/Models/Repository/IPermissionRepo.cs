using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IPermissionRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Permission[]> GetAllPermissionsAsync();

        //Task<Permission[]> GetPermissionsAsync(string input);

        //Task<Permission> GetPermissionIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
