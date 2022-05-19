using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Schedule
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ScheduleID { get; set; }
        public int CapacityBooked { get; set; }
        public int VenueID { get; set; }
        public virtual Venue Venue { get; set; }
        public int BookingTypeID { get; set; }
        public virtual BookingType BookingType { get; set; }
        public int LessonPlanID { get; set; }
        public int DateSessionID { get; set; }        
        //public virtual 


    }
}
