using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface ILessonRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Lesson[]> GetAllLessonsAsync();

        //Task<Lesson[]> GetLessonsAsync(string input);

        //Task<Lesson> GetLessonIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
