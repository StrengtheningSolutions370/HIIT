using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class ReceiptRepo : IReceiptRepo
    {
        readonly private AppDB DB;

        public ReceiptRepo(AppDB appDatabaseContext)
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


        //public async Task<Receipt[]> GetAllReceiptsAsync()
        //{
        //    IQueryable<Receipt> query = DB.Receipt;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<Receipt[]> GetReceiptsAsync(string input)
        //{
        //    IQueryable<Receipt> query = DB.Receipt.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<Receipt> GetReceiptIdAsync(int id)
        //{
        //    IQueryable<Receipt> query = DB.Receipt.Where(v => v.VenueID == id);
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
