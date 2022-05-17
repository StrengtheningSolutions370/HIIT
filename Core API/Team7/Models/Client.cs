using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Client
    {
        public int UserID { get; set; }

        public int ClientID { get; set; }

        public string Name { get; set; }

        public string Photo { get; set; }

        public bool Idemnity { get; set; }

        public string QrCode { get; set; }
        
        public virtual ICollection<Booking> Bookings { get; set; }
        
        //public virtual User User { get; set; }
        
        //public virtual Member MEMBERs { get; set; }
        
        //public virtual ICollection<Sale> Sales { get; set; }
        
        //public virtual ICollection<SaleLine> SaleLines { get; set; }
    }
}
