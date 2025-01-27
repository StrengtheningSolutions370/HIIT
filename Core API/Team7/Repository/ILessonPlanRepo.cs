﻿using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ILessonPlanRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<LessonPlan[]> GetAllLessonPlansAsync();

        //Task<LessonPlan[]> GetLessonPlansAsync(string input);

        Task<LessonPlan> GetLessonPlanIdAsync(int id);

        Task<LessonPlan[]> GetLessonsPlanByLessonIDAsync(int LessonID);

        Task<bool> SaveChangesAsync();

        Task<bool> RemoveRangeLessonIdAsync(int LessonID);
    }
}
