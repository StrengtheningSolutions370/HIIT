using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class BookingAttendance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingAttendanceID { get; set; }
        //[Required]
        public int? BookingID { get; set; }
        [Required]
        public int? ScheduleID { get; set; }
        [Required]
        public bool Attended { get; set; }
        //public int? ReceiptID { get; set; }

        public virtual Booking Booking { get; set; }
        public virtual Schedule Schedule { get; set; }
    }
}
