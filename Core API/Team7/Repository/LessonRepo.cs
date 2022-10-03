using Microsoft.EntityFrameworkCore;
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

            var query = await DB.Lesson.Select(l =>
                new Lesson
                {
                    LessonID = l.LessonID,
                    Name = l.Name,
                    LessonPlan = l.LessonPlan,
                    Schedule = l.Schedule,
                    EmployeeID = l.EmployeeID
                }).ToArrayAsync();

            if (!query.Any())
                return null;

            var emps = DB.Employee.Select(e => new Employee
            {
                EmployeeID = e.EmployeeID,
                Photo = e.Photo,
                Qualification = e.Qualification,
                AppUser = e.AppUser,
            }).ToList();

            foreach (var item in query)
            {
                item.Employee = GetEmployee(emps, item.EmployeeID);
            }

            return query.ToArray();

        }

        static Employee GetEmployee(List<Employee> emps, int id)
        {
            foreach (Employee emp in emps)
            {
                if (emp.EmployeeID == id)
                    return emp;
            }
            return null;
        }

        public async Task<Lesson> GetLessonByNameAsync(string name)
        {
            IQueryable<Lesson> query = DB.Lesson.Where(l => l.Name == name);
            return query.FirstOrDefault();
        }

        public async Task<Lesson> GetLessonIdAsync(int id)
        {

            IQueryable<Lesson> query = DB.Lesson.Where(l => l.LessonID == id);

            if (!query.Any())
                return null;


            var temp = await query.Select(l =>
                new Lesson
                {
                    ScheduleID = l.ScheduleID,
                    LessonID = l.LessonID,
                    Name = l.Name,
                    Employee = l.Employee,
                    LessonPlan = l.LessonPlan,
                    //Schedule = l.Schedule,
                }).SingleAsync();

            List<Schedule> o = new List<Schedule>();
            var t = await DB.Schedule.Select(s => new Schedule { Lesson = new Lesson { 
                LessonID = s.Lesson.LessonID,
                Name = s.Lesson.Name,
            },
                Venue = s.Venue,
                StartDateTime = s.StartDateTime,
            }).ToArrayAsync();
            foreach(Schedule s in t)
            {
                if (s.Lesson.LessonID == temp.LessonID)
                {
                    o.Add(s);
                }
            }
            temp.Schedule = o;
            return temp;
        }

        public async Task<Lesson> GetLessonIdAsyncOriginal(int id)
        {

            IQueryable<Lesson> query = DB.Lesson.Where(l => l.LessonID == id);

            if (!query.Any())
                return null;


            var temp = await query.Select(l =>
                new Lesson
                {
                    ScheduleID = l.ScheduleID,
                    LessonID = l.LessonID,
                    Name = l.Name,
                    Employee = l.Employee,
                    LessonPlan = l.LessonPlan,
                    //Schedule = l.Schedule,
                }).SingleAsync();

            List<Schedule> o = new List<Schedule>();
            var t = await DB.Schedule.Select(s => new Schedule { Lesson = new Lesson { LessonID = s.Lesson.LessonID } }).ToArrayAsync();
            foreach (Schedule s in t)
            {
                if (s.Lesson.LessonID == temp.LessonID)
                {
                    o.Add(s);
                }
            }
            temp.Schedule = o;
            return temp;
        }

        public async Task<bool> checkName(Lesson l)
        {
            var query = await DB.Lesson.Where(ls => ls.Name == l.Name).ToArrayAsync();
            if (query.Length != 0)
                return true;
            return false;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await DB.SaveChangesAsync() > 0;
        }

    }
}
