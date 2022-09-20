using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Team7.Models.Repository;
using Team7.ViewModels;
using Team7.Models;
using System.Threading;
using Team7.Services;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefundController : Controller
    {

        private readonly IRefundRepo _refundRepo;
        private readonly IRefundReasonRepo _refundReasonRepo;
        private readonly IPaymentRepo _paymentRepo;

        public RefundController(IRefundRepo refundRepo, IRefundReasonRepo refundReasonRepo, IPaymentRepo paymentRepo)
        {
            _refundRepo = refundRepo;
            _refundReasonRepo = refundReasonRepo;
            _paymentRepo = paymentRepo;
        } 

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostRefund(RefundViewModel rvm)
        {
            Refund r = new Refund();

            r.Date = System.DateTime.Now;
            r.Notes = rvm.Notes;
            r.Total = rvm.RefundAmount;
            r.complete = false;

            //fetch payment:
            var payment = await _paymentRepo.GetPaymentByIdAsync(rvm.PaymentID);
            if (payment == null)
                return NotFound("Payment does not exist.");
            r.Payment = payment;
            r.PaymentID = rvm.PaymentID;

            //fetch reason:
            var reason = await _refundReasonRepo._GetRefundReasonIdAsync(rvm.RefundResonID);
            if (payment == null)
                return NotFound("Refund reason does not exist.");
            r.RefundReason = reason;
            r.RefundReasonID = rvm.RefundResonID;

            //add to db:
            _refundRepo.Add(r);
            await _refundRepo.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        [Route("complete")]
        public async Task<IActionResult> Complete(RefundResponseViewModel rvm)
        {
            //mark as complete:
            var r = _refundRepo.GetRefundByIdAsync(rvm.RefundID).Result;
            if (r == null) return NotFound("Refund does not exist.");
            r.complete = true;
            _refundRepo.Update(r);
            await _refundRepo.SaveChangesAsync();

            //send email:
            Email e = new Email(rvm.recpt, rvm.Subject, rvm.Body);
            Thread thr = new Thread(new ThreadStart(e.sendEmail));
            thr.Start();

            return Ok();
        }

    }
}
