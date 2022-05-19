using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SupplierOrderLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SupplierOrderLineID { get; set; }
        public int SupplierOrderID { get; set; }
        public int Quantity { get; set; }
        public int InventoryItemID { get; set; }

        public virtual InventoryItem InventoryItem { get; set; }
        public virtual SupplierOrder SupplierOrder { get; set; }
    }
}