using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IMemberRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Member[]> GetAllMembersAsync();

        //Task<Member[]> GetMembersAsync(string input);

        //Task<Member> GetMemberIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
