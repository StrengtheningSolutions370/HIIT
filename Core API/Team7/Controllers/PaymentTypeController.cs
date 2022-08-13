using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        private readonly IPaymentTypeRepo _paymentTypeRepo;

        public PaymentTypeController(IPaymentTypeRepo paymentTypeRepo)
        {
            this._paymentTypeRepo = paymentTypeRepo; 
        }

        // POST api/paymentType/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostPaymentType([FromBody] PaymentType paymemtType)
        {
            try
            {
                PaymentType toAdd = new PaymentType
                {
                    Name = paymemtType.Name
                };


                _paymentTypeRepo.Add(toAdd);
                if (await _paymentTypeRepo.SaveChangesAsync())
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

        // DELETE api/paymentType/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeletePaymentType(int id)
        {
            var tempPaymentType = await _paymentTypeRepo._GetPaymentTypeIdAsync(id);
            if (tempPaymentType == null)
            {
                return NotFound();
            }
            try
            {
                _paymentTypeRepo.Delete(tempPaymentType);
                if (await _paymentTypeRepo.SaveChangesAsync())
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

        // GET: api/paymentType/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<object> GetAllPaymentTypesAsync()
        {
            try
            {
                var paymentTypeList = await _paymentTypeRepo.GetAllPaymentTypesAsync();
                if (paymentTypeList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(paymentTypeList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/paymenttype/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingPaymentType(string name)
        {
            try
            {
                var paymentType = await _paymentTypeRepo.GetPaymentTypesAsync(name);
                if (paymentType == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(paymentType);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
