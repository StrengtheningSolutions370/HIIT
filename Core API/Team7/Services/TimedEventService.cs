using Quartz;
using Quartz.Impl;
using System;

namespace Team7.Services
{
    public class TimedEventService
    {

        StdSchedulerFactory factory = new Quartz.Impl.StdSchedulerFactory();
        IScheduler scheduler;
        ITrigger sec_10_trigger;

        public async void start()
        {
            //get a scheduler:
            scheduler = await factory.GetScheduler();

            //build a trigger for the job:
            sec_10_trigger = TriggerBuilder.Create()
                .WithIdentity("sec_10_trigger")
                .StartNow()
                .WithSimpleSchedule(x => x
                    .WithIntervalInSeconds(10)
                    .RepeatForever())
                .Build();

            //build a job to trigger:
            IJobDetail SalesReportJob = JobBuilder.Create<SalesReportJob>()
                .WithIdentity("GenerateSalesReport", "G01") // name "myJob", group "group1"
                .Build();

            //await scheduler.ScheduleJob(SalesReportJob, sec_10_trigger);
            //scheduler.Start();

            Console.WriteLine("here");
        }

    }
}
