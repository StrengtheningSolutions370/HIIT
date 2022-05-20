using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ExerciseCategoryRepo //: IExerciseCategoryRepo
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


        //public async Task<ExerciseCategory[]> GetAllExerciseCategorysAsync()
        //{
        //    IQueryable<ExerciseCategory> query = DB.ExerciseCategory;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<ExerciseCategory[]> GetExerciseCategorysAsync(string input)
        //{
        //    IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(v => v.Name == input || v.Address == input);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.ToArrayAsync();
        //    }
        //    return null;

        //}

        //public async Task<ExerciseCategory> GetExerciseCategoryIdAsync(int id)
        //{
        //    IQueryable<ExerciseCategory> query = DB.ExerciseCategory.Where(v => v.VenueID == id);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.SingleAsync();
        //    }
        //    return null;
        //}

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
