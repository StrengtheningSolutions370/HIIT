using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.ViewModels;

namespace Team7.Models.Repository
{
    public interface IQualificationRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllQualificationsAsync();

        Task<object> GetQualificationsAsync(string input);

        Task<Qualification> GetQualificationIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
