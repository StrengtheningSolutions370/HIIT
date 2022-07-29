using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models.Repository;


namespace Team7.Models.Repository
{
    public class EmployeeRepo : IEmployeeRepo
    {
        readonly private AppDB DB;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ITitleRepo _titleRepo;

        public EmployeeRepo(ITitleRepo titleRepo, AppDB appDatabaseContext, RoleManager<IdentityRole> roleManager, UserManager<AppUser> userManager)
        {
            DB = appDatabaseContext;
            this._titleRepo = titleRepo;
            this._roleManager = roleManager;
            this._userManager = userManager;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
            DB.SaveChanges();
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
            DB.SaveChanges();
        }

        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
            DB.SaveChanges();
        }


        public async Task<object> GetAllEmployeesAsync()
        {

            /*var o = new List<object>();

            var emps = await DB.Employee.Select(e => new
            {
                Photo = e.Photo,
                Contract = e.Contract,
                IDNumber = e.IDNumber,
                Qualification = e.Qualification,
                EmployeeType = e.EmployeeType,
                AppUser = e.AppUser,
            }).ToListAsync();

            foreach (var e in emps)
            {
                o.Add(new
                {
                    Data = e,
                    Role = await _userManager.GetRolesAsync(e.AppUser)
                });
            }

            return o;*/

            var o = new List<object>();

            var emps = await DB.Employee.Select(e => new
            {
                EmployeeID = e.EmployeeID,
                Photo = e.Photo,
                Contract = e.Contract,
                IDNumber = e.IDNumber,
                Qualification = e.Qualification,
                EmployeeType = e.EmployeeType,
                AppUser = e.AppUser,
                Lesson = e.Lesson,
                Schedule = e.Schedule,
            }).ToListAsync();


            var titles = await DB.Title.Select(s => new Title
            {
                Description = s.Description,
                User = s.User
            }).ToListAsync();

            foreach (var e in emps)
            {
                e.AppUser.Title = getTitleFromId(titles, e.AppUser.Id);
            }

            foreach (var e in emps)
            {
                o.Add(new
                {
                    Data = e,
                    Role = await _userManager.GetRolesAsync(e.AppUser),
                });
            }

            return o;

        }

        static Title getTitleFromId(List<Title> titles, string id)
        {
            foreach (var title in titles)
            {
                foreach(var item in title.User)
                {
                    if (item.Id == id)
                    {
                        return new Title
                        {
                            /*titleID = title.TitleID,
                            description = title.Description*/
                            TitleID = title.TitleID,
                            Description = title.Description,
                        };
                    }
                }
            }
            return null;
        }

        public async Task<Employee[]> _GetAllEmployeesAsync()
        {
            IQueryable<Employee> query = DB.Employee;
            if(!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }
        public async Task<object> GetEmployeesAsync(string input)
        {
            /*IQueryable<Employee> query = DB.Employee.Where(e => e.Name == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Employee.Select(e => new
                    {
                        e.EmployeeID,
                        e.Photo,
                        e.IDNumber,
                        e.Qualification,
                        e.Contract,
                        e.EmployeeType,
                    }).ToListAsync()
                };
            }*/
            return null;
        }
        public async Task<Employee[]> _GetEmployeesAsync(string input)
        {
            /*IQueryable<Employee> query = DB.Employee.Where(e => e.Name == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }*/
            return null;
        }

        public async Task<Employee> GetByUserIdAsync(string AspId)
        {
            /*return DB.Employee.Select().Where(e => e.UserID == AspId).FirstOrDefault();*/
            var all = await DB.Employee.Select(e => new Employee
            {
                EmployeeID = e.EmployeeID,
                Photo = e.Photo,
                Contract = e.Contract,
                IDNumber = e.IDNumber,
                Qualification = e.Qualification,
                EmployeeType = e.EmployeeType,
                AppUser = e.AppUser,
                Lesson = e.Lesson,
                Schedule = e.Schedule,
            }).ToListAsync();
            return all.Where(e => e.AppUser.Id == AspId).First();
        }

        public async Task<object> GetEmployeeIdAsync(int id)
        {
            IQueryable<Employee> query = DB.Employee.Where(e => e.EmployeeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Employee.Select(e => new
                    {
                        e.EmployeeID,
                        e.Photo,
                        e.IDNumber,
                        e.Qualification,
                        e.Contract,
                        e.EmployeeType,
                    }).ToListAsync()
                };
            }
        }
        public async Task<Employee> _GetEmployeeIdAsync(int id)
        {
            IQueryable<Employee> query = DB.Employee.Where(e => e.EmployeeID == id);
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
