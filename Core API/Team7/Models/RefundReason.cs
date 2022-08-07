using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class RefundReason
    {
        public RefundReason()
        {
            this.Refund = new HashSet<Refund>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RefundReasonID { get; set; }
        [Required]
        public string Description { get; set; }
        public virtual ICollection<Refund> Refund { get; set; }
    }
}