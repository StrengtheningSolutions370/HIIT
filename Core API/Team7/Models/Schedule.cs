using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Schedule
    {
        public int ScheduleID { get; set; }
        public int CapacityBooked { get; set; }
        public int VenueID { get; set; }
        public virtual Venue Venue { get; set; }
        public int BookingTypeID { get; set; }
        public int LessonPlanID { get; set; }
        public int DateSessionID { get; set; }        
        


    }
}
