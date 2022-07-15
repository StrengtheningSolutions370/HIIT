using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.Models;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VatController : ControllerBase
    {
        private readonly IVATRepo VATRepo;
        public VatController(IVATRepo vatRepo)
        {
            this.VATRepo = vatRepo;
        }

        // POST api/Vat/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostVat(VAT vat)
        {
            try
            {
                VATRepo.Add(vat);
                if (await VATRepo.SaveChangesAsync())
                {
                    return Ok("Successfully added: {" + vat.Percentage + ' ' + vat.Date + "} with ID - " + vat.VATID);
                } else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the database. Contact support.");
                }                
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }


        // DELETE api/Vat/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteVat(int id)
        {
            var tempVat = await VATRepo._GetVATIdAsync(id);
            if (tempVat == null)
            {
                return NotFound("Could not find existing Venue with ID - " + id);
            }
            try
            {
                VATRepo.Delete<VAT>(tempVat);
                if (await VATRepo.SaveChangesAsync())
                {
                    return Ok("Successfully deleted with ID - " + id);
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


        // GET: api/Vat/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetVATs()
        {
            try
            {
                var vatList = await VATRepo.GetAllVATsAsync();
                if (vatList == null)
                {
                    return Ok(0);
                }
                return Ok(vatList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/Vat/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingVATs(decimal? percentage, DateTime? date)
        {
            try
            {
                var vat = await VATRepo.GetVATsAsync(percentage, date);
                if (vat == null) return Ok(0);
                return Ok(vat);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
