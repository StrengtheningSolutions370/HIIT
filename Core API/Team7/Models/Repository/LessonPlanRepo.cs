using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Models;


namespace Team7.Models.Repository
{
    public class LessonPlanRepo : ILessonPlanRepo
    {
        readonly private AppDB DB;

        public LessonPlanRepo(AppDB appDatabaseContext)
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


        //public async Task<LessonPlan[]> GetAllLessonPlansAsync()
        //{
        //    IQueryable<LessonPlan> query = DB.LessonPlan;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<LessonPlan[]> GetLessonPlansAsync(string input)
        //{
        //    IQueryable<LessonPlan> query = DB.LessonPlan.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<LessonPlan> GetLessonPlanIdAsync(int id)
        //{
        //    IQueryable<LessonPlan> query = DB.LessonPlan.Where(v => v.VenueID == id);
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
