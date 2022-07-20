using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team7.Models
{
    public class Employee
    {
        public Employee()
        {
            this.Lesson = new HashSet<Lesson>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployeeID { get; set; }

        public string Photo { get; set; }

        [Required]
        public string Contract { get; set; }

        [Required]
        public string IDNumber { get; set; }

        [Required]
        public string UserID { get; set; }

        //public virtual EmployeeContract EmployeeContract { get; set; }
        public virtual EmployeeType EmployeeType { get; set; }
        public virtual Qualification Qualification { get; set; }
        public virtual ICollection<Lesson> Lesson { get; set; }
        public virtual ICollection<Schedule> Schedule { get; set; }
        public virtual AppUser AppUser { get; set; }
    }
}
