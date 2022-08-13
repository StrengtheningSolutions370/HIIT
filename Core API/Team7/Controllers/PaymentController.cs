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
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepo _paymentRepo;
        private readonly IPaymentTypeRepo _paymentTypeRepo;
        private readonly ISaleRepo _saleRepo;
        private readonly ISaleItemRepo _saleItemRepo;
        private readonly IBookingRepo _bookingRepo;
        private readonly UserManager<AppUser> _userManager;
        private readonly IClientRepo _clientRepo;
        private readonly IEmployeeRepo _employeeRepo;
        private readonly IScheduleRepo _scheduleRepo;



        public PaymentController(IPaymentRepo paymentRepo, IPaymentTypeRepo paymentTypeRepo, UserManager<AppUser> userManager, ISaleRepo saleRepo, IBookingRepo bookingRepo, ISaleItemRepo saleItemRepo, IClientRepo clientRepo, IEmployeeRepo employeeRepo, IScheduleRepo scheduleRepo)
        {
            _paymentRepo = paymentRepo;
            _paymentTypeRepo = paymentTypeRepo;
            _saleRepo = saleRepo;
            _bookingRepo = bookingRepo;
            _saleItemRepo = saleItemRepo;
            _userManager = userManager;
            _clientRepo = clientRepo;
            _employeeRepo = employeeRepo;
            _scheduleRepo = scheduleRepo;
        }

        //CREATE
        [HttpPost]
        [Route("add")]

        public async Task<IActionResult> PostPayment(PaymentViewModel pvm)
        {
            try
            {
                Payment toAdd = new Payment
                {
                    PaymentType = await _paymentTypeRepo._GetPaymentTypeIdAsync(pvm.paymentTypeID)
                };

                var userTemp = this.getUser(pvm.userID);

                if (pvm.Sales != null)
                {
                    //var temp = await _appUserController.getUser(pvm.userID);
                    
                    Sale saleTemp = new()
                    {
                        Date = System.DateTime.Now,
                        UserID = userTemp.Id,
                        AppUser = userTemp
                    };

                    foreach (SaleLine item in pvm.Sales)
                    {
                        SaleItem saleItemTemp = await _saleItemRepo._GetSaleItemIdAsync((int)item.SaleItemID);
                        SaleLine sl = new()
                        {
                            Sale = saleTemp,
                            SaleItem = saleItemTemp,
                            //SaleItemID = item.SaleItemID,                            
                            Quantity = item.Quantity
                        };
                        saleTemp.SaleLine.Add(sl);
                    }

                    _saleRepo.Add(saleTemp);
                    await _saleRepo.SaveChangesAsync();
                    toAdd.Sale = saleTemp;
                }
                
                if (pvm.Bookings != null)
                {
                    var clientIDTemp = await _clientRepo.GetClientIdAsync(pvm.userID);
                    //var clientTemp 

                    Booking bookTemp = new()
                    {
                        Date = System.DateTime.Now,
                        ClientID = clientIDTemp.ClientID
                        //Client = clientIDTemp

                    };

                    foreach (BookingAttendance bookingItem in pvm.Bookings)
                    {
                        Schedule scheduleTemp = await _scheduleRepo._GetScheduleIdAsync((int)bookingItem.ScheduleID);
                        BookingAttendance ba = new()
                        {
                            Booking = bookTemp,
                            Schedule = scheduleTemp,
                            Attended = false
                        };
                        bookTemp.BookingAttendance.Add(ba);
                    }

                    _bookingRepo.Add(bookTemp);
                    await _bookingRepo.SaveChangesAsync();
                    toAdd.Booking = bookTemp;
                }

                _paymentRepo.Add(toAdd);

                //await _bookingRepo.SaveChangesAsync();
                await _paymentRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
            //var paymentVM = pvm.Payment;
            //var scheduleArray = pvm.Schedules;
            /*SaleInfo saleItemVM = new SaleInfo
            {
                saleItemID = saleItemVm.SaleID,
                qtyChange = 0
            };*/




            //if (scheduleArray != null)
            //{
            //    Booking bookingTemp = new Booking();
            //    bookingTemp.Date = System.DateTime.Now;
            //    bookingTemp.ClientID = pvm.clientID;
            //    foreach(int scheduleID in scheduleArray)
            //    {
            //        BookingAttendance ba = new BookingAttendance();
            //        ba.BookingID = bookingTemp.BookingID;
            //        ba.Attended = false; 
            //        ba.ScheduleID = scheduleID;
            //        bookingTemp.BookingAttendance.Add(ba);
            //    }
            //    _bookingRepo.Add(bookingTemp);
            //    payment.BookingID = bookingTemp.BookingID;
            //}



        }

        //GETALL
        [HttpGet]
        [Route("getAll")]

        public async Task<IActionResult> GetPayments()
        {
            try
            {
                var paymentList = await _paymentRepo.GetAllPaymentsAsync();
                if (paymentList == null)
                {
                    return Ok(0);
                }
                return Ok(paymentList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        private AppUser getUser(string id)
        {

            //AppUser user = _userManager.Users.Where(usr => usr.Id == id);
            IQueryable<AppUser> user = _userManager.Users.Where(usr => usr.Id == id);
            AppUser temp = user.Single();
            
            return temp;
        }
    }
}


            ////query for the user in employee table:
            //var emp = await _employeeRepo.GetByUserIdAsync(id);
            ////query for the user in client table:
            //var cli = await _clientRepo.GetClientIdAsync(id);



            //if (emp != null)
            //{
            //    //employee called the endpoint
            //    .Select(usr => new AppUser
            //    {
            //        FirstName = usr.FirstName,
            //        LastName = usr.LastName,
            //        Email = usr.Email,
            //        PhoneNumber = usr.PhoneNumber,
            //        //Title = usr.Title,
            //    });



        

//            if (cli != null)
//            {
//                IQueryable<AppUser> user = _userManager.Users.Where(usr => usr.Id == id).Select(usr => new AppUser
//                {
//                    FirstName = usr.FirstName,
//                    LastName = usr.LastName,
//                    Email = usr.Email,
//                    PhoneNumber = usr.PhoneNumber,
//                    Title = usr.Title,
//                });
//                //client called the endpoint
//                return Ok(new
//                {
//                    user,
//                    cli
//                });
//            }

//            return BadRequest();
//        }
//    }
//}
