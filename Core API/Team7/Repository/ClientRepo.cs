using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ClientRepo : IClientRepo
    {

        readonly private AppDB DB;
        private readonly UserManager<AppUser> _userManager;
        private readonly ITitleRepo _titleRepo;

        public ClientRepo(ITitleRepo titleRepo, AppDB appDatabaseContext, UserManager<AppUser> userManager)
        {
            DB = appDatabaseContext;
            this._titleRepo = titleRepo;
            this._userManager = userManager;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
            DB.SaveChanges();
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
            DB.SaveChanges();
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
            DB.SaveChanges();
        }


        public async Task<Client[]> GetAllClientsAsync()
        {
            var o = new List<object>();

            var clients = await DB.Client.Select(c => new
            {
                ClientID = c.ClientID,
                Idemity = c.Idemnity,
                Photo = c.Photo,
                AppUser = c.AppUser,
                UserID = c.UserID,
                //I am unsure about The QR code attribute
                //I do not know why the "measurement" field keeps popping up
            }).ToListAsync();

            var titles = await DB.Title.Select(t => new Title
            {
                Description = t.Description,
                User = t.User
            }).ToListAsync();

            foreach (var c in clients)
            {
                c.AppUser.Title = getTitleFromId(titles, c.AppUser.Id);
            }

            return null;

        }

        static Title getTitleFromId(List<Title> titles, string id)
        {
            foreach (var title in titles)
            {
                foreach (var item in title.User)
                {
                    if (item.Id == id)
                    {
                        return new Title
                        {
                            TitleID = title.TitleID,
                            Description = title.Description,
                        };
                    }
                }
            }
            return null;
        }

        public async Task<Client[]> _GetAllClientsAsync()
        {
            IQueryable<Client> query = DB.Client;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        public async Task<Client[]> GetClientsAsync(string input)
        {
            //IQueryable<Client> query = DB.Client.Where(v => v.Name == input || v.Address == input);
            //if (!query.Any())
            //{
            //    return null;
            //}
            //else
            //{
            //    return await query.ToArrayAsync();
            //}
            return null;

        }

        public async Task<Client> GetClientIdAsync(int id)
        {
            IQueryable<Client> query = DB.Client.Where(c => c.ClientID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Client.Select(c => new 
                    {
                        c.ClientID,
                        c.Idemnity, // I do not know what the problem is
                        c.Photo,
                        AppUser = c.AppUser,
                        UserID = c.UserID,
                    }).ToListAsync()
                };
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
