using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models;

namespace Team7.Context
{
    public class AppDB: IdentityDbContext<AppUser>
    {
        public AppDB()
        {
        }

        public AppDB(DbContextOptions<AppDB> options):base(options)
        {

        }

        public virtual DbSet<Booking> Booking{ get; set; }
        public virtual DbSet<BookingAttendance> BookingAttendance{ get; set; }
        public virtual DbSet<BookingPriceHistory> BookingPriceHistory { get; set; }
        public virtual DbSet<BookingType> BookingType { get; set; }
        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<DateSession> DateSession { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmployeeType> EmployeeType { get; set; }
        public virtual DbSet<ExerciseCategory> ExerciseCategory { get; set; }
        public virtual DbSet<Exercise> Exercise { get; set; }
        //public virtual DbSet<InventoryItem> InventoryItem { get; set; }
        public virtual DbSet<Lesson> Lesson { get; set; }
        public virtual DbSet<LessonPlan> LessonPlan { get; set; }
        public virtual DbSet<Measurement> Measurement { get; set; }
        //public virtual DbSet<Member> Member { get; set; }
        //public virtual DbSet<MemberStatus> MemberStatus { get; set; }
        public virtual DbSet<OrderStatus> OrderStatus { get; set; }
        public virtual DbSet<PasswordHistory> PasswordHistory { get; set; }
        public virtual DbSet<PaymentType> PaymentType { get; set; }
        public virtual DbSet<PriceHistory> PriceHistory { get; set; }
        public virtual DbSet<Qualification> Qualification { get; set; }
        public virtual DbSet<QualificationType> QualificationType { get; set; }
        public virtual DbSet<Payment> Payment { get; set; }
        public virtual DbSet<Refund> Refund { get; set; }
        public virtual DbSet<RefundReason> RefundReason { get; set; }
        public virtual DbSet<Sale> Sale { get; set; }
        public virtual DbSet<SaleCategory> SaleCategory { get; set; }
        public virtual DbSet<SaleItem> SaleItem { get; set; }
        public virtual DbSet<SaleLine> SaleLine { get; set; }
        public virtual DbSet<Schedule> Schedule { get; set; }
        public virtual DbSet<StockTake> StockTake { get; set; }
        public virtual DbSet<StockTakeLine> StockTakeLine { get; set; }
        public virtual DbSet<Supplier> Supplier { get; set; }
        public virtual DbSet<SupplierOrder> SupplierOrder { get; set; }
        public virtual DbSet<SupplierOrderLine> SupplierOrderLine { get; set; }
        public virtual DbSet<Title> Title { get; set; }
        public virtual DbSet<Venue> Venue { get; set;}
        public virtual DbSet<WriteOff> WriteOff { get; set; }
        public virtual DbSet<WriteOffLine> WriteOffLine { get; set; }
        public virtual DbSet<WriteOffReason> WriteOffReason { get; set; }
        public virtual DbSet<VAT> VAT { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
