using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Sale
    {
        public Sale()
        {
            this.SaleLine = new HashSet<SaleLine>();
            this.Payment = new HashSet<Payment>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SaleID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public string UserID { get; set; }

        public virtual AppUser AppUser { get; set; }
        public virtual ICollection<SaleLine> SaleLine { get; set; }
        public virtual ICollection<Payment> Payment { get; set; }
    }
}