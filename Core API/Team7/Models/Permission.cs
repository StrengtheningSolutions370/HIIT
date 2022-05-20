using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Permission
    {
        public Permission()
        {
            this.UserRole = new HashSet<UserRole>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int PermissionID { get; set; }
        public string Description { get; set; }

        public virtual ICollection<UserRole> UserRole { get; set; }
    }
}