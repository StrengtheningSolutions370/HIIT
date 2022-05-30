using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Qualification
    {
        public Qualification()
        {
            this.Employee = new HashSet<Employee>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int QualificationID { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int? QualificationTypeID { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
        public virtual QualificationType QualificationType { get; set; }
    }
}