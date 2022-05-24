using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Context;
using Team7.Factory;
using Team7.Models;
using Team7.Models.Repository;
using System.Text;

namespace Team7
{
    public class Startup
    {
        readonly string corsPolicy = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Authentication configuration
            services.AddIdentity<AppUser, IdentityRole>(options =>
             {
                 options.Password.RequireDigit = true;
                 options.Password.RequireUppercase = false;
                 options.Password.RequireLowercase = false;
                 options.Password.RequireNonAlphanumeric = false;                 
                 options.Password.RequiredLength = 8;
                 options.Password.RequiredUniqueChars = 1;
                 options.User.RequireUniqueEmail = true;
             }).AddEntityFrameworkStores<AppDB>()
             .AddDefaultTokenProviders();

            services.AddAuthentication()
                    .AddCookie()
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters()
                        {
                            ValidIssuer = Configuration["Tokens:Issuer"],
                            ValidAudience = Configuration["Tokens:Audience"],
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                        };
                    });

            services.AddScoped<IUserClaimsPrincipalFactory<AppUser>, AppUserClaimsPrincipalFactory>();
            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromHours(12);
            });

            //Web configuration

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Team7", Version = "v1" });
                //c.ResolveConflictingActions(desc => desc.First());
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: corsPolicy,
                                  policy =>
                                  {
                                      policy.WithOrigins("*")
                                                                  .AllowAnyHeader()
                                                                  .AllowAnyMethod()
                                                                  .AllowAnyOrigin();
                                  });
            });

            //DB configuration
            services.AddDbContext<AppDB>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("Josh")));

            //Scoping all Interfaces to all Repos
            services.AddScoped<IBookingAttendanceRepo, BookingAttendanceRepo>();
            services.AddScoped<IBookingPriceHistoryRepo, BookingPriceHistoryRepo>();
            services.AddScoped<IBookingRepo, BookingRepo>();
            services.AddScoped<IBookingTypeRepo, BookingTypeRepo>();
            services.AddScoped<IClientRepo, ClientRepo>();
            services.AddScoped<IDateSessionRepo, DateSessionRepo>();
            services.AddScoped<IEmployeeContractRepo, EmployeeContractRepo>();
            services.AddScoped<IEmployeeRepo, EmployeeRepo>();
            services.AddScoped<IExerciseCategoryRepo, ExerciseCategoryRepo>();
            services.AddScoped<IExerciseRepo, ExerciseRepo>();
            services.AddScoped<IInventoryItemRepo, InventoryItemRepo>();
            services.AddScoped<ILessonPlanRepo, LessonPlanRepo>();
            services.AddScoped<ILessonRepo, LessonRepo>();
            services.AddScoped<IMeasurementRepo, MeasurementRepo>();
            services.AddScoped<IMemberRepo, MemberRepo>();
            services.AddScoped<IMemberStatusRepo, MemberStatusRepo>();
            services.AddScoped<IOrderStatusRepo, OrderStatusRepo>();
            services.AddScoped<IPasswordHistoryRepo, PasswordHistoryRepo>();
            services.AddScoped<IPaymentTypeRepo, PaymentTypeRepo>();
            services.AddScoped<IPermissionRepo, PermissionRepo>();
            services.AddScoped<IPriceHistoryRepo, PriceHistoryRepo>();
            services.AddScoped<IQualificationRepo, QualificationRepo>();
            services.AddScoped<IQualificationTypeRepo, QualificationTypeRepo>();
            services.AddScoped<IReceiptRepo, ReceiptRepo>();
            services.AddScoped<IRefundReasonRepo, RefundReasonRepo>();
            services.AddScoped<IRefundRepo, RefundRepo>();
            services.AddScoped<ISaleCategoryRepo, SaleCategoryRepo>();
            services.AddScoped<ISaleItemRepo, SaleItemRepo>();
            services.AddScoped<ISaleRepo, SaleRepo>();
            services.AddScoped<IScheduleRepo, ScheduleRepo>(); 
            services.AddScoped<ISessionRepo, SessionRepo>();
            services.AddScoped<IStockTakeLineRepo, StockTakeLineRepo>();
            services.AddScoped<IStockTakeRepo, StockTakeRepo>();
            services.AddScoped<ISupplierOrderLineRepo, SupplierOrderLineRepo>();
            services.AddScoped<ISupplierOrderRepo, SupplierOrderRepo>();
            services.AddScoped<ISupplierRepo, SupplierRepo>();
            services.AddScoped<ITitleRepo, TitleRepo>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IUserRoleRepo, UserRoleRepo>();
            services.AddScoped<IVenueRepo, VenueRepo>();
            services.AddScoped<IWriteOffLineRepo, WriteOffLineRepo>();
            services.AddScoped<IWriteOffReasonRepo, WriteOffReasonRepo>();
            services.AddScoped<IWriteOffRepo, WriteOffRepo>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Team7 v1");
                    //c.RoutePrefix = string.Empty;
                });

            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(corsPolicy);

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
               endpoints.MapControllers();
            });
        }
    }
}
