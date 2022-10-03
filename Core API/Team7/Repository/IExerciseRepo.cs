using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IExerciseRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllExercisesAsync();

        Task<object> GetAttatchedLessons(Exercise e);

        Task<Exercise[]> _GetAllExercisesAsync();

        Task<object> GetExercisesAsync(string name, string description);
        Task<object> GetExerciseIdAsync(int id);
        Task<Exercise> _GetExerciseIdAsync(int id);
        Task<Exercise> _GetExerciseIdAsyncOriginal(int id);

        Task<bool> SaveChangesAsync();
    }
}
