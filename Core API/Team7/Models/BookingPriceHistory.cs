using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class BookingPriceHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingPriceHistoryID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public int? BookingTypeID { get; set; }

        public virtual BookingType BookingType { get; set; }
    }
}
