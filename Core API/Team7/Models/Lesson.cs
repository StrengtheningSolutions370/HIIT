using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Lesson
    {
        public Lesson()
        {
            this.LessonPlan = new HashSet<LessonPlan>();
        }


        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LessonID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int? EmployeeID { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual ICollection<LessonPlan> LessonPlan { get; set; }
    }
}