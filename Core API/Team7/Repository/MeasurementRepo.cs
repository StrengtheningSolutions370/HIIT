using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class MeasurementRepo : IMeasurementRepo
    {
        readonly private AppDB DB;

        public MeasurementRepo(AppDB appDatabaseContext)
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


        //public async Task<Measurement[]> GetAllMeasurementsAsync()
        //{
        //    IQueryable<Measurement> query = DB.Measurement;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<Measurement[]> GetMeasurementsAsync(string input)
        //{
        //    IQueryable<Measurement> query = DB.Measurement.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<Measurement> GetMeasurementIdAsync(int id)
        //{
        //    IQueryable<Measurement> query = DB.Measurement.Where(v => v.VenueID == id);
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
