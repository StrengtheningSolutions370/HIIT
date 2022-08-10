using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.IO;
using System.Text;
using Team7.Context;
using Team7.Factory;
using Team7.Models;
using Team7.Models.Repository;
using Team7.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Identity.Web;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Team7
{
    public class Startup
    {
        readonly string corsPolicy = "_myAllowSpecificOrigins";
        TimedEventService time_pba = new TimedEventService();

        public Startup(IConfiguration configuration)
        {
            try
            {
                Configuration = configuration;
                time_pba.start();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message + ex.StackTrace);
            }
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
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Add new Bearer Token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                    #pragma warning disable CA1825 // Avoid zero-length array allocations
                        new string []{}
                    #pragma warning restore CA1825 // Avoid zero-length array allocations
                    }
                });
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
            options.UseSqlServer(Configuration.GetConnectionString("AWS")));

            //Scoping all Interfaces to all Repos
            services.AddScoped<IBookingAttendanceRepo, BookingAttendanceRepo>();
            services.AddScoped<IBookingPriceHistoryRepo, BookingPriceHistoryRepo>();
            services.AddScoped<IBookingRepo, BookingRepo>();
            services.AddScoped<IBookingTypeRepo, BookingTypeRepo>();
            services.AddScoped<IClientRepo, ClientRepo>();
            services.AddScoped<IDateSessionRepo, DateSessionRepo>();
            services.AddScoped<IEmployeeContractRepo, EmployeeContractRepo>();
            services.AddScoped<IEmployeeRepo, EmployeeRepo>();
            services.AddScoped<IEmployeeTypeRepo, EmployeeTypeRepo>();
            services.AddScoped<IExerciseCategoryRepo, ExerciseCategoryRepo>();
            services.AddScoped<IExerciseRepo, ExerciseRepo>();
            services.AddScoped<ILessonPlanRepo, LessonPlanRepo>();
            services.AddScoped<ILessonRepo, LessonRepo>();
            services.AddScoped<IMeasurementRepo, MeasurementRepo>();
            //services.AddScoped<IMemberRepo, MemberRepo>();
            //services.AddScoped<IMemberStatusRepo, MemberStatusRepo>();
            services.AddScoped<IOrderStatusRepo, OrderStatusRepo>();
            services.AddScoped<IPasswordHistoryRepo, PasswordHistoryRepo>();
            services.AddScoped<IPaymentTypeRepo, PaymentTypeRepo>();
            services.AddScoped<IPriceHistoryRepo, PriceHistoryRepo>();
            services.AddScoped<IQualificationRepo, QualificationRepo>();
            services.AddScoped<IQualificationTypeRepo, QualificationTypeRepo>();
            services.AddScoped<IPaymentRepo, PaymentRepo>();
            services.AddScoped<IRefundReasonRepo, RefundReasonRepo>();
            services.AddScoped<IRefundRepo, RefundRepo>();
            services.AddScoped<ISaleCategoryRepo, SaleCategoryRepo>();
            services.AddScoped<ISaleItemRepo, SaleItemRepo>();
            services.AddScoped<ISaleRepo, SaleRepo>();
            services.AddScoped<IScheduleRepo, ScheduleRepo>();
            services.AddScoped<IStockTakeLineRepo, StockTakeLineRepo>();
            services.AddScoped<IStockTakeRepo, StockTakeRepo>();
            services.AddScoped<ISupplierOrderLineRepo, SupplierOrderLineRepo>();
            services.AddScoped<ISupplierOrderRepo, SupplierOrderRepo>();
            services.AddScoped<ISupplierRepo, SupplierRepo>();
            services.AddScoped<ITitleRepo, TitleRepo>();
            services.AddScoped<IVenueRepo, VenueRepo>();
            services.AddScoped<IVATRepo, VATRepo>();
            services.AddScoped<IWriteOffLineRepo, WriteOffLineRepo>();
            services.AddScoped<IWriteOffReasonRepo, WriteOffReasonRepo>();
            services.AddScoped<IWriteOffRepo, WriteOffRepo>();
            services.AddScoped<IVATRepo, VATRepo>();
            //services.AddSwaggerGen();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ICorsService corsService, ICorsPolicyProvider corsPolicyProvider)
        {

           
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Team7 v1");
                c.RoutePrefix = "";
                //c.RoutePrefix = string.Empty;

            });


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
            app.UseCors("CorsPolicy");

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources")
            });

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources"),
                ServeUnknownFileTypes = true,
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Access-Control-Allow-Origin", "*");
                    ctx.Context.Response.Headers.Append("Access-Control-Allow-Headers",
                      "Origin, X-Requested-With, Content-Type, Accept");
                },
            });

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
