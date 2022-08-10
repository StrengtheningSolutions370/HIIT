using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ITitleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllTitlesAsync();
        Task<object> GetTitlesAsync(string input);
        Task<object> GetTitleIdAsync(int id);
        Task<Title> _GetTitleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
