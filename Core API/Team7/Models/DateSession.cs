using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class DateSession
    {
        public DateSession()
        {
            this.Schedule = new HashSet<Schedule>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DateSessionID { get; set; }
        [Required]

        public System.DateTime StartDateTime { get; set; }
        [Required]

        public System.DateTime EndDateTime { get; set; }

        public virtual ICollection<Schedule> Schedule { get; set; }
    }
}
