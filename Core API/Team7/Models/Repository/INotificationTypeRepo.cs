using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    interface INotificationTypeRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<NotificationType[]> GetAllNotificationTypesAsync();

        //Task<NotificationType[]> GetNotificationTypesAsync(string input);

        //Task<NotificationType> GetNotificationTypeIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
