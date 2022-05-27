using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class PermissionRepo : IPermissionRepo
    {
        readonly private AppDB DB;

        public PermissionRepo(AppDB appDatabaseContext)
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


        public async Task<Permission[]> GetAllPermissionsAsync()
        {
            IQueryable<Permission> query = DB.Permission;
            return await query.ToArrayAsync();

        }

        public async Task<Permission[]> GetPermissionsAsync(string input)
        {
            IQueryable<Permission> query = DB.Permission.Where(v => v.Description == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        //public async Task<Permission> GetPermissionIdAsync(int id)
        //{
        //    IQueryable<Permission> query = DB.Permission.Where(v => v.VenueID == id);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.SingleAsync();
        //    }
        //    return null;
        //}

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }

        public Task<Permission> GetPermissionIdAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
