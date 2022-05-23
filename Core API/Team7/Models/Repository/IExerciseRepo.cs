using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IExerciseRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Exercise[]> GetAllExercisesAsync();

        //Task<Exercise[]> GetExercisesAsync(string input);

        //Task<Exercise> GetExerciseIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
