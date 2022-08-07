using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class SaleCategoryRepo : ISaleCategoryRepo
    {
        readonly private AppDB DB;

        public SaleCategoryRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllSaleCategorysAsync()
        {
            IQueryable<SaleCategory> query = DB.SaleCategory;
            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await DB.SaleCategory.Select(sc => new
                {
                    sc.SaleCategoryID,
                    sc.Name,
                    sc.Description,
                    SaleItem = sc
                .SaleItem
                .Select(si => new { si.SaleItemID, si.Photo, si.Description, si.Name, si.Quotable, si.QuantityOnHand, si.Stock/*, si.Price, si.Quantity*/})
                }).ToListAsync()
            };
        }

        public async Task<object> GetSaleCategorysAsync(string name, string description)
        {
            IQueryable<SaleCategory> query = DB.SaleCategory.Where(sc => sc.Name == name || sc.Description == description);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(sc => new
                    {
                        sc.SaleCategoryID,
                        sc.Name,
                        sc.Description,
                        SaleItem = sc
                            .SaleItem
                            .Select(si => new { si.SaleItemID, si.Photo, si.Description, si.Name, si.Quotable, si.QuantityOnHand, si.Stock/*, si.Price, si.Quantity*/})
                    }).ToListAsync()
                };
            }

        }

        public async Task<object> GetSaleCategoryIdAsync(int id)
        {
            IQueryable<SaleCategory> query = DB.SaleCategory.Where(sc => sc.SaleCategoryID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(sc => new
                    {
                        sc.SaleCategoryID,
                        sc.Name,
                        sc.Description,
                        SaleItem = sc
                            .SaleItem
                            .Select(si => new { si.SaleItemID, si.Photo, si.Description, si.Name, si.Quotable, si.QuantityOnHand, si.Stock/*, si.Price, si.Quantity*/})
                    }).ToListAsync()
                };
            }
        }

        public async Task<SaleCategory> _GetSaleCategoryIdAsync(int id)
        {
            IQueryable<SaleCategory> query = DB.SaleCategory.Where(sc => sc.SaleCategoryID == id);
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
