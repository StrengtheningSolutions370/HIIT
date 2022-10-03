using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Team7.ViewModels;
using Team7.Models;
using Team7.Models.Repository;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WriteOffController : ControllerBase
    {
        private readonly ISaleItemRepo _saleItemRepo;
        private readonly IWriteOffReasonRepo _writeOffReasonRepo;
        private readonly IWriteOffRepo _writeOffRepo;
        private readonly IEmployeeRepo _employeeRepo;
        private readonly IWriteOffLineRepo _writeOffLineRepo;

        public WriteOffController(ISaleItemRepo saleItemRepo, IWriteOffReasonRepo writeOffReasonRepo, IWriteOffRepo writeOffRepo, IEmployeeRepo employeeRepo, IWriteOffLineRepo writeOffLineRepo)
        {
            _saleItemRepo = saleItemRepo;
            _writeOffReasonRepo = writeOffReasonRepo;
            _writeOffRepo = writeOffRepo;
            _employeeRepo = employeeRepo;
            _writeOffLineRepo = writeOffLineRepo;
        }

        //CREATE
        [HttpPost]
        [Route("add")]

        public async Task<IActionResult> PostWriteOff(WriteOff wlvm)
        {
            //var writeOffVM = wlvm.WriteOff;
            //var saleItemVM = wlvm.SaleItems;
            //var reasonVM = wlvm.WriteOffReasons;
            //var quantityList = wlvm.Quantity;

            WriteOff writeOff = new WriteOff();
            writeOff.Date = System.DateTime.Now;
            //var emp = await _employeeRepo._GetEmployeeIdAsync(wlvm.EmployeeID);
            //writeOff.Employee = emp;
            writeOff.EmployeeID = wlvm.EmployeeID;
            //await _writeOffRepo.SaveChangesAsync();

            WriteOffLine wl = new WriteOffLine();
            wl.Quantity = wlvm.WriteOffLine.FirstOrDefault().Quantity;
            wl.WriteOff = writeOff;
            wl.SaleItem = await _saleItemRepo._GetSaleItemIdAsync(wlvm.WriteOffLine.FirstOrDefault().SaleItemID);
            wl.WriteOffReason = await _writeOffReasonRepo._GetWriteOffReasonIdAsync(wlvm.WriteOffLine.FirstOrDefault().WriteOffReasonID);
            _writeOffLineRepo.Add(wl);
            writeOff.WriteOffLine.Add(wl);
            _writeOffRepo.Add(writeOff);

            var toUpdate = wl.SaleItem;
            toUpdate.QuantityOnHand = toUpdate.QuantityOnHand - wl.Quantity;
            _saleItemRepo.Update<SaleItem>(toUpdate);
            /*var counter = 0;
            foreach (int item in saleItemVM)
            {
                WriteOffLine wl = new WriteOffLine();
                wl.Quantity = quantityList[counter];
                wl.WriteOff = writeOff;
                wl.SaleItem = await _saleItemRepo._GetSaleItemIdAsync(item);
                wl.WriteOffReason = await _writeOffReasonRepo._GetWriteOffReasonIdAsync(reasonVM[counter]);
                _writeOffLineRepo.Add(wl);
                writeOff.WriteOffLine.Add(wl);
                counter++;

                var toUpdate = wl.SaleItem;
                toUpdate.QuantityOnHand = toUpdate.QuantityOnHand - wl.Quantity;
                _saleItemRepo.Update<SaleItem>(toUpdate);
            }*/

            //_writeOffRepo.
            //    entry(product).state = EntityState.Modified;

            if (await _writeOffRepo.SaveChangesAsync())
            {
                if (await _writeOffLineRepo.SaveChangesAsync())
                {
                    if (await _saleItemRepo.SaveChangesAsync())
                    {
                        return Ok();
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the saleItem. Contact support.");
                    }
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the WriteOffLine. Contact support.");
                }
            }
            else
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the WriteOff. Contact support.");
            }

        }

        //GET ALL
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetWriteOffs()
        {
            try
            {
                var writeoffList = await _writeOffRepo.GetAllWriteOffsAsync();
                if (writeoffList == null)
                {
                    return Ok(0);
                }
                return Ok(writeoffList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        //DELETE
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteWriteOff(int id)
        {
            var tempWriteOff = await _writeOffRepo._GetWriteOffIdAsync(id);
            if (tempWriteOff == null)
            {
                return NotFound();
            }
            try
            {
                _writeOffRepo.Delete(tempWriteOff);
                if (await _writeOffRepo.SaveChangesAsync())
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

    }  
}
