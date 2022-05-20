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
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Cell { get; set; }
        public string Address { get; set; }

        public virtual ICollection<SupplierOrder> SupplierOrder { get; set; }
    }
}