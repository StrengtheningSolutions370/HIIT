using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IWriteOffRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<WriteOff[]> GetAllWriteOffsAsync();

        //Task<WriteOff[]> GetWriteOffsAsync(string input);

        //Task<WriteOff> GetWriteOffIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
