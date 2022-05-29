using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class UserRoleRepo: IUserRoleRepo
    {

        readonly private AppDB DB;

        public UserRoleRepo(AppDB appDatabaseContext)
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


        public async Task<UserRole[]> GetAllUserRolesAsync()
        {
            IQueryable<UserRole> query = DB.UserRole;
            return await query.ToArrayAsync();

        }

        public async Task<object> GetUserRolesAsync(string name, string description)
        {
            IQueryable<UserRole> query = DB.UserRole.Where(v => v.Name == name || v.Description == description);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<UserRole> GetUserRoleIdAsync(int id)
        {
            IQueryable<UserRole> query = DB.UserRole.Where(v => v.UserRoleID == id);
            if (!query.Any())
            {
                return null;
            }
            else
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
