using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Exercise
    {
        public Exercise()
        {
            this.LessonPlan = new HashSet<LessonPlan>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ExerciseID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ExerciseCategoryID { get; set; }

        public virtual ExerciseCategory ExerciseCategory { get; set; }
        public virtual ICollection<LessonPlan> LessonPlan { get; set; }
    }
}