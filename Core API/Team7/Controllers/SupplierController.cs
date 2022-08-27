using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {

        private readonly ISupplierRepo _supplierRepo;

        public SupplierController(ISupplierRepo supplierRepo)
        {
            _supplierRepo = supplierRepo;
        }

        

    }
}
