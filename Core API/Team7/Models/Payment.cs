using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Payment
    {
        public Payment()
        {
            this.Refund = new HashSet<Refund>();
        }

        //[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentID { get; set; }

        [Required]
        public int? PaymentTypeID { get; set; }

        //[Required]
        public int? SaleID { get; set; }

        //[Required]
        public int? BookingID { get; set; }

        public virtual PaymentType PaymentType { get; set; }
        public virtual Sale Sale { get; set; }
        public virtual Booking Booking { get; set; }
        public virtual ICollection<Refund> Refund { get; set; }
    }
}
