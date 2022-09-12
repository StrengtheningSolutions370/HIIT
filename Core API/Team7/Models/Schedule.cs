using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Schedule
    {
        public Schedule()
        {
            this.BookingPriceHistory = new HashSet<BookingPriceHistory>();
            this.BookingAttendance = new HashSet<BookingAttendance>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ScheduleID { get; set; }
        public int? VenueID { get; set; }
        public int? BookingTypeID { get; set; }
        public int? LessonID { get; set; }
        public int? EmployeeID { get; set; }

        [Required]
        public System.DateTime StartDateTime { get; set; }
        
        [Required]
        public System.DateTime EndDateTime { get; set; }
        public virtual Venue Venue { get; set; }
        public virtual BookingType BookingType { get; set; }
        public virtual ICollection<BookingAttendance> BookingAttendance { get; set; }
        public virtual ICollection<BookingPriceHistory> BookingPriceHistory { get; set; }
        public virtual Lesson Lesson { get; set; }
        public virtual Employee Employee { get; set; }


    }
}
