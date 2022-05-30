using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Session
    {
        public Session()
        {
            this.DateSession = new HashSet<DateSession>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SessionID { get; set; }
        [Required]
        public System.DateTime Start { get; set; }
        [Required]
        public System.DateTime End { get; set; }
        public virtual ICollection<DateSession> DateSession { get; set; }
    }
}