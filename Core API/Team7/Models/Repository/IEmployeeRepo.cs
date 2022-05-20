using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IEmployeeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Employee[]> GetAllEmployeesAsync();

        //Task<Employee[]> GetEmployeesAsync(string input);

        //Task<Employee> GetEmployeeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
