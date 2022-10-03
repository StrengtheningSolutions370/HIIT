using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Refund
    {

        public Refund()
        {
            this.complete = false;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RefundID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public string Notes { get; set; }
        [Required]
        public decimal Total { get; set; }

        public bool? complete { get; set; }

        public virtual Payment Payment { get; set; }
        public virtual RefundReason RefundReason { get; set; }

    }
}