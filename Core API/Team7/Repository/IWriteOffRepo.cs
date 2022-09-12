using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IWriteOffRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllWriteOffsAsync();

        //Task<WriteOff[]> GetWriteOffsAsync(string input);

        Task<object> GetWriteOffIdAsync(int id);

        Task<WriteOff> _GetWriteOffIdAsync(int id);
        Task<bool> SaveChangesAsync();
    }
}
