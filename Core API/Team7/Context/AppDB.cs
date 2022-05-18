using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models;

namespace Team7.Context
{
    public class AppDB: DbContext
    {

        public AppDB(DbContextOptions<AppDB> options):base(options)
        {

        }

        //public virtual DbSet<BOOKING> BOOKINGs { get; set; }
        //public virtual DbSet<BOOKING_ATTENDANCE> BOOKING_ATTENDANCE { get; set; }
        //public virtual DbSet<BOOKING_PRICE_HISTORY> BOOKING_PRICE_HISTORY { get; set; }
        //public virtual DbSet<BOOKING_TYPE> BOOKING_TYPE { get; set; }
        //public virtual DbSet<CLIENT> CLIENTs { get; set; }
        //public virtual DbSet<DATE_SESSION> DATE_SESSION { get; set; }
        //public virtual DbSet<EMPLOYEE> EMPLOYEEs { get; set; }
        //public virtual DbSet<EMPLOYEE_CONTRACT> EMPLOYEE_CONTRACT { get; set; }
        //public virtual DbSet<EMPLOYEE_TYPE> EMPLOYEE_TYPE { get; set; }
        //public virtual DbSet<EXCERCISE_CATEGORY> EXCERCISE_CATEGORY { get; set; }
        //public virtual DbSet<EXERCISE> EXERCISEs { get; set; }
        //public virtual DbSet<INVENTORY_ITEM> INVENTORY_ITEM { get; set; }
        //public virtual DbSet<LESSON> LESSONs { get; set; }
        //public virtual DbSet<LESSON_PLAN> LESSON_PLAN { get; set; }
        //public virtual DbSet<MEASUREMENT> MEASUREMENTs { get; set; }
        //public virtual DbSet<MEMBER> MEMBERs { get; set; }
        //public virtual DbSet<MEMBER_STATUS> MEMBER_STATUS { get; set; }
        //public virtual DbSet<NOTIFICATION_TYPE> NOTIFICATION_TYPE { get; set; }
        //public virtual DbSet<ORDER_STATUS> ORDER_STATUS { get; set; }
        //public virtual DbSet<PASSWORD_HISTORY> PASSWORD_HISTORY { get; set; }
        //public virtual DbSet<PAYMENT_TYPE> PAYMENT_TYPE { get; set; }
        //public virtual DbSet<PERMISSION> PERMISSIONs { get; set; }
        //public virtual DbSet<PRICE_HISTORY> PRICE_HISTORY { get; set; }
        //public virtual DbSet<QUALIFICATION> QUALIFICATIONs { get; set; }
        //public virtual DbSet<QUALIFICATION_TYPE> QUALIFICATION_TYPE { get; set; }
        //public virtual DbSet<RECEIPT> RECEIPTs { get; set; }
        //public virtual DbSet<REFUND> REFUNDs { get; set; }
        //public virtual DbSet<REFUND_REASON> REFUND_REASON { get; set; }
        //public virtual DbSet<SALE> SALEs { get; set; }
        //public virtual DbSet<SALE_CATEGORY> SALE_CATEGORY { get; set; }
        //public virtual DbSet<SALE_ITEM> SALE_ITEM { get; set; }
        //public virtual DbSet<SALE_LINE> SALE_LINE { get; set; }
        public virtual DbSet<Schedule> Schedules { get; set;}
        //public virtual DbSet<SESSION> SESSIONs { get; set; }
        //public virtual DbSet<STOCK_TAKE> STOCK_TAKE { get; set; }
        //public virtual DbSet<STOCK_TAKE_LINE> STOCK_TAKE_LINE { get; set; }
        //public virtual DbSet<SUPPLIER> SUPPLIERs { get; set; }
        //public virtual DbSet<SUPPLIER_ORDER> SUPPLIER_ORDER { get; set; }
        //public virtual DbSet<SUPPLIER_ORDER_LINE> SUPPLIER_ORDER_LINE { get; set; }
        //public virtual DbSet<TITLE> TITLEs { get; set; }
        //public virtual DbSet<USER_ROLE> USER_ROLE { get; set; }
        //public virtual DbSet<USER> USERS { get; set; }
        //public virtual DbSet<VAT> VATs { get; set; }
        public virtual DbSet<Venue> Venues { get; set;}

        //public virtual DbSet<WRITE_OFF> WRITE_OFF { get; set; }
        //public virtual DbSet<WRITE_OFF_LINE> WRITE_OFF_LINE { get; set; }
        //public virtual DbSet<WRITE_OFF_REASON> WRITE_OFF_REASON { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
