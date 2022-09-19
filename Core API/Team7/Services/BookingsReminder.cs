using Quartz;
using System;
using System.Threading;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.Context;
using Team7.Models;
using System.Collections.Generic;
using Team7.Controllers;
using System.Net.Http;

namespace Team7.Services
{
    public class BookingsReminder : IJob
    {

        public Task Execute(IJobExecutionContext context)
        {

            Console.WriteLine("Sending booking reminders...");


            HttpClient client = new HttpClient();

            var res = client.GetStringAsync("http://localhost:5001/api/Booking/reminders");

            return Task.CompletedTask;

        }
    }
}
