using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class WriteOffLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WriteOffLineID { get; set; }
        //public int? InventoryItemID { get; set; }
        //[Required]
        public int WriteOffID { get; set; }
        [Required]
        public int Quantity { get; set; }
        public int WriteOffReasonID { get; set; }
        public int SaleItemID { get; set; }

        //public virtual InventoryItem InventoryItem { get; set; }
        public virtual SaleItem SaleItem { get; set; }
        public virtual WriteOff WriteOff { get; set; }
        public virtual WriteOffReason WriteOffReason { get; set; }
    }
}