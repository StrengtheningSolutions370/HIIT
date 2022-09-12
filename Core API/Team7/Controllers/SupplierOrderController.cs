using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierOrderController : ControllerBase
    {

        private readonly ISupplierRepo _supplierRepo;

        public SupplierOrderController(ISupplierRepo supplierRepo)
        {
            _supplierRepo = supplierRepo;
        }



    }
}
