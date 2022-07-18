using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IWriteOffReasonRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<WriteOffReason[]> GetAllWriteOffReasonsAsync();

        //Task<WriteOffReason[]> GetWriteOffReasonsAsync(string input);

        //Task<WriteOffReason> GetWriteOffReasonIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
