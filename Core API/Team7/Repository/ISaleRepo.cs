﻿using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface ISaleRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Sale[]> GetAllSalesAsync();

        //Task<Sale[]> GetSalesAsync(string input);

        //Task<Sale> GetSaleIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
