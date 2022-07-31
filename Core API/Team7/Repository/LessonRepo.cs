using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class LessonRepo : ILessonRepo
    {
        readonly private AppDB DB;
        readonly private ILessonPlanRepo _lessonPlanRepo;

        public LessonRepo(AppDB appDatabaseContext, ILessonPlanRepo lessonPlanRepo)
        {
            DB = appDatabaseContext;
            _lessonPlanRepo = lessonPlanRepo;
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


        public async Task<Lesson[]> GetAllLessonsAsync()
        {

            IQueryable<Lesson> lessons = DB.Lesson.Select(l => new Lesson
            {
                LessonID = l.LessonID,
                Name = l.Name,
                EmployeeID = l.EmployeeID,
                LessonPlan = l.LessonPlan,
                Schedule = l.Schedule,
            });

            return await lessons.ToListAsync()

        }

        public async Task<Lesson> GetLessonIdAsync(int id)
        {

            IQueryable<Lesson> query = DB.Lesson.Where(l => l.LessonID == id);

            if (!query.Any())
                return null;

               
            return await query.Select(l => 
                new  Lesson {
                    LessonID = l.LessonID,
                    Name = l.Name,
                    Employee = l.Employee,
                    LessonPlan = l.LessonPlan,
                    Schedule = l.Schedule
                }).SingleAsync();

        }

        public async Task<bool> SaveChangesAsync()
        {
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
