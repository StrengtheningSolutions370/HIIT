using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class EmployeeTypeRepo : IEmployeeTypeRepo
    {
        readonly private AppDB DB;

        public EmployeeTypeRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
        }


        public async Task<EmployeeType[]> GetAllEmployeeTypesAsync()
        {
            IQueryable<EmployeeType> query = DB.EmployeeType;
            return await query.ToArrayAsync();

        }

        public async Task<EmployeeType[]> GetEmployeeTypesAsync(string input)
        {
            IQueryable<EmployeeType> query = DB.EmployeeType.Where(v => v.Name == input || v.Description == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<EmployeeType> GetEmployeeTypeIdAsync(int id)
        {
            IQueryable<EmployeeType> query = DB.EmployeeType.Where(v => v.EmployeeTypeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
