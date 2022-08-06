using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class MemberStatus
    {
        public MemberStatus()
        {
            this.Member = new HashSet<Member>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MemberStatusID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public virtual ICollection<Member> Member { get; set; }
    }
}