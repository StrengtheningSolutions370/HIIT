using Quartz;
using Quartz.Impl;
using System;

namespace Team7.Services
{
    public class TimedEventService
    {

        StdSchedulerFactory factory = new Quartz.Impl.StdSchedulerFactory();
        IScheduler scheduler;

        ITrigger twenty_fith_monthly;
        ITrigger six_pm_trigger_daily;

        public async void start()
        {
            Console.WriteLine("CONFIGURING SCHEDULER");

            //get a scheduler:
            scheduler = await factory.GetScheduler();

            ////////////////////////////////////////////////////////////////////////////////////

                //report generated at midnight of the 25th every month

                //sales report
                twenty_fith_monthly = TriggerBuilder.Create()
                            .WithIdentity("twenty_fith_monthly")
                            .WithCronSchedule("0 0 0 25 1/1 ? *")
                            .Build();

                IJobDetail SalesReportJob = JobBuilder.Create<SalesReportJob>()
                        .WithIdentity("GenerateSalesReport", "G01") // name "myJob", group "group1"
                        .Build();

                //await scheduler.ScheduleJob(SalesReportJob, twenty_fith_monthly);

            ////////////////////////////////////////////////////////////////////////////////////

                //reminder sent every day at 6pm for the next day's bookings

                //bookings reminder
                six_pm_trigger_daily = TriggerBuilder.Create()
                .WithIdentity("sec_10_trigger")
                .StartNow()
                .WithSimpleSchedule(x => x
                    .WithIntervalInSeconds(10)
                    .RepeatForever())
                .Build();
            //.WithIdentity("six_pm_trigger")
            //.WithCronSchedule("0 11 0 1/1 * ? *") 
            //.Build();

            IJobDetail BookingsReminder = JobBuilder.Create<BookingsReminder>()
                    .WithIdentity("BookingsReminder", "G02")
                    .Build();

                //await scheduler.ScheduleJob(BookingsReminder, six_pm_trigger_daily);

            ////////////////////////////////////////////////////////////////////////////////////


            //start scheduler:
            Console.WriteLine("STARTING SCHEDULER");
            scheduler.Start();

        }

    }
}
