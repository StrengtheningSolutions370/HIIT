using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class StockTakeLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StockTakeLineID { get; set; }
        [Required]
        public int Difference { get; set; }
        [Required]
        public int? StockTakeID { get; set; }
        [Required]
        public int? SaleItemID { get; set; }

        public virtual StockTake StockTake { get; set; }

        public virtual SaleItem SaleItem { get; set; }
    }
}