﻿using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IDateSessionRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<DateSession[]> GetAllDateSessionsAsync();

        //Task<DateSession[]> GetDateSessionsAsync(string input);

        //Task<DateSession> GetDateSessionIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
