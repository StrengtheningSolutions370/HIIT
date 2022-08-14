using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeasurementController : ControllerBase
    {

        private readonly IMeasurementRepo _measurementRepo;
        private readonly UserManager<AppUser> _userManager;
        private readonly IClientRepo _clientRepo;


        public MeasurementController(UserManager<AppUser> userManager, IMeasurementRepo measurementRepo, IClientRepo clientRepo)
        {
            _measurementRepo = measurementRepo;
            _userManager = userManager;
            _clientRepo = clientRepo;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> add(MeasurementViewModel m)
        {

            var email = m.email;
            var usr = await _userManager.FindByEmailAsync(email);
            var AspId = usr.Id;
            Measurement measurement = m.measurement;
            var client = await _clientRepo.GetClientIdAsync(AspId);

            //add to measurement table:
            measurement.ClientID = client.ClientID;
            _measurementRepo.Add(measurement);
            await _measurementRepo.SaveChangesAsync();

            //add to client table as virtual:
            client.Measurement.Add(measurement);
            _clientRepo.Update(client);
            await _clientRepo.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("getmeasurements")]
        public async Task<IActionResult> getAll(string email)
        {
            var usr = await _userManager.FindByEmailAsync(email);
            var client = await _clientRepo.GetClientIdAsync(usr.Id);
            if (client == null)
                return NotFound();
            return Ok(client);
        }

    }
}
