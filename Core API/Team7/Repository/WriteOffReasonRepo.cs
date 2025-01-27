﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;


namespace Team7.Models.Repository
{
    public class WriteOffReasonRepo : IWriteOffReasonRepo
    {

        readonly private AppDB DB;

        public WriteOffReasonRepo(AppDB appDatabaseContext)
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


        public async Task<object> GetAllWriteOffReasonsAsync()
        {
            IQueryable<WriteOffReason> query = DB.WriteOffReason;
            if (!query.Any())
            {
                return null;
            }
            return new
            {
                result = await query.Select(wr => new
                {
                    wr.WriteOffReasonID,
                    wr.Description,
                    WriteOffLine =
                    wr
                     .WriteOffLine
                     .Select(wl => new { wl.WriteOffLineID, wl.Quantity })
                }).ToListAsync()
            };
        }

        public async Task<object> GetWriteOffReasonsAsync(string description)
        {
            IQueryable<WriteOffReason> query = DB.WriteOffReason.Where(wr => wr.Description == description);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(wr => new
                    {
                        wr.WriteOffReasonID,
                        wr.Description,
                        WriteOffLine =
                        wr
                        .WriteOffLine
                        .Select(wl => new { wl.WriteOffLineID, wl.Quantity })
                    }).ToListAsync()
                };
            }

        }

        public async Task<object> GetWriteOffReasonIdAsync(int id)
        {
            IQueryable<WriteOffReason> query = DB.WriteOffReason.Where(wr => wr.WriteOffReasonID == id);
            if (!query.Any())
            {
                return null;
            }
            else
            {
                return new
                {
                    result = await query.Select(wr => new
                    {
                        wr.WriteOffReasonID,
                        wr.Description,
                        WriteOffLine =
                        wr
                        .WriteOffLine
                        .Select(wl => new { wl.WriteOffLineID, wl.Quantity })
                    }).ToListAsync()
                };
            }
        }

        public async Task<WriteOffReason> _GetWriteOffReasonIdAsync(int id)
        {
            IQueryable<WriteOffReason> query = DB.WriteOffReason.Where(wr => wr.WriteOffReasonID == id).Select(w => new WriteOffReason
            {
                Description = w.Description,
                WriteOffReasonID = w.WriteOffReasonID,
                WriteOffLine = w.WriteOffLine
            });

            if (!query.Any())
            {
                return null;
            }
            else
            {
                return await query.SingleAsync();
            }
        }

        public async Task<object> GetWriteOffs(WriteOffReason r)
        {

            var writeoffs = await DB.WriteOff.Select(w => new WriteOff
            {
                WriteOffID = w.WriteOffID,
                Date = w.Date,
                EmployeeID = w.EmployeeID,
                Employee = w.Employee,
                WriteOffLine = w.WriteOffLine
            }).ToArrayAsync();

            var output = new List<WriteOff>();

            foreach (var line in r.WriteOffLine)
            {
                foreach (var w in writeoffs)
                {
                    foreach (var t in w.WriteOffLine)
                    {
                        if (t.WriteOffReasonID == r.WriteOffReasonID)
                            output.Add(w);
                    }
                }
            }

            return output;
        }

        public async Task<bool> SaveChangesAsync()
        {
            //Returns true/false based on success/failure
            return await DB.SaveChangesAsync() > 0;
        }
    }
}
