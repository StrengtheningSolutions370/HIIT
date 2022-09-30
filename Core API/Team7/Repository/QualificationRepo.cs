using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;

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
                        qualificationType = new { q.QualificationTypeID, q.QualificationType.Name }
                    }).ToListAsync()
                };
            }
        }

        public async Task<Qualification[]> _GetAllQualificationsAsync()
        {
            IQueryable<Qualification> query = DB.Qualification;

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

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
                    result = await query.Select(q => new
                    {
                        q.QualificationID,
                        q.Description,
                        q.QualificationTypeID,
                        q.QualificationType
                    }).ToListAsync()
                };
            }
        }

        public async Task<Qualification[]> _GetQualificationsAsync(string description)
        {
            IQueryable<Qualification> query = DB.Qualification.Where(q => q.Description == description);

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.ToArrayAsync();
            }
        }

        public async Task<object> GetQualificationIdAsync(int id)
        {
            IQueryable<Qualification> query = DB.Qualification.Where(q => q.QualificationID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(q => new
                    {
                        q.QualificationID,
                        q.Description,
                        qualificationType = new
                        {
                            q.QualificationTypeID,
                            q.QualificationType
                        }
                    }).ToListAsync()
                };
            }
        }

        public async Task<Qualification> _GetQualificationIdAsync(int id)
        {
            IQueryable<Qualification> query = DB.Qualification.Where(q => q.QualificationID == id).Select(q => new Qualification
            {
                QualificationID = q.QualificationID,
                Description = q.Description,
                QualificationTypeID = q.QualificationTypeID,
                Employee = q.Employee,
                QualificationType = q.QualificationType
            });

            var users = await DB.Users.ToArrayAsync();
            var qual = await query.ToArrayAsync();
            for (var i = 0; i < qual.Length; i++)
            {
                for (var j = 0; j < users.Length; j++)
                {
                    var user = users[i];
                }
            }

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
