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
        public System.DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public int BookingTypeID { get; set; }

        public virtual BookingType BookingType { get; set; }
    }
}
