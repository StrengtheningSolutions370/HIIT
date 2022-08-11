using Microsoft.EntityFrameworkCore;
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


        public async Task<object> GetAllQualificationTypesAsync()
        {
            IQueryable<QualificationType> query = DB.QualificationType;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await DB.QualificationType.Select(qt => new
                    {
                        qt.QualificationTypeID,
                        qt.Name,
                        Qualifications = qt
                            .Qualification
                            .Select(q => new { q.QualificationID, q.Description })
                    }).ToListAsync()
                };
            }
            //IQueryable<object> query = DB.QualificationType;
            //return await query.ToArrayAsync();
        }

        public async Task<QualificationType[]> _GetAllQualificationTypesAsync()
        {
            IQueryable<QualificationType> query = DB.QualificationType;
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        public async Task<object> GetQualificationTypesAsync(string input)
        {
            IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.Name == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(qt => new
                    {
                        qt.QualificationTypeID,
                        qt.Name,
                        Qualifications = qt
                            .Qualification
                            .Select(q => new { q.QualificationID, q.Description })
                    }).ToListAsync()
                };
            }
        }

        public async Task<QualificationType[]> _GetQualificationTypesAsync(string input)
        {
            IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.Name == input);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        public async Task<object> GetQualificationTypeIdAsync(int id)
        {
            IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.QualificationTypeID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(qt => new
                    {
                        qt.QualificationTypeID,
                        qt.Name,
                        Qualifications = qt
                            .Qualification
                            .Select(q => new { q.QualificationID, q.Description })
                    }).ToListAsync()
                };
            }
        }

        public async Task<QualificationType> _GetQualificationTypeIdAsync(int id)
        {
            IQueryable<QualificationType> query = DB.QualificationType.Where(v => v.QualificationTypeID == id);
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
