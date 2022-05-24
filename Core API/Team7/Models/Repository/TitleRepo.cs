using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class TitleRepo : ITitleRepo
    {
        readonly private AppDB DB;

        public TitleRepo(AppDB appDatabaseContext)
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


        public async Task<Title[]> GetAllTitlesAsync()
        {
            IQueryable<Title> query = DB.Title;
            return await query.ToArrayAsync();
        }

        public async Task<Title[]> GetTitlesAsync(string input)
        {
            IQueryable<Title> query = DB.Title.Where(v => v.Description== input );
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
            return null;

        }

        public async Task<Title> GetTitleIdAsync(int id)
        {
            IQueryable<Title> query = DB.Title.Where(v => v.TitleID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
            return null;
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}

