using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Team7.Models.Repository;
using Team7.Models;
using System.Linq;
using System.Threading.Tasks;
using System;
using Team7.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly IReportRepo _reportRepo;
        public ReportController(IReportRepo reportRepo)
        {
            _reportRepo = reportRepo;
        }

        //GETALL
        [HttpGet]
        [Route("getBySaleCategory")]

        public async Task<IActionResult> GetAllBySaleCategory()
        {
            try
            {
                var saleCategoryList = await _reportRepo.getAllSaleCategoryReport();
                if (saleCategoryList == null)
                {
                    return Ok(0);
                }
                return Ok(saleCategoryList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
       }

    }
}
