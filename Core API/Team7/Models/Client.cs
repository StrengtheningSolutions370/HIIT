using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Client
    {
        public Client()
        {
            this.Booking = new HashSet<Booking>();
            this.Measurement = new HashSet<Measurement>();
            //this.Sale = new HashSet<Sale>();
            //this.SaleLine = new HashSet<SaleLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClientID { get; set; }
        [Required]
        public string UserID { get; set; }
        public string Photo { get; set; }
        public string Idemnity { get; set; }
        public string QrCode { get; set; }
        public virtual AppUser AppUser { get; set; }
        public virtual ICollection<Booking> Booking { get; set; }
        public virtual ICollection<Measurement> Measurement { get; set; }

        //public virtual ICollection<Sale> Sale { get; set; }

        //public virtual ICollection<SaleLine> SaleLine { get; set; }
    }
}
