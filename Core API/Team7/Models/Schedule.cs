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
        public int CapacityBooked { get; set; }
        public int VenueID { get; set; }
        public int BookingTypeID { get; set; }
        public int LessonPlanID { get; set; }
        public int DateSessionID { get; set; }

        public virtual Venue Venue { get; set; }
        public virtual BookingType BookingType { get; set; }
        public virtual ICollection<BookingAttendance> BookingAttendance { get; set; }
        public virtual DateSession DateSession { get; set; }
        public virtual LessonPlan LessonPlan { get; set; }


    }
}
