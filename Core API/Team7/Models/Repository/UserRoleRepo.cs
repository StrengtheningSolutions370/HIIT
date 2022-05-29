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

        public void Add(object Entity) 
        {
            var temp = Entity as UserRole;
            var tempPermissions = new List<Permission>();
            
                foreach (var permission in temp.Permission)
                    {
                        tempPermissions.Add(new Permission()
                        {
                            Description = permission.Description                           
                        });
                    }

            UserRole userRole = new UserRole()
            {
                Description = temp.Description,
                Name = temp.Name,
                Permission = tempPermissions
            };
            //{
            //    temp.Name,
            //    temp.Description
            //    //tempPermissions
            //};
            DB.UserRole.Add(userRole);
            //DB.Add(userRole);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
        }


        public async Task<object> GetAllUserRolesAsync()
        {
            IQueryable<UserRole> query = DB.UserRole;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.UserRole.Select(ur => new
                    {
                        ur.UserRoleID,
                        ur.Name,
                        ur.Description,
                        permissions = ur
                        .Permission
                        .Select(p => new { p.PermissionID, p.Description })
                    }).ToListAsync()
                };
            }

        }

        public async Task<UserRole[]> GetUserRolesAsync(string input)
        {
            IQueryable<UserRole> query = DB.UserRole.Where(v => v.Name == input || v.Description == input);
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
