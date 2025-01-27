﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleItemController : ControllerBase
    {
        const string PATH = "./Assets/";

        private readonly ISaleItemRepo SaleItemRepo;
        private readonly ISaleCategoryRepo saleCategoryRepo;
        private readonly IPriceHistoryRepo priceHistoryRepo;
        private readonly ISaleLineRepo saleLineRepo;
        private readonly IWriteOffLineRepo writeOffLineRepo;

        public SaleItemController(ISaleItemRepo saleItemRepo, ISaleCategoryRepo saleCategoryRepo, IPriceHistoryRepo priceHistoryRepo, ISaleLineRepo saleLineRepo, IWriteOffLineRepo writeOffLineRepo)
        {
            this.SaleItemRepo = saleItemRepo;
            this.saleCategoryRepo = saleCategoryRepo;
            this.priceHistoryRepo = priceHistoryRepo;
            this.saleLineRepo = saleLineRepo;
            this.writeOffLineRepo = writeOffLineRepo;
        }

        // POST api/SaleItem/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSaleItem(SaleItem saleItem)
        {
            try
            {

                SaleItem toAdd = new SaleItem
                {
                    Name = saleItem.Name,
                    Photo = saleItem.Photo,
                    Description = saleItem.Description,
                    //Price = saleItem.Price,
                    Quotable = saleItem.Quotable,
                    //Quantity = toUpdate.Quantity,
                    QuantityOnHand = saleItem.QuantityOnHand,
                    SaleCategoryID = saleItem.SaleCategoryID
                };

                if (!saleItem.Quotable)
                {
                    var siPriceHistory = saleItem.PriceHistory.First();

                    PriceHistory salePrice = new PriceHistory
                    {
                        Date = DateTime.Now,
                        CostAmount = siPriceHistory.CostAmount,
                        SaleAmount = siPriceHistory.SaleAmount,
                        SaleItemID = saleItem.SaleItemID,
                        SaleItem = saleItem
                    };

                    toAdd.PriceHistory.Add(salePrice);
                } 

                

                SaleItemRepo.Add(toAdd);
                if (await SaleItemRepo.SaveChangesAsync())
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
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        [HttpDelete]
        [Route("deletephoto")]
        public async Task<IActionResult> Delphoto(string name)
        {
            System.IO.File.Delete(Path.Combine("Resources", "Images", "saleItemImages", name));
            return Ok();
        }

        // PUT api/SaleItem/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutSaleItem(int id, SaleItem saleItem)
        {
            var toUpdate = await SaleItemRepo._GetSaleItemIdAsync(id);

            if (toUpdate == null)
            {
                return NotFound("Could not find existing sale item with ID - " + saleItem.SaleItemID);
            }

            try
            {

                toUpdate.Name = saleItem.Name;
                toUpdate.Photo = saleItem.Photo;
                toUpdate.Description = saleItem.Description;
                //toUpdate.Price = saleItem.Price;
                toUpdate.Quotable = saleItem.Quotable;
                //toUpdate.Quantity = toUpdate.Quantity;
                toUpdate.QuantityOnHand = saleItem.QuantityOnHand;
                toUpdate.SaleCategoryID = saleItem.SaleCategoryID;
                //toUpdate.SaleCategory =  await saleCategoryRepo._GetSaleCategoryIdAsync()

                if (saleItem.PriceHistory != null)
                {
                    var siPriceHistory = saleItem.PriceHistory.FirstOrDefault();

                    PriceHistory salePrice = new PriceHistory
                    {
                        Date = System.DateTime.Now,
                        CostAmount = siPriceHistory.CostAmount,
                        SaleAmount = siPriceHistory.SaleAmount,
                        SaleItemID = saleItem.SaleItemID,
                        SaleItem = saleItem
                    };
                    toUpdate.PriceHistory.Add(salePrice);
                }
                SaleItemRepo.Update<SaleItem>(toUpdate);
                if (await SaleItemRepo.SaveChangesAsync())
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

        // DELETE api/SaleItem/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSaleItem(int id)
        {
            var tempSaleItem = await SaleItemRepo._GetSaleItemIdAsync(id);
            if (tempSaleItem == null)
            {
                return NotFound();
            }
            try
            {
                //delete from sale line:
                if (await saleLineRepo.RemoveRangeSaleItemIdAsync(id))
                {
                    //delete from price history:
                    if (await priceHistoryRepo.RemoveRangeSaleItemIdAsync(id))
                    {
                        //delete write-off
                        if (await writeOffLineRepo.RemoveRangeSaleItemIdAsync(id))
                        {
                            //delete from sale item:
                            SaleItemRepo.Delete(tempSaleItem);
                            if (await SaleItemRepo.SaveChangesAsync())
                            {
                                //try delete file:
                                var fileToDelete = tempSaleItem.Photo;
                                try
                                {
                                    System.IO.File.Delete(Path.Combine("Resources", "Images", "saleItemImages", fileToDelete));
                                }
                                catch { }
                                return Ok();
                            }
                            else
                            {
                                return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                            }
                        }
                        else
                        {
                            throw new Exception();
                        }
                    }
                    else
                    {
                        throw new Exception();
                    }
                } else
                {
                    throw new Exception();
                }
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
                    return Ok(0);
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
        public async Task<IActionResult> GetMatchingSaleItems(string name, string description)
        {
            try
            {
                var saleItem = await SaleItemRepo.GetSaleItemsAsync(name, description);
                if (saleItem == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(saleItem);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

    }
}