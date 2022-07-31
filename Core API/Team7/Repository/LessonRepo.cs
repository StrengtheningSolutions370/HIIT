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

        public LessonRepo(AppDB appDatabaseContext)
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
            foreach(Employee emp in emps)
            {
                if (emp.EmployeeID == id)
                    return emp;
            }
            return null;
        }

        //public async Task<Lesson[]> GetLessonsAsync(string input)
        //{
        //    IQueryable<Lesson> query = DB.Lesson.Where(v => v.Name == input);
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
