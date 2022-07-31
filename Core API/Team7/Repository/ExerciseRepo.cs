using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Microsoft.EntityFrameworkCore;


namespace Team7.Models.Repository
{
    public class ExerciseRepo : IExerciseRepo
    {
        readonly private AppDB DB;

        public ExerciseRepo(AppDB appDatabaseContext, IExerciseCategoryRepo exerciseCategoryrepo)
        {
            DB = appDatabaseContext;
        }

        public async void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
        }


        public async Task<object> GetAllExercisesAsync()
        {
            IQueryable<Exercise> query = DB.Exercise;

            if (!query.Any())
                return null;

            return await query.Select(ex =>
                new {
                    ex.ExerciseID,
                    ex.Name,
                    ex.Focus,
                    ex.Url,
                    ex.ExerciseCategory,
                    ex.LessonPlan
                }).ToListAsync();

        }

        public async Task<Exercise[]> _GetAllExercisesAsync()
        {
            IQueryable<Exercise> query = DB.Exercise;

            if (!query.Any())
                return null;

            return await query.Select(ex =>
                new Exercise{
                    ExerciseCategory = ex.ExerciseCategory,
                    ExerciseID = ex.ExerciseID,
                    LessonPlan = ex.LessonPlan,
                    Url = ex.Url,
                    Name = ex.Name,
                    Focus = ex.Focus
                }).ToArrayAsync();
        }

        public async Task<object> GetExercisesAsync(string focus, string name)
        {
            IQueryable<Exercise> query = DB.Exercise.Where(e => e.Name == name || e.Focus == focus);

            if (!query.Any())
                return null;

            return await query.Select(e =>
                new {
                    e.ExerciseID,
                    e.Name,
                    e.Focus,
                    e.Url,
                    e.ExerciseCategory,
                    e.LessonPlan
                }).ToListAsync();

        }

        public async Task<object> GetExerciseIdAsync(int id)
        {

            IQueryable<Exercise> query = DB.Exercise.Where(e => e.ExerciseID == id);

            if (!query.Any())
                return null;

            return await query.Select(e =>
                new {
                    e.ExerciseID,
                    e.Name,
                    e.Focus,
                    e.Url,
                    e.ExerciseCategory,
                    e.LessonPlan
                }).ToListAsync();

        }

        public async Task<Exercise> _GetExerciseIdAsync(int id)
        {

            IQueryable<Exercise> query = DB.Exercise.Where(e => e.ExerciseID == id);

            if (!query.Any())
                return null;

            return await query.SingleAsync();

        }

        public async Task<bool> SaveChangesAsync()
        {
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
