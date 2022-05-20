using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Venue
    {
        public Venue()
        {
            this.Schedules = new HashSet<Schedule>();
            //this.Schedules = 
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VenueID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public int Capacity { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }
    }
}
