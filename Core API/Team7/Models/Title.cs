using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Title
    {
        public Title()
        {
            this.User = new HashSet<User>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TitleID { get; set; }
        [Required]
        public string Description { get; set; }

        public virtual ICollection<User> User { get; set; }
    }
}