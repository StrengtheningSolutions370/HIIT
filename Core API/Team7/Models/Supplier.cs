using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Supplier
    {
        public Supplier()
        {
            this.SupplierOrder = new HashSet<SupplierOrder>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SupplierID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Cell { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public virtual ICollection<SupplierOrder> SupplierOrder { get; set; }
    }
}