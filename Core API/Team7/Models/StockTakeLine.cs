using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class StockTakeLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StockTakeLineID { get; set; }
        public int? InventoryItemID { get; set; }
        public int? SaleItemID { get; set; }
        public int? StockTakeID { get; set; }

        public int Difference { get; set; }

        public virtual InventoryItem InventoryItem { get; set; }
        public virtual SaleItem SaleItem { get; set; }
        public virtual StockTake StockTake { get; set; }
    }
}