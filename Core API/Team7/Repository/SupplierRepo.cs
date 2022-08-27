using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class SupplierRepo : ISupplierRepo
    {
        readonly private AppDB DB;

        public SupplierRepo(AppDB appDatabaseContext)
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


        public async Task<Supplier[]> GetAllSuppliersAsync()
        {

            IQueryable<Supplier> query = DB.Supplier.Select(s => new Supplier
            {
                SupplierID = s.SupplierID,
                Name = s.Name,
                Email = s.Email,
                Cell = s.Cell,
                Address = s.Address,
                SupplierOrder = s.SupplierOrder,
            });

            if (!query.Any())
                return null;

            return await query.ToArrayAsync();
            
        }

        //public async Task<Supplier[]> GetSuppliersAsync(string input)
        //{
        //    IQueryable<Supplier> query = DB.Supplier.Where(v => v.Name == input || v.Address == input);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.ToArrayAsync();
        //    }
        //    return null;

        //}

        public async Task<Supplier> GetSupplierIdAsync(int id)
        {
            IQueryable<Supplier> query = DB.Supplier.Where(s => s.SupplierID == id).Select( s => new Supplier
            {
                SupplierID = s.SupplierID,
                Name = s.Name,
                Email = s.Email,
                Cell = s.Cell,
                Address = s.Address,
                SupplierOrder = s.SupplierOrder,
            });

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
            return null;
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
