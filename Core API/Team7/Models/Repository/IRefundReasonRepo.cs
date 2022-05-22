using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IRefundReasonRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<RefundReason[]> GetAllRefundReasonsAsync();

        //Task<RefundReason[]> GetRefundReasonsAsync(string input);

        //Task<RefundReason> GetRefundReasonIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
