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
        public int UserID { get; set; }
        public int EmployeeID { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public byte[] Photo { get; set; }
        public string IDNumber { get; set; }
        public int QualificationID { get; set; }
        public int EmployeeContractID { get; set; }
        public int EmployeeTypeID { get; set; }

        public virtual EmployeeContract EmployeeContract { get; set; }
        public virtual EmployeeType EmployeeType { get; set; }
        public virtual Qualification Qualification { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Lesson> Lesson { get; set; }
    }
}
