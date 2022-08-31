using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class BookingPriceHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingPriceHistoryID { get; set; }

        public System.DateTime Date { get; set; }
        [Required]
        public decimal Amount { get; set; }
        public int? ScheduleID { get; set; }
        public virtual Schedule Schedule { get; set; }
    }
}
