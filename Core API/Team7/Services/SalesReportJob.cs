using Quartz;
using System;
using System.Threading.Tasks;

namespace Team7.Services
{
    public class SalesReportJob : IJob
    {
        public Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine("Generating a sales report...");
            //logic to make a sales report:
            //...
            return Task.CompletedTask;
        }
    }
}
