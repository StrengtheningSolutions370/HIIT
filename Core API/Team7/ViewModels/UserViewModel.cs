using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.ViewModels
{
    public class UserViewModel
    {
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        public string Password { get; set; }


    }
}
