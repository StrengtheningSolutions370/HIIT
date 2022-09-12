using System.Threading.Tasks;

namespace Team7.Repository
{
    public interface IReportRepo
    {
        Task<object> getAllSaleCategoryReport();

        Task<object> getAllSaleItemReport();

        Task<object> getAllBookingReport();

    }
}
