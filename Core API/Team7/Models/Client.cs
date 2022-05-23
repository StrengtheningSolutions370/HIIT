using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Client
    {
        public Client()
        {
            this.Booking = new HashSet<Booking>();
            this.Member = new HashSet<Member>();
            this.Sale = new HashSet<Sale>();
            this.SaleLine = new HashSet<SaleLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClientID { get; set; }
        public int UserID { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public bool Idemnity { get; set; }
        public string QrCode { get; set; }
        
        public virtual ICollection<Booking> Booking { get; set; }
        
        public virtual User User { get; set; }
        
        public virtual Member Member { get; set; }
        
        public virtual ICollection<Sale> Sale { get; set; }
        
        public virtual ICollection<SaleLine> SaleLine { get; set; }
    }
}
