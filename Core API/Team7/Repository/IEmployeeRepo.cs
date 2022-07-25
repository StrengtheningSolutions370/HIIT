using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IEmployeeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<Employee> GetByUserIdAsync(string userId);

        Task<object> GetAllEmployeesAsync();
        Task<Employee[]> _GetAllEmployeesAsync();

        Task<object> GetEmployeesAsync(string input);
        Task<Employee[]> _GetEmployeesAsync(string input);

        Task<object> GetEmployeeIdAsync(int id);
        Task<Employee> _GetEmployeeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
