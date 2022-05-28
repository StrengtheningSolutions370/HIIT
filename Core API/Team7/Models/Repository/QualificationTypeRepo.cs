using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class QualificationTypeRepo : IQualificationTypeRepo
    {

        readonly private AppDB DB;

        public QualificationTypeRepo(AppDB appDatabaseContext)
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


        public async Task<QualificationType[]> GetAllQualificationTypesAsync()
        {
            IQueryable<QualificationType> query = DB.QualificationTypes;
            return await query.ToArrayAsync();

        }

        public async Task<QualificationType[]> GetQualificationTypesAsync(string input)
        {
            IQueryable<QualificationType> query = DB.QualificationTypes.Where(qt => qt.Name == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }

        }

        public async Task<QualificationType> GetQualificationTypeIdAsync(int id)
        {
            IQueryable<QualificationType> query = DB.QualificationTypes.Where(qt => qt.QualificationTypeID == id);
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
