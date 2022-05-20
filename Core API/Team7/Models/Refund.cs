using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Refund
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RefundID { get; set; }
        public System.DateTime Date { get; set; }
        public string Notes { get; set; }
        public decimal Total { get; set; }
        public int ReceiptID { get; set; }
        public int RefundReasonID { get; set; }

        public virtual Receipt Receipt { get; set; }
        public virtual RefundReason RefundReason { get; set; }
    }
}