using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Refund
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RefundID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public string Notes { get; set; }
        [Required]
        public decimal Total { get; set; }
        [Required]
        public int? ReceiptID { get; set; }
        [Required]
        public int? RefundReasonID { get; set; }

        public virtual Receipt Receipt { get; set; }
        public virtual RefundReason RefundReason { get; set; }
    }
}