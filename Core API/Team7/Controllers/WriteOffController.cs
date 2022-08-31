using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Team7.ViewModels;
using Team7.Models;
using Team7.Models.Repository;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Collections.Generic;
using static iTextSharp.text.pdf.AcroFields;
using System.Diagnostics.Metrics;

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

        public async Task<IActionResult> PostWriteOff(WriteOffLineViewModel wlvm)
        {
            var writeOffVM = wlvm.WriteOff;
            var saleItemVM = wlvm.SaleItems;
            var reasonVM = wlvm.WriteOffReasons;
            var quantityList = wlvm.Quantity;

            WriteOff writeOff = new WriteOff();
            writeOff.Date = System.DateTime.Now;
            writeOff.EmployeeID = writeOffVM.EmployeeID;
            _writeOffRepo.Add(writeOff);
            await _writeOffRepo.SaveChangesAsync();

            WriteOffLine wl = new WriteOffLine();
            wl.Quantity = quantityList;
            wl.WriteOff = writeOff;
            wl.SaleItem = await _saleItemRepo._GetSaleItemIdAsync(saleItemVM);
            wl.WriteOffReason = await _writeOffReasonRepo._GetWriteOffReasonIdAsync(reasonVM);
            _writeOffLineRepo.Add(wl);
            writeOff.WriteOffLine.Add(wl);

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

            await _writeOffRepo.SaveChangesAsync();
            await _writeOffLineRepo.SaveChangesAsync();
            return Ok();
        }

        //GET ALL
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetPayments()
        {
            try
            {
                var writeoffList = await _writeOffLineRepo.GetAllWriteOffLinesAsync();
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

    }
}
