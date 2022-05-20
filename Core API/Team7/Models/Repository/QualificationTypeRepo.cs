﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class QualificationTypeRepo //: IQualificationTypeRepo
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


        //public async Task<QualificationType[]> GetAllQualificationTypesAsync()
        //{
        //    IQueryable<QualificationType> query = DB.QualificationType;
        //    return await query.ToArrayAsync();
        //    return null;

        //}

        //public async Task<QualificationType[]> GetQualificationTypesAsync(string input)
        //{
        //    IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.Name == input || v.Address == input);
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

        //public async Task<QualificationType> GetQualificationTypeIdAsync(int id)
        //{
        //    IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.VenueID == id);
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