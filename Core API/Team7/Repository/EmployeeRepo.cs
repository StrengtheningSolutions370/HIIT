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

        public EmployeeRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
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
            IQueryable<Employee> query = DB.Employee;

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
            //IQueryable<object> query = DB.QualificationType;
            //return await query.ToArrayAsync();

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
