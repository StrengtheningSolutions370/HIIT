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

        public async Task<WriteOff[]> GetAllWriteOffsAsync()
        {
            var query = await DB.WriteOff.Select(w =>
                new WriteOff
                {
                    WriteOffID = w.WriteOffID,
                    Date = w.Date,
                    EmployeeID = w.EmployeeID,
                    WriteOffLine = w.WriteOffLine,
                }).ToArrayAsync();

            if (!query.Any())
                return null;

            var emps = DB.Employee.Select(e => new Employee
            {
                EmployeeID = e.EmployeeID,
                Photo = e.Photo,
                Qualification = e.Qualification,
                AppUser = e.AppUser,
            }).ToList();

            foreach (var item in query)
            {
                item.Employee = GetEmployee(emps, item.EmployeeID);
            }

            return query.ToArray();
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
