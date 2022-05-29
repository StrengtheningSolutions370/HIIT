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


        public async Task<object> GetAllTitlesAsync()
        {
            IQueryable<Title> query = DB.Title;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Title.Select(t => new
                    {
                        t.TitleID,
                        t.Description,
                        User = t
                        .User
                        .Select(u => new { u.UserID, u.Email, u.Cell })
                    }).ToListAsync()
                };

            }
        }

        public async Task<Title[]> _GetAllTitlesAsync()
        {
            IQueryable<Title> query = DB.Title;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        public async Task<object> GetTitlesAsync(string input)
        {
            IQueryable<Title> query = DB.Title.Where(t => t.Description == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(t => new
                    {
                        t.TitleID,
                        t.Description,
                        Users = t
                            .User
                            .Select(u => new { u.Email, u.Cell})
                    }).ToListAsync()
                };
            }
        }
        public async Task<Title[]> _GetTitlesAsync(string input)
        {
            IQueryable<Title> query = DB.Title.Where(t => t.Description == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }
        public async Task<object> GetTitleIdAsync(int id)
        {
            IQueryable<Title> query = DB.Title.Where(t => t.TitleID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(t => new
                    {
                        t.TitleID,
                        t.Description,
                        Users = t
                            .User
                            .Select(u => new { u.Email, u.Cell })
                    }).ToListAsync()
                };
            }
        }
        public async Task<Title> _GetTitleIdAsync(int id)
        {
            IQueryable<Title> query = DB.Title.Where(t => t.TitleID == id);
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

