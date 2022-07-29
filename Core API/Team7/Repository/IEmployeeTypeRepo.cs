using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IEmployeeTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllEmployeeTypesAsync();
        Task<EmployeeType[]> _GetAllEmployeeTypesAsync();

        Task<object> GetEmployeeTypesAsync(string input);
        Task<EmployeeType[]> _GetEmployeeTypesAsync(string input);
        Task<object> GetEmployeeTypeIdAsync(int id);
        Task<EmployeeType> _GetEmployeeTypeIdAsync(int id);
        Task<bool> SaveChangesAsync();
    }
}
