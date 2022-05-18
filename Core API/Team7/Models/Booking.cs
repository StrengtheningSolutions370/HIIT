using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Booking
    {
        public int BookingID { get; set; }
        public DateTime Date { get; set; }
        
        public int ClientID { get; set; }

        public virtual Client Client { get; set; }
    }
}
