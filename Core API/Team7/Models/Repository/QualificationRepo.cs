using Azure;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.ViewModels;

namespace Team7.Models.Repository
{
    public class QualificationRepo : IQualificationRepo
    {
        readonly private AppDB DB;

        public QualificationRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllQualificationsAsync()
        {
            IQueryable<Qualification> query = DB.Qualification;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Qualification.Select(q => new
                    {
                        q.QualificationID,
                        q.Description,
                        q.QualificationTypeID,
                        q.QualificationType
                    }).ToListAsync()
                };
                ////await query.Include(q => q.QualificationType).ToListAsync();
                //query.Select(q => new
                //{
                //    qualificationType = 
                //    q.QualificationTypeID,
                //    q.Description
                //});
                //return await query.ToArrayAsync();
            }



            //IQueryable<Qualification> query = DB.Qualification;
            //var QualificationArray = await query.ToArrayAsync();
            //QualificationViewModel[] qualificationViewModels = new QualificationViewModel[QualificationArray.Length];

            //foreach (Qualification x in QualificationArray)
            //{
            //    var temp = DB.QualificationType.Where(qualificationType => qualificationType.QualificationTypeID == x.QualificationTypeID);
            //    qualificationViewModels.Append(new QualificationViewModel(){
            //        QualificationID = x.QualificationID,
            //        Description = x.Description,
            //        QualificationTypeID = x.QualificationTypeID,
            //    QualificationType = temp.Single()});
            //}
            ////foreach(result in QualificationArray)
            ////{

            ////}
            //return qualificationViewModels;

        }

        //RESPONSE
        public async Task<object> GetQualificationsAsync(string description)
        {
            IQueryable<Qualification> query = DB.Qualification.Where(q => q.Description == description);
            
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.Qualification.Select(q => new
                    {
                        q.QualificationID,
                        q.Description,
                        q.QualificationTypeID,
                        q.QualificationType
                    }).ToListAsync()
                };
                ////await query.Include(q => q.QualificationType).ToListAsync();
                //query.Select(q => new
                //{
                //    qualificationType = 
                //    q.QualificationTypeID,
                //    q.Description
                //});
                //return await query.ToArrayAsync();
            }

        }

        public async Task<Qualification> GetQualificationIdAsync(int id)
        {
            IQueryable<Qualification> query = DB.Qualification.Where(q => q.QualificationID == id);
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
