using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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
        }

        public void Delete<T>(T Entity) where T : class
        {
            DB.Remove(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            DB.Update(Entity);
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
                        si.Photo,
                        si.Description,
                        si.Name,
                        si.Price,
                        si.Quotable,
                        si.Quantity, 
                        si.SaleCategoryID,
                        si.SaleCategory
                    }).ToListAsync()
                };
            }
        }

        //Response
        public async Task<object> GetSaleItemsAsync(string name, string photo, string desc, decimal? price, bool quotable, int qty)
        {
            IQueryable<SaleItem> query = DB.SaleItem.Where(si => si.Name == name || si.Photo == photo || si.Description == desc || si.Price == price || si.Quotable == quotable || si.Quantity == qty);
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
                        si.Photo,
                        si.Description,
                        si.Name,
                        si.Price,
                        si.Quotable,
                        si.Quantity,
                        si.SaleCategoryID,
                        si.SaleCategory
                    }).ToListAsync()
                };
            }

        }

        public async Task<SaleItem> GetSaleItemIdAsync(int id)
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

        public Task<object> GetSaleItemsAsync(string input)
        {
            throw new NotImplementedException();
        }
    }
}
