using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class PaymentType
    {
        public PaymentType()
        {
            this.Receipt = new HashSet<Receipt>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentTypeID { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Receipt> Receipt { get; set; }
    }
}