using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class SaleLineRepo : ISaleLineRepo
    {
        readonly private AppDB DB;

        public SaleLineRepo(AppDB appDatabaseContext)
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

        public async Task<bool> RemoveRangeSaleItemIdAsync(int SaleItemId)
        {
            var range = DB.SaleLine.Where(sl => sl.SaleItemID == SaleItemId);
            if (range.Any())
            {
                DB.SaleLine.RemoveRange(range);
                if (await this.SaveChangesAsync())
                    return true;
                return false;
            }
            return true;
        }

        //public async Task<SaleLine[]> GetAllSaleLinesAsync()
        //{
        //    IQueryable<SaleLine> query = DB.SaleLine;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<SaleLine[]> GetSaleLinesAsync(string input)
        //{
        //    IQueryable<SaleLine> query = DB.SaleLine.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<SaleLine> GetSaleLineIdAsync(int id)
        //{
        //    IQueryable<SaleLine> query = DB.SaleLine.Where(v => v.VenueID == id);
        //    if (!query.Any())
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return await query.SingleAsync();
        //    }
        //    return null;
        //}

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
