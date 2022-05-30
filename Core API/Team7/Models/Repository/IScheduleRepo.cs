using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IScheduleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Schedule[]> GetAllSchedulesAsync();

        //Task<Schedule[]> GetSchedulesAsync(string input);

        //Task<Schedule> GetScheduleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
