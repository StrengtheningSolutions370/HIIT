using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class LessonPlan
    {
        public LessonPlan()
        {
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LessonPlanID { get; set; }

        public virtual Exercise Exercise { get; set; }
        public virtual Lesson Lesson { get; set; }

        public int LessonID { get; set; }
    }
}