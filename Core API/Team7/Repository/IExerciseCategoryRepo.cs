using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IExerciseCategoryRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllExerciseCategorysAsync();

        Task<object> GetExerciseCategorysAsync(string name, string description);

        Task<object> GetExerciseCategoryIdAsync(int id);

        Task<ExerciseCategory> _GetExerciseCategoryIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
