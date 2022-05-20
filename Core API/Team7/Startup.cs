using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
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
using Team7.Models.Repository;

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


            // services.AddResponseCaching();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Team7", Version = "v1" });
                //c.ResolveConflictingActions(desc => desc.First());
            });
            services.AddDbContext<AppDB>(options =>
<<<<<<< HEAD
            options.UseSqlServer(Configuration.GetConnectionString("Shan")));
=======
            options.UseSqlServer(Configuration.GetConnectionString("Josh")));
>>>>>>> 2be203043b6cb9a004a9553ca1763a5c1a4493f4
            services.AddScoped<IVenueRepo, VenueRepo>();
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

            //app.UseResponseCaching()

            //app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
               endpoints.MapControllers();
            });
        }
    }
}
