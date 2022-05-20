using System.Collections.Generic;

namespace Team7.Models
{
    public class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            //this.Clients= new HashSet<Client>();
            //this.Employees = new HashSet<Employee>();
            //this.PasswordHistory = new HashSet<PasswordHistory>();
        }

        public int UserID { get; set; }
        public string Email { get; set; }
        public string Cellphone { get; set; }
        public int UserRoleID { get; set; }
        public int TITLE_ID { get; set; }
        //public int NOTIFICATION_TYPE_ID { get; set; }
        //public virtual ICollection<CLIENT> CLIENTs { get; set; }
        //public virtual ICollection<EMPLOYEE> EMPLOYEEs { get; set; }
        //public virtual NOTIFICATION_TYPE NOTIFICATION_TYPE { get; set; }
        //public virtual ICollection<PASSWORD_HISTORY> PASSWORD_HISTORY { get; set; }
        public virtual Title TITLE { get; set; }
        public virtual UserRole UserRole { get; set; }
    }
}