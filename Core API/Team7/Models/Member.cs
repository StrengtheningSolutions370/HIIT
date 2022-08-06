using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Member
    {
        public Member()
        {
            this.Measurement = new HashSet<Measurement>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MemberID { get; set; }
        [Required]
        public int ClientID { get; set; }
        [Required]
        public int? MemberStatusID { get; set; }
        [Required]

        public virtual Client Client { get; set; }
        public virtual ICollection<Measurement> Measurement { get; set; }
        public virtual MemberStatus MemberStatus { get; set; }
    }
}
