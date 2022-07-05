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

        //Task<ExerciseCategory[]> GetAllExerciseCategorysAsync();

        //Task<ExerciseCategory[]> GetExerciseCategorysAsync(string input);

        //Task<ExerciseCategory> GetExerciseCategoryIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
