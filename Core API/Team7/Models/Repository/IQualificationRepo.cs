using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IQualificationRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Qualification[]> GetAllQualificationsAsync();

        //Task<Qualification[]> GetQualificationsAsync(string input);

        //Task<Qualification> GetQualificationIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
