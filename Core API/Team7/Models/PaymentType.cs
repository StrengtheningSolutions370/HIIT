using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class PaymentType
    {
        public PaymentType()
        {
            this.Payment = new HashSet<Payment>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentTypeID { get; set; }
        [Required]
        public string Name { get; set; }

        public virtual ICollection<Payment> Payment { get; set; }
    }
}