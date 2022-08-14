using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IPaymentTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<PaymentType[]> GetAllPaymentTypesAsync();

        //Task<PaymentType[]> GetPaymentTypesAsync(string input);
        Task<object> GetAllPaymentTypesAsync();

        Task<object> GetPaymentTypesAsync(string name);

        Task<object> GetPaymentTypeIdAsync(int id);

        Task<PaymentType> _GetPaymentTypeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
