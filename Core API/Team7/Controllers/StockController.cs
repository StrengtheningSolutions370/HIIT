using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.Repository;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : Controller
    {

        private readonly ISaleItemRepo _saleItemRepo;
        private readonly ISaleItemOrderRepo _saleItemOrderRepo;
        private readonly IOrderRecievedRepo _orderRecievedRepo;

        public StockController(ISaleItemRepo saleItemRepo, ISaleItemOrderRepo saleItemOrderRepo, IOrderRecievedRepo orderRecievedRepo)
        {
            _saleItemRepo = saleItemRepo;
            _saleItemOrderRepo = saleItemOrderRepo;
            _orderRecievedRepo = orderRecievedRepo;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> get()
        {
            var output = await _orderRecievedRepo.GetAllOrderRecievedAsync();
            var allSaleItems = await _saleItemRepo._GetAllSaleItemsArray();
            if(output != null)
            foreach (var item in output)
            {
                foreach (var i in item.SaleItemOrders)
                {
                    foreach (var si in allSaleItems)
                    {
                        if (i.SaleItemID == si.SaleItemID)
                        {
                            i.SaleItems = si;
                        }
                    }
                }
            }

            return Ok(output);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> add(OrderRecievedViewModel ovm)
        {
            var order = new OrderRecieved();
            order.SupplierID = ovm.SupplierID;
            order.Date = timeStamp();
            _orderRecievedRepo.Add(order);
            await _orderRecievedRepo.SaveChangesAsync();

            //get all SaleItems:
            var allSaleItems = await _saleItemRepo._GetAllSaleItemsArray();

            foreach (var item in ovm.SaleItems)
            {

                var i = new SaleItemOrder();
                i.OrderRecievedID = order.OrderRecievedID;
                //i.SaleItemID = item.SaleItemID;
                i.QuantityReceived = item.Quantity;

                foreach(var si in allSaleItems)
                {
                    if (si.SaleItemID == item.SaleItemID)
                    {
                        i.SaleItems = si;
                        si.QuantityOnHand += item.Quantity;
                        _saleItemRepo.Update(si);
                        i.SaleItemID = si.SaleItemID;
                    }
                }
                order.SaleItemOrders.Add(i);
                _saleItemOrderRepo.Add(i);
            }
            await _saleItemRepo.SaveChangesAsync();
            await _saleItemOrderRepo.SaveChangesAsync();
            await _orderRecievedRepo.SaveChangesAsync();

            return Ok();
        }

        static int timeStamp()
        {
            return (int)Convert.ToInt64(DateTimeOffset.Now.ToUnixTimeSeconds());
        }

    }
}
