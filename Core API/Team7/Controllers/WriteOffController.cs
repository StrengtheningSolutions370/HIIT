using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Team7.ViewModels;
using Team7.Models;
using Team7.Models.Repository;
using System.Threading.Tasks;
using System;
using System.Linq;

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
        [HttpGet]
        [Route("add")]

        public async Task<IActionResult> PostWriteOff(WriteOffLineViewModel wlvm)
        {
            var writeOffVM = wlvm.WriteOff;
            var saleItemVM = wlvm.SaleItems;

            WriteOff writeOff = new WriteOff();
            writeOff.Date = System.DateTime.Now;
            writeOff.EmployeeID = writeOffVM.EmployeeID;
            _writeOffRepo.Add(writeOff);
            await _writeOffRepo.SaveChangesAsync();
            foreach (SaleItem saleItemVMID in saleItemVM)
            {
                WriteOffLine wl = new WriteOffLine();
                wl.Quantity = wlvm.Quantity;
                wl.WriteOff = writeOff;
                wl.SaleItem = await _saleItemRepo._GetSaleItemIdAsync(saleItemVMID.SaleItemID);
                _writeOffLineRepo.Add(wl);
                writeOff.WriteOffLine.Add(wl);
            }

            await _writeOffRepo.SaveChangesAsync();
            await _writeOffLineRepo.SaveChangesAsync();
            return Ok();
        }
    }
}
