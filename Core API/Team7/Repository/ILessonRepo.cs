using System.Threading.Tasks;
using Team7.Models;

namespace Team7.Models.Repository
{
    public interface ILessonRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<Lesson[]> GetAllLessonsAsync();

        Task<Lesson> GetLessonIdAsync(int id);
        Task<Lesson> GetLessonIdAsyncOriginal(int id);

        Task<bool> SaveChangesAsync();

        Task<bool> checkName(Lesson l);

        Task<Lesson> GetLessonByNameAsync(string name);

    }
}
