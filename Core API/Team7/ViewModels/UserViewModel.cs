using System.ComponentModel.DataAnnotations;

namespace Team7.ViewModels
{
    public class UserViewModel
    {
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        public string Password { get; set; }

        public string role { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string phoneNumber { get; set; }

        public string TitleId { get; set; }

        public string newPassword { get; set; }

        public string OTP { get; set; }

    }
}
