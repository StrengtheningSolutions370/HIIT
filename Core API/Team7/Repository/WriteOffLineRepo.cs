using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class WriteOffLineRepo : IWriteOffLineRepo
    {
        readonly private AppDB DB;

        public WriteOffLineRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllWriteOffLinesAsync()
        {
            IQueryable<WriteOffLine> query = DB.WriteOffLine;

            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await query.Select(wl =>
                new
                {
                    wl.WriteOffLineID,
                    wl.Quantity,
                    WriteOff = new
                    {
                        wl.WriteOff.WriteOffID,
                        wl.WriteOff.Date,
                        wl.WriteOff.Employee
                    },
                    SaleItem = new
                    {
                        wl.SaleItem.SaleItemID,
                        wl.SaleItem.Name,
                        wl.SaleItem.Photo,
                        wl.SaleItem.Quotable,
                        wl.SaleItem.Description,
                        wl.SaleItem.QuantityOnHand
                    },
                    WriteOffReason = new
                    {
                        wl.WriteOffReason.WriteOffReasonID,
                        wl.WriteOffReason.Description
                    }
                }).ToListAsync()
            };
        }

        public async Task<bool> RemoveRangeSaleItemIdAsync(int SaleItemId)
        {
            var range = DB.WriteOffLine.Where(wl => wl.SaleItemID == SaleItemId);
            if (range.Any())
            {
                var count = range.ToArray();
                //for(int i = 0; i <= count.Length; i++)
                //{
                 //   IQueryable<WriteOff> query = DB.WriteOff;
                 //   var tempWriteOff = query.Where(w => w.WriteOffLine.FirstOrDefault().WriteOffLineID == count.FirstOrDefault().WriteOffLineID);
                 //   DB.WriteOff.Remove(tempWriteOff);
                //}
                DB.WriteOffLine.RemoveRange(range);
                if (await this.SaveChangesAsync())
                    return true;
                return false;
            }
            return true;
        }

        //public async Task<WriteOffLine[]> GetWriteOffLinesAsync(string input)
        //{
        //    IQueryable<WriteOffLine> query = DB.WriteOffLine.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<WriteOffLine> GetWriteOffLineIdAsync(int id)
        //{
        //    IQueryable<WriteOffLine> query = DB.WriteOffLine.Where(v => v.VenueID == id);
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
