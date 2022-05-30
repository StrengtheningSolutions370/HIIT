using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

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
        public System.DateTime Date { get; set; }
        [Required]
        public int? SessionID { get; set; }

        public virtual Session Session { get; set; }
        public virtual ICollection<Schedule> Schedule { get; set; }
    }
}
