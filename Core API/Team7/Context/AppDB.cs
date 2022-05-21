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

        public virtual DbSet<Booking> Bookings{ get; set; }
        public virtual DbSet<BookingAttendance> BookingAttendances{ get; set; }
        public virtual DbSet<BookingPriceHistory> BookingPriceHistories { get; set; }
        public virtual DbSet<BookingType> BookingTypes { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<DateSession> DateSessions { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<EmployeeContract> EmployeeContracts { get; set; }
        public virtual DbSet<EmployeeType> EmployeeTypes { get; set; }
        public virtual DbSet<ExerciseCategory> ExerciseCategories { get; set; }
        public virtual DbSet<Exercise> Exercises { get; set; }
        public virtual DbSet<InventoryItem> InventoryItems { get; set; }
        public virtual DbSet<Lesson> Lessons { get; set; }
        public virtual DbSet<LessonPlan> LessonPlans { get; set; }
        public virtual DbSet<Measurement> Measurements { get; set; }
        public virtual DbSet<Member> Members { get; set; }
        public virtual DbSet<MemberStatus> MemberStatuses { get; set; }
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; }
        public virtual DbSet<PasswordHistory> PasswordHistories { get; set; }
        public virtual DbSet<PaymentType> PaymentTypes { get; set; }
        public virtual DbSet<Permission> Permissions { get; set; }
        public virtual DbSet<PriceHistory> PriceHistories { get; set; }
        public virtual DbSet<Qualification> Qualifications { get; set; }
        public virtual DbSet<QualificationType> QualificationTypes { get; set; }
        public virtual DbSet<Receipt> Receipts { get; set; }
        public virtual DbSet<Refund> Refunds { get; set; }
        public virtual DbSet<RefundReason> RefundReasons { get; set; }
        public virtual DbSet<Sale> Sales { get; set; }
        public virtual DbSet<SaleCategory> SaleCategories { get; set; }
        public virtual DbSet<SaleItem> SaleItems { get; set; }
        public virtual DbSet<SaleLine> SaleLines { get; set; }
        public virtual DbSet<Schedule> Schedules { get; set;}

        public virtual DbSet<Session> Sessions { get; set; }
        public virtual DbSet<StockTake> StockTakes { get; set; }
        public virtual DbSet<StockTakeLine> StockTakeLines { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
        public virtual DbSet<SupplierOrder> SupplierOrders { get; set; }
        public virtual DbSet<SupplierOrderLine> SupplierOrderLines { get; set; }
        public virtual DbSet<Title> Titles { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<VAT> VATs { get; set; }
        public virtual DbSet<Venue> Venues { get; set;}

        public virtual DbSet<WriteOff> WriteOffs { get; set; }
        public virtual DbSet<WriteOffLine> WriteOffLines { get; set; }
        public virtual DbSet<WriteOffReason> WriteOffReasons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
