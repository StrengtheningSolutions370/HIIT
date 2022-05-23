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
        [Required]
        public string Email { get; set; }
        [Required]
        public string Cell { get; set; }
        [Required]
        public int? UserRoleID { get; set; }
        [Required]
        public int? TitleID { get; set; }

        public virtual ICollection<Client> Client { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<PasswordHistory> PasswordHistory { get; set; }
        public virtual Title Title { get; set; }
        public virtual UserRole UserRole { get; set; }
    }
}