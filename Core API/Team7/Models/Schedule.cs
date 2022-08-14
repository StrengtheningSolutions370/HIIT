using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Schedule
    {
        public Schedule()
        {
            this.BookingAttendance = new HashSet<BookingAttendance>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ScheduleID { get; set; }
        [Required]
        //public int CapacityBooked { get; set; }
        //[Required]
        public int? VenueID { get; set; }
        //[Required]
        public int? BookingTypeID { get; set; }
        public int? LessonID { get; set; }
        //[Required]
        public int? DateSessionID { get; set; }
        //[Required]
        public int? EmployeeID { get; set; }
        //[Required]
        public virtual Venue Venue { get; set; }
        public virtual BookingType BookingType { get; set; }
        public virtual ICollection<BookingAttendance> BookingAttendance { get; set; }
        public virtual DateSession DateSession { get; set; }
        public virtual Lesson Lesson { get; set; }
        public virtual Employee Employee { get; set; }


    }
}
