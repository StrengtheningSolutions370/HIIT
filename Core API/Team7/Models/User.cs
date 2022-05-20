using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class User
    {
        public User()
        {
            this.Client = new HashSet<Client>();
            this.Employee = new HashSet<Employee>();
            this.PasswordHistory = new HashSet<PasswordHistory>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserID { get; set; }
        public string Email { get; set; }
        public string Cell { get; set; }
        public int UserRoleID { get; set; }
        public int TitleID { get; set; }

        public virtual ICollection<Client> Client { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<PasswordHistory> PasswordHistory { get; set; }
        public virtual Title Title { get; set; }
        public virtual UserRole UserRole { get; set; }
    }
}