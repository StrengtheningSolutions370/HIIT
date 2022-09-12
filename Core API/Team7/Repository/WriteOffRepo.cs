using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;



namespace Team7.Models.Repository
{
    public class WriteOffRepo : IWriteOffRepo
    {
        readonly private AppDB DB;

        public WriteOffRepo(AppDB appDatabaseContext)
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

        static Employee GetEmployee(List<Employee> emps, int id)
        {
            foreach (Employee emp in emps)
            {
                if (emp.EmployeeID == id)
                    return emp;
            }
            return null;
        }

        public async Task<object> GetAllWriteOffsAsync()
        {
            IQueryable<WriteOff> query = DB.WriteOff;
            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await query.Select(w =>
                new
                {
                    w.WriteOffID,
                    w.Date,
                    Employee = new
                    {
                        w.Employee.EmployeeID,
                        w.Employee.Contract,
                        w.Employee.IDNumber,
                        w.Employee.Photo,
                        w.Employee.AppUser
                    },
                    WriteOffLine = w.WriteOffLine.Select(wl => new { wl.WriteOffLineID, wl.Quantity, wl.SaleItem, wl.WriteOffReason})
                }).ToListAsync()
            };
        }

        public async Task<object> GetWriteOffIdAsync(int id)
        {
            IQueryable<WriteOff> query = DB.WriteOff.Where(w => w.WriteOffID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(w =>
                    new
                    {
                        w.WriteOffID,
                        w.Date,
                        Employee = new
                        {
                            w.Employee.EmployeeID,
                            w.Employee.Contract,
                            w.Employee.IDNumber,
                            w.Employee.Photo,
                            w.Employee.AppUser
                        },
                        WriteOffLine = w.WriteOffLine.Select(wl => new { wl.WriteOffLineID, wl.Quantity, wl.SaleItem, wl.WriteOffReason })
                    }).ToListAsync()
                };
            }
        }

        public async Task<WriteOff> _GetWriteOffIdAsync(int id)
        {
            IQueryable<WriteOff> query = DB.WriteOff.Where(w => w.WriteOffID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        //public async Task<WriteOff[]> GetWriteOffsAsync(string input)
        //{
        //    IQueryable<WriteOff> query = DB.WriteOff.Where(v => v.Name == input || v.Address == input);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.ToArrayAsync();
        //    }
        //    return null;

        //}

        //public async Task<WriteOff> GetWriteOffIdAsync(int id)
        //{
        //    IQueryable<WriteOff> query = DB.WriteOff.Where(v => v.VenueID == id);
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
    }
}
