using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IScheduleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllSchedulesAsync();

        Task<object> GetAllDateSessions();

        Task<object> GetSchedulesAsync(System.DateTime input);

        Task<object> GetScheduleIdAsync(int id);

        Task<Schedule> _GetScheduleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
