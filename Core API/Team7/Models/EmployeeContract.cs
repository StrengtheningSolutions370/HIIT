using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class EmployeeContract
    {
        public EmployeeContract()
        {
            this.Employee = new HashSet<Employee>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int EmployeeContractID { get; set; }
        public byte[] File { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
    }
}