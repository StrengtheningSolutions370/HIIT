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


        Task<object> GetQualificationsAsync(string input);
#pragma warning disable IDE1006 // Naming Styles
        Task<Qualification> _GetQualificationIdAsync(int id);
#pragma warning restore IDE1006 // Naming Styles
        Task<object> GetQualificationIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
