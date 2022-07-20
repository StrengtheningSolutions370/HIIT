using Microsoft.AspNetCore.Identity;
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
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        public string Photo { get; set; }
        [Required]
        public string IDNumber { get; set; }
        [Required]
        public int? QualificationID { get; set; }
        [Required]
        public int? EmployeeContractID { get; set; }
        [Required]
        public int? EmployeeTypeID { get; set; }
        [Required]
        public virtual EmployeeContract EmployeeContract { get; set; }
        public virtual EmployeeType EmployeeType { get; set; }
        public virtual Qualification Qualification { get; set; }
        public virtual ICollection<Lesson> Lesson { get; set; }
        public virtual ICollection<Schedule> Schedule { get; set; }
    }
}
