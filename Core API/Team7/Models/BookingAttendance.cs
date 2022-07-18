using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class BookingAttendance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingAttendanceID { get; set; }
        [Required]
        public int? BookingID { get; set; }
        public int? ScheduleID { get; set; }
        [Required]
        public bool Attended { get; set; }
        [Required]
        public int? ReceiptID { get; set; }

        public virtual Booking Booking { get; set; }
        public virtual Receipt Receipt { get; set; }
        public virtual Schedule Schedule { get; set; }
    }
}
