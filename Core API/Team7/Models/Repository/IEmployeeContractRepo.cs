using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IEmployeeContractRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<EmployeeContract[]> GetAllEmployeeContractsAsync();

        //Task<EmployeeContract[]> GetEmployeeContractsAsync(string input);

        //Task<EmployeeContract> GetEmployeeContractIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
