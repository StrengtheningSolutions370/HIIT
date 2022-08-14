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

        private readonly UserManager<AppUser> _userManager;

        readonly private AppDB DB;

        public ClientRepo(AppDB appDatabaseContext, UserManager<AppUser> userManager)
        {
            DB = appDatabaseContext;
            _userManager = userManager;
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


        public async Task<object[]> GetAllClientsAsync()
        {
            //IQueryable<Client> query = DB.Client;
            //return await query.ToArrayAsync();
            IQueryable<Client> query = DB.Client.Select(c =>
            new Client
            {
                ClientID = c.ClientID,
                UserID = c.UserID,
                Photo = c.Photo,
            });

            var data = query.ToArray();

            List<object> output = new List<object>();
            foreach (var client in data)
            {
                output.Add(new
                {
                    client = client,
                    user = await _userManager.FindByIdAsync(client.UserID),
                });
            }

            return output.ToArray();

        }

        public async Task<object> getUserAsync(string id)
        {
            return null;
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

        public async Task<Client> GetClientIdAsync(string id)
        {
            IQueryable<Client> query = DB.Client.Where(c => c.UserID == id).Select(a => new Client
            {
                ClientID = a.ClientID,
                UserID = a.UserID,
                DOB = a.DOB,
                Photo = a.Photo,
                Idemnity = a.Idemnity,
                Measurement = a.Measurement,
            });
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return query.FirstOrDefault();
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
