using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {

        private readonly ISupplierRepo _supplierRepo;
        private readonly ISaleItemRepo _saleItemRepo;

        public SupplierController(ISupplierRepo supplierRepo, ISaleItemRepo saleItemRepo)
        {
            _supplierRepo = supplierRepo;
            _saleItemRepo = saleItemRepo;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostSupplier(SupplierViewModel lvm)
        {
            var suppliers = await _supplierRepo.GetAllSuppliersAsync();

            if (suppliers != null)
                foreach (var s in suppliers)
                {

                    if (s.Cell == lvm.Cell)
                        return StatusCode(StatusCodes.Status409Conflict, "Supplier with the same Name exisits.");

                    if (s.Email == lvm.Email)
                        return StatusCode(StatusCodes.Status409Conflict, "Supplier with the same Email exists.");

                }

            Supplier supplier = new Supplier();

            supplier.Name = lvm.Name;
            supplier.Email = lvm.Email;
            supplier.Cell = lvm.Cell;
            supplier.Address = lvm.Address;

            this._supplierRepo.Add(supplier);
            if (!await this._supplierRepo.SaveChangesAsync())
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error. Please try again");
            }

            return Ok();

        }

        //UPDATE
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> updateSupplier(int id, [FromBody] SupplierViewModel lvm)
        {
            var suppliers = await _supplierRepo.GetAllSuppliersAsync();

            if (suppliers == null)
                foreach (var s in suppliers)
                {

                    if (s.Cell == lvm.Cell)
                        return StatusCode(StatusCodes.Status409Conflict, "Supplier with the same Name exisits.");

                    if (s.Email == lvm.Email)
                        return StatusCode(StatusCodes.Status409Conflict, "Supplier with the same Email exists.");

                }

            var supplier = await _supplierRepo.GetSupplierIdAsync(id);
            if (supplier == null)
                return StatusCode(StatusCodes.Status404NotFound, "Supplier not found.");
            supplier.Name = lvm.Name;
            supplier.Email = lvm.Email;
            supplier.Cell = lvm.Cell;
            supplier.Address = lvm.Address;

            _supplierRepo.Update(supplier);
            if (!await _supplierRepo.SaveChangesAsync())
                return StatusCode(StatusCodes.Status500InternalServerError, "Update Failed");

            return Ok();
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteSupplier(int id)
        {

            Supplier supplier = await this._supplierRepo.GetSupplierIdAsync(id);

            _saleItemRepo.Delete(supplier);
            await _supplierRepo.SaveChangesAsync();

            return Ok();
        }

        //GET ALL
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetSuppliers()
        {
            //var suppliers = await _supplierRepo.GetAllSuppliersAsync();
            //SaleItem[] si = await _saleItemRepo._GetAllSaleItemsArray();

            //if (suppliers != null)
            //{
            //    foreach (var supplier in suppliers)
            //    {
            //        var i = new List<int>();
            //        foreach (var item in supplier.SupplierOrder)
            //        {
            //            i.Add(item.SupplierOrderID);
            //        }
            //        supplier.SaleItems = getSaleItems(si, i);
            //    }
            //}

            //return Ok();

            var suppliers = await this._supplierRepo.GetAllSuppliersAsync();
            return Ok(suppliers);

        }

        static SaleItem[] getSaleItems(SaleItem[] si, List<int> i)
        {
            var output = new List<SaleItem>();
            foreach (var l in i)
            {
                foreach (var e in si)
                {
                    foreach (var q in e.SaleLine)
                    {
                        if (q.SaleID == l)
                            output.Add(e);
                    }
                }
            }
            return output.ToArray();
        }

    }
}
