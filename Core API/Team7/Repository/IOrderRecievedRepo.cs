using System.Threading.Tasks;
using Team7.Models;

namespace Team7.Repository
{
    public interface IOrderRecievedRepo
    {

        void Add<T>(T Entity) where T : class;

        public Task<OrderRecieved[]> GetAllOrderRecievedAsync();

        Task<bool> SaveChangesAsync();

    }
}
