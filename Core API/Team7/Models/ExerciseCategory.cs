using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class ExerciseCategory
    {
        public ExerciseCategory()
        {
            this.Exercise = new HashSet<Exercise>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ExerciseCategoryID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }

        public virtual ICollection<Exercise> Exercise { get; set; }
    }
}