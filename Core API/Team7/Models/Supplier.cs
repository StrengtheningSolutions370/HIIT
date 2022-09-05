using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Supplier
    {
        public Supplier()
        {
            this.Orders = new HashSet<OrderRecieved>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SupplierID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Cell { get; set; }
        [Required]
        public string Address { get; set; }

        public virtual ICollection<OrderRecieved> Orders { get; set; }
    }
}