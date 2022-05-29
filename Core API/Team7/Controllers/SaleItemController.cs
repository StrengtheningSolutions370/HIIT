using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.Models;
using Microsoft.EntityFrameworkCore;
using Team7.Context;
using System.IO;
using System.Net.Http.Headers;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleItemController : ControllerBase
    {
        const string PATH = "./Assets/";

        private readonly ISaleItemRepo SaleItemRepo;
        public SaleItemController(ISaleItemRepo saleItemRepo)
        {
            this.SaleItemRepo = saleItemRepo;
        }

        // POST api/SaleItem/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSaleItem(SaleItem saleItem)
        {
            try
            {
                
                SaleItemRepo.Add(saleItem);
                await SaleItemRepo.SaveChangesAsync();
                return Ok(saleItem);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("upload")]
        public async Task<IActionResult> UploadAsync()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                var folderName = Path.Combine("Resources", "Images", "saleItemImages");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        static void createFile(byte[] data)
        {
            using var stream = System.IO.File.Create(PATH);
            stream.Write(data, 0, data.Length);
        }

        // PUT api/SaleItem/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutSaleItem(SaleItem saleItem)
        {
            var toUpdate = await SaleItemRepo.GetSaleItemIdAsync(saleItem.SaleItemID);

            if (toUpdate == null)
            {
                return NotFound("Could not find existing sale item with id:");
            }

            try
            {
                toUpdate.Name = saleItem.Name;
                toUpdate.Photo = saleItem.Photo;
                toUpdate.Description = saleItem.Description;
                toUpdate.Price = saleItem.Price;
                toUpdate.Quotable = saleItem.Quotable;
                toUpdate.Quantity = saleItem.Quantity;

                //VenueRepo.Update<Venue>(tempVenue);
                await SaleItemRepo.SaveChangesAsync();
                return Ok("Successfully updated");
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }


        // DELETE api/SaleItem/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSaleItem(int id)
        {
            var tempSaleItem = await SaleItemRepo.GetSaleItemIdAsync(id);
            if (tempSaleItem == null)
            {
                return NotFound();
            }
            try
            {
                SaleItemRepo.Delete<SaleItem>(tempSaleItem);
                await SaleItemRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/SaleItem/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetSaleItems()
        {
            try
            {
                var saleItemList = await SaleItemRepo.GetAllSaleItemsAsync();
                if (saleItemList == null)
                {
                    return NotFound();
                }
                return Ok(saleItemList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/SaleItem/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingSaleItems(string input)
        {
            try
            {
                var saleItem = await SaleItemRepo.GetSaleItemsAsync(input);
                return Ok(saleItem);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<SaleItem> SaleItemExists(int id)
        {
            return await SaleItemRepo.GetSaleItemIdAsync(id);
        }
    }
}
