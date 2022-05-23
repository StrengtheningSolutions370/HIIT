using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models.Repository
{
    public interface IMeasurementRepo
    {
        void Add<T>(T Entity) where T : class;

        void Delete<T>(T Entity) where T : class;

        void Update<T>(T Entity) where T : class;

        //Task<Measurement[]> GetAllMeasurementsAsync();

        //Task<Measurement[]> GetMeasurementsAsync(string input);

        //Task<Measurement> GetMeasurementIdAsync(int id);

        Task<bool> SaveChangesAsync();
    }
}
