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

        Task<object> GetAllQualificationsAsync();
        Task<Qualification[]> _GetAllQualificationsAsync();
        Task<object> GetQualificationsAsync(string description);

        Task<Qualification[]> _GetQualificationsAsync(string description);

        Task<object> GetQualificationIdAsync(int id);

        Task<Qualification> _GetQualificationIdAsync(int id);


        Task<bool> SaveChangesAsync();
    }
}
