using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Team7.Models.Repository;
using Team7.Models;
using Microsoft.EntityFrameworkCore;
using Team7.Context;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleCategoryController : Controller
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
                await SaleCategoryRepo.SaveChangesAsync();
                return Ok(saleCategory);
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
            var toUpdate = await SaleCategoryRepo.GetSaleCategoryIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Sale Category with id:" + id);
            }
            try
            {
                toUpdate.Name = saleCategory.Name;
                toUpdate.Description = saleCategory.Description;

                await SaleCategoryRepo.SaveChangesAsync();
                return Ok("Successfully updated");
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
            var tempSaleCategory = await SaleCategoryRepo.GetSaleCategoryIdAsync(id);
            if (tempSaleCategory == null)
            {
                return NotFound();
            }
            try
            {
                SaleCategoryRepo.Delete<SaleCategory>(tempSaleCategory);
                await SaleCategoryRepo.SaveChangesAsync();
                return Ok();
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
                    return NotFound();
                }
                return Ok(saleCategoryList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/salecategory/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingSaleCategories(string input)
        {
            try
            {
                var saleCategory = await SaleCategoryRepo.GetSaleCategorysAsync(input);
                return Ok(saleCategory);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<SaleCategory> SaleCategoryExists(int id)
        {
            return await SaleCategoryRepo.GetSaleCategoryIdAsync(id);
        }

    }
}
