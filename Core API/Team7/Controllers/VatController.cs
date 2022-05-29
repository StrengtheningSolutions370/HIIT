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
                await VATRepo.SaveChangesAsync();
                return Ok(vat);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/Vat/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutVat(VAT vat)
        {
            var toUpdate = await VATRepo.GetVATIdAsync(vat.VATID);

            if (toUpdate == null)
            {
                return NotFound("Could not find existing VAT with id:");
            }

            try
            {
                toUpdate.Percentage = vat.Percentage;
                toUpdate.Date = vat.Date;
                //VenueRepo.Update<Venue>(tempVenue);
                await VATRepo.SaveChangesAsync();
                return Ok("Successfully updated");
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
            var tempVat = await VATRepo.GetVATIdAsync(id);
            if (tempVat == null)
            {
                return NotFound();
            }
            try
            {
                VATRepo.Delete<VAT>(tempVat);
                await VATRepo.SaveChangesAsync();
                return Ok();
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
                    return NotFound();
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
        public async Task<IActionResult> GetMatchingVATs(string input)
        {
            try
            {
                var vat = await VATRepo.GetVATsAsync(input);
                return Ok(vat);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        [HttpGet]
        [Route("exists")]
        public async Task<VAT> VATExists(int id)
        {
            return await VATRepo.GetVATIdAsync(id);
        }
    }
}
