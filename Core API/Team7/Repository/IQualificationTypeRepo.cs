using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IQualificationTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        Task<object> GetAllQualificationTypesAsync();
        Task<QualificationType[]> _GetAllQualificationTypesAsync();
        Task<object> GetQualificationTypesAsync(string input);
        Task<QualificationType[]> _GetQualificationTypesAsync(string input);

        Task<object> GetQualificationTypeIdAsync(int id);
        Task<QualificationType> _GetQualificationTypeIdAsync(int id);

        Task<bool> SaveChangesAsync();

    }
}
