using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Booking
    {
        public Booking()
        {
            this.Payment = new HashSet<Payment>();
            this.BookingAttendance = new HashSet<BookingAttendance>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingID { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public int? ClientID { get; set; }

        public virtual Client Client { get; set; }

        public virtual ICollection<Payment> Payment { get; set; }
        public virtual ICollection<BookingAttendance> BookingAttendance { get; set; }
    }
}
