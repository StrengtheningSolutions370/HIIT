using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class UserRole
    {
        public UserRole()
        {
            this.User = new HashSet<User>();
            this.Permission = new HashSet<Permission>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserRoleID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<User> User { get; set; }
        public virtual ICollection<Permission> Permission { get; set; }
    }
}