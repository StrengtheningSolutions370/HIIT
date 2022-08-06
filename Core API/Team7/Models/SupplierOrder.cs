using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SupplierOrder
    {
        public SupplierOrder()
        {
            this.SupplierOrderLine = new HashSet<SupplierOrderLine>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SupplierOrderID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public int? OrderStatusID { get; set; }
        [Required]
        public int? SupplierID { get; set; }
        [Required]
        public virtual OrderStatus OrderStatus { get; set; }
        public virtual Supplier Supplier { get; set; }
        public virtual ICollection<SupplierOrderLine> SupplierOrderLine { get; set; }
    }
}