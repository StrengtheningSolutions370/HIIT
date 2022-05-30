using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class InventoryItem
    {
        public InventoryItem()
        {
            this.StockTakeLine = new HashSet<StockTakeLine>();
            this.SupplierOrderLine = new HashSet<SupplierOrderLine>();
            this.WriteOffLine = new HashSet<WriteOffLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InventoryItemID { get; set; }
        [Required]
        public int? SaleItemID { get; set; }
        [Required]
        public decimal CostPrice { get; set; }
        [Required]
        public int Quantity { get; set; }

        public virtual SaleItem SaleItem { get; set; }
        public virtual ICollection<StockTakeLine> StockTakeLine { get; set; }
        public virtual ICollection<SupplierOrderLine> SupplierOrderLine { get; set; }
        public virtual ICollection<WriteOffLine> WriteOffLine { get; set; }
    }
}