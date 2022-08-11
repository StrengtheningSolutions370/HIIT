using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleCategoryController : ControllerBase
    {
        private readonly ISaleCategoryRepo SaleCategoryRepo;
        public SaleCategoryController(ISaleCategoryRepo saleCategoryRepo)
        {
            this.SaleCategoryRepo = saleCategoryRepo;
        }

        // POST api/salecategory/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSaleCategory(SaleCategory saleCategory)
        {
            try
            {
                SaleCategoryRepo.Add(saleCategory);
                if (await SaleCategoryRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/salecategory/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutSaleCategory(int id, [FromBody] SaleCategory saleCategory)
        {
            var toUpdate = await SaleCategoryRepo._GetSaleCategoryIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Sale Category with ID - " + id);
            }
            try
            {
                toUpdate.Name = saleCategory.Name;
                toUpdate.Description = saleCategory.Description;

                if (await SaleCategoryRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to update value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/salecategory/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSaleCategory(int id)
        {
            var tempSaleCategory = await SaleCategoryRepo._GetSaleCategoryIdAsync(id);
            if (tempSaleCategory == null)
            {
                return NotFound();
            }
            try
            {
                SaleCategoryRepo.Delete<SaleCategory>(tempSaleCategory);
                if (await SaleCategoryRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/salecategory/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetSaleCategories()
        {
            try
            {
                var saleCategoryList = await SaleCategoryRepo.GetAllSaleCategorysAsync();
                if (saleCategoryList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(saleCategoryList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/salecategory/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingSaleCategories(string name, string description)
        {
            try
            {
                var saleCategory = await SaleCategoryRepo.GetSaleCategorysAsync(name, description);
                if (saleCategory == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(saleCategory);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

    }
}
