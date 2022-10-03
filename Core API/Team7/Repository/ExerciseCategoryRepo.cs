using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ExerciseCategoryRepo : IExerciseCategoryRepo
    {
        readonly private AppDB DB;

        public ExerciseCategoryRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllExerciseCategorysAsync()
        {
            IQueryable<ExerciseCategory> query = DB.ExerciseCategory;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.ExerciseCategory.Select(ec => new
                    {
                        ec.ExerciseCategoryID,
                        ec.Name,
                        ec.Description,
                        Exercises = ec
                            .Exercise
                            .Select(e => new { e.ExerciseID, e.Name, e.Focus })
                    }).ToListAsync()
                };
            }
            //IQueryable<object> query = DB.ExerciseCategory;
            //return await query.ToArrayAsync();
        }

        public async Task<object> GetExerciseCategorysAsync(string name, string description)
        {
            IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(ec => ec.Name == name || ec.Description == description);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(ec => new
                    {
                        ec.ExerciseCategoryID,
                        ec.Name,
                        ec.Description,
                        Exercises = ec
                            .Exercise
                            .Select(e => new { e.ExerciseID, e.Name, e.Focus })
                    }).ToListAsync()
                };
            }
        }


        public async Task<object> GetExerciseCategoryIdAsync(int id)
        {
            IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(ec => ec.ExerciseCategoryID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(ec => new
                    {
                        ec.ExerciseCategoryID,
                        ec.Name,
                        ec.Description,
                        Exercises = ec
                            .Exercise
                            .Select(e => new { e.ExerciseID, e.Name, e.Focus })
                    }).ToListAsync()
                };
            }
        }

        public async Task<ExerciseCategory> _GetExerciseCategoryIdAsync(int id)
        {
            IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(ec => ec.ExerciseCategoryID == id).Select(sc => new ExerciseCategory
            {
                ExerciseCategoryID = sc.ExerciseCategoryID,
                Name = sc.Name,
                Description = sc.Description,
                Exercise = sc.Exercise
            });
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        public async Task<ExerciseCategory> _GetExerciseCategoryIdAsyncOriginal(int id)
        {
            IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(ec => ec.ExerciseCategoryID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }


    }
}
