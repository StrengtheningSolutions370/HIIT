using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ITitleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<Title[]> GetAllTitlesAsync();

        Task<Title[]> GetTitlesAsync(string input);

        Task<Title> GetTitleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
