//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Team7.Models;
//using Team7.Models.Repository;
//using Team7.Services;
//using Team7.ViewModels;

//namespace Team7.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ClientController : ControllerBase
//    {
//        private readonly IClientRepo ClientRepo;
//        private readonly ITitleRepo TitleRepo;
//        private readonly UserManager<AppUser> _userManager;

//        public ClientController(IClientRepo clientRepo, UserManager<AppUser> userManager, ITitleRepo TitleRepo)
//        {
//            this.ClientRepo = clientRepo;
//            this.TitleRepo = TitleRepo;
//            _userManager = userManager;
//        }

//        // PUT api/clients/update/5
//        [HttpPost]
//        [Route("update")]
//        public async Task<IActionResult> PutClient(int id, [FromBody] Client client)
//        {
//            string unix = timeStamp(); //to stamp file creation

//            //1. convert employee back to an object and pull values 
//            string c = formCollection.Keys.FirstOrDefault();
//            string decode = HttpUtility.UrlDecode(c);

//            var client = JObject.Parse(decode);
//            string Name = client["Name"].ToString();
//            string Surname = client["Surname"].ToString();
//            string Phone = client["Phone"].ToString();
//            string Email = client["Email"].ToString();
//            string TitleId = client["TitleID"].ToString();
//            string AspId = client["ClientID"].ToString();

//            var editClient = await this.ClientRepo.GetClientIdAsync(AspId);
//            var editAspUser = await _userManager.FindByIdAsync(AspId);

//            editClient.UserID = editAspUser.Id;

//            editAspUser.FirstName = Name;
//            editAspUser.LastName = Surname;
//            editAspUser.PhoneNumber = Phone;
//            editAspUser.Email = Email;
//            editAspUser.Title = await TitleRepo._GetTitleIdAsync(Convert.ToInt32(TitleId));



//        }

//        private string timeStamp()
//        {
//            return DateTimeOffset.Now.ToUnixTimeSeconds().ToString();
//        }

//    }
//}
