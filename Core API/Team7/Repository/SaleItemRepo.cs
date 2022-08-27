using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class SaleItemRepo : ISaleItemRepo
    {
        readonly private AppDB DB;

        public SaleItemRepo(AppDB appDatabaseContext)
        {
            DB = appDatabaseContext;
        }

        public void Add<T>(T Entity) where T : class
        {
            DB.Add(Entity);
            //Need to instantiate a record for price history using current date
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
            //If price is updated, need to instantiate a new record for price history
            //Need to instantiate a record for price history using current date
        }


        public async Task<object> GetAllSaleItemsAsync()
        {

            IQueryable<SaleItem> query = DB.SaleItem;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.SaleItem.Select(si => new
                    {
                        si.SaleItemID,
                        si.Name,
                        si.Photo,
                        si.Description,
                        //si.CostPrice,
                        //si.Price,
                        si.Quotable,
                        //si.Quantity,
                        si.QuantityOnHand,
                        si.SaleCategory,
                        //SaleCategoryName = si.SaleCategory.Name,
                        //SaleCategoryDescription = si.SaleCategory.Description,
                        //InventoryItem = si
                        //.InventoryItem
                        //.Select(i => new { i.InventoryItemID, i.Quantity }),
                        PriceHistory = si
                        .PriceHistory
                        .Select(ph => new { ph.Date, ph.SaleAmount, ph.CostAmount }),
                        StockTake = si.StockTakeLine.Select(stl => new
                        {
                            id = stl.StockTake.StockTakeID,
                            StockTakeDate = stl.StockTake.Date,
                            StockTakeNotes = stl.StockTake.Notes
                        }),
                        StockTakeLine = si
                        .StockTakeLine
                        .Select(stl => new
                        {
                            stl.StockTakeID,
                            stl.StockTakeLineID,
                            stl.Difference
                        })
                    }).ToListAsync()
                };
            }
        }

        public async Task<object> GetSaleItemsAsync(string name, string desc)
        {
            IQueryable<SaleItem> query = DB.SaleItem.Where(si => si.Name == name || si.Description == desc);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(si => new
                    {
                        si.SaleItemID,
                        si.Name,
                        si.Photo,
                        si.Description,
                        //si.CostPrice,
                        //si.Price,
                        si.Quotable,
                        //si.Quantity,
                        si.QuantityOnHand,
                        si.SaleCategory,
                        //SaleCategoryName = si.SaleCategory.Name,
                        //SaleCategoryDescription = si.SaleCategory.Description,
                        //InventoryItem = si
                        //.InventoryItem
                        //.Select(i => new { i.InventoryItemID, i.Quantity }),
                        PriceHistory = si
                        .PriceHistory
                        .Select(ph => new { ph.Date, ph.SaleAmount, ph.CostAmount }),
                        StockTake = si.StockTakeLine.Select(stl => new
                        {
                            id = stl.StockTake.StockTakeID,
                            StockTakeDate = stl.StockTake.Date,
                            StockTakeNotes = stl.StockTake.Notes
                        }),
                        StockTakeLine = si
                        .StockTakeLine
                        .Select(stl => new
                        {
                            stl.StockTakeID,
                            stl.StockTakeLineID,
                            stl.Difference
                        })
                    }).ToListAsync()
                };
            }

        }

        public async Task<object> GetSaleItemIdAsync(int id)
        {
            IQueryable<SaleItem> query = DB.SaleItem.Where(si => si.SaleItemID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(si => new
                    {
                        si.SaleItemID,
                        si.Name,
                        si.Photo,
                        si.Description,
                        //si.CostPrice,
                        //si.Price,
                        si.Quotable,
                        //si.Quantity,
                        si.QuantityOnHand,
                        si.SaleCategory,
                        //SaleCategoryName = si.SaleCategory.Name,
                        //SaleCategoryDescription = si.SaleCategory.Description,
                        //InventoryItem = si
                        //.InventoryItem
                        //.Select(i => new { i.InventoryItemID, i.Quantity }),
                        PriceHistory = si
                        .PriceHistory
                        .Select(ph => new { ph.Date, ph.SaleAmount, ph.CostAmount }),
                        StockTake = si.StockTakeLine.Select(stl => new
                        {
                            id = stl.StockTake.StockTakeID,
                            StockTakeDate = stl.StockTake.Date,
                            StockTakeNotes = stl.StockTake.Notes
                        }),
                        StockTakeLine = si
                        .StockTakeLine
                        .Select(stl => new
                        {
                            stl.StockTakeID,
                            stl.StockTakeLineID,
                            stl.Difference
                        })
                    }).ToListAsync()
                };
            }
        }

        public async Task<SaleItem> _GetSaleItemIdAsync(int id)
        {
            IQueryable<SaleItem> query = DB.SaleItem.Where(si => si.SaleItemID == id);
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

        public async Task<SaleItem[]> _GetAllSaleItemsArray()
        {
            IQueryable<SaleItem> query = DB.SaleItem.Select(si => new SaleItem
            {
                SaleItemID = si.SaleItemID,
                Name = si.Name,
                Photo = si.Photo,
                Description = si.Description,
                Quotable = si.Quotable,
                QuantityOnHand = si.QuantityOnHand,
                SaleCategory = si.SaleCategory,
                PriceHistory = si.PriceHistory,
                StockTakeLine = si.StockTakeLine,
            });


            if (!query.Any())
                return null;

            return await query.ToArrayAsync();
        }
    }
}
