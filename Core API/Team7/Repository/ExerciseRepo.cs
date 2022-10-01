using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ExerciseRepo : IExerciseRepo
    {
        readonly private AppDB DB;

        public ExerciseRepo(AppDB appDatabaseContext, IExerciseCategoryRepo exerciseCategoryrepo)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
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
                new
                {
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
                new Exercise
                {
                    ExerciseCategory = ex.ExerciseCategory,
                    ExerciseID = ex.ExerciseID,
                    LessonPlan = ex.LessonPlan,
                    Url = ex.Url,
                    Name = ex.Name,
                    Focus = ex.Focus
                }).ToArrayAsync();
        }

        public async Task<object> GetExercisesAsync(string name, string focus)
        {
            IQueryable<Exercise> query = DB.Exercise.Where(e => e.Name == name || e.Focus == focus);

            if (!query.Any())
                return null;

            return await query.Select(e =>
                new
                {
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
                new
                {
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

            IQueryable<Exercise> query = DB.Exercise.Where(e => e.ExerciseID == id).Select(e => new Exercise
            {
                ExerciseID = e.ExerciseID,
                Name = e.Name,
                Focus = e.Focus,
                Url = e.Url,
                ExerciseCategoryID = e.ExerciseCategoryID,
                ExerciseCategory = e.ExerciseCategory,
                LessonPlan = e.LessonPlan,
            });

            

            if (!query.Any())
                return null;

            return await query.SingleAsync();

        }

        public async Task<object> GetAttatchedLessons(Exercise e)
        {


            var lessons = await DB.Lesson.Select(l => new Lesson
            {
                Name = l.Name,
                LessonPlan = l.LessonPlan
            }).ToArrayAsync();

            List<object> output = new List<object>();

            foreach (Lesson l in lessons) //each lesson in repo
            {
                foreach (LessonPlan lp in l.LessonPlan) //each lessonPlan in that lesson
                {
                    foreach (LessonPlan elp in e.LessonPlan)
                    {
                        if (lp.LessonPlanID == elp.LessonPlanID)
                        {
                            output.Add(l);
                        }
                    }
                }
            }

            return output;

        }

        public async Task<bool> SaveChangesAsync()
        {
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
