using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IMemberStatusRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<MemberStatus[]> GetAllMemberStatussAsync();

        //Task<MemberStatus[]> GetMemberStatussAsync(string input);

        //Task<MemberStatus> GetMemberStatusIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
