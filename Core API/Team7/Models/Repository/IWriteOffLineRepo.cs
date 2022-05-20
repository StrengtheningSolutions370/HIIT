using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface IWriteOffLineRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<WriteOffLine[]> GetAllWriteOffLinesAsync();

        //Task<WriteOffLine[]> GetWriteOffLinesAsync(string input);

        //Task<WriteOffLine> GetWriteOffLineIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
