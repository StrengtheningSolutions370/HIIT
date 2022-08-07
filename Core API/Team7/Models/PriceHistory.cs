using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class PriceHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int PriceHistoryID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public decimal CostAmount { get; set; }
        [Required]
        public decimal SaleAmount { get; set; }
        [Required]
        public int? SaleItemID { get; set; }
        [Required]
        public virtual SaleItem SaleItem { get; set; }

    }
}