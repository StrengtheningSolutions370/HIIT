using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SaleItem
    {
        public SaleItem()
        {
            this.InventoryItem = new HashSet<InventoryItem>();
            this.PriceHistory = new HashSet<PriceHistory>();
            this.SaleLine = new HashSet<SaleLine>();
            this.StockTakeLine = new HashSet<StockTakeLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int SaleItemID { get; set; }
        public string Name { get; set; }
        public byte[] Photo { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool Quotable { get; set; }
        public int Quantity { get; set; }
        public int SaleCategoryID { get; set; }

        public virtual ICollection<InventoryItem> InventoryItem { get; set; }
        public virtual ICollection<PriceHistory> PriceHistory { get; set; }
        public virtual SaleCategory SaleCategory { get; set; }
        public virtual ICollection<SaleLine> SaleLine { get; set; }
        public virtual ICollection<StockTakeLine> StockTakeLine { get; set; }
    }
}