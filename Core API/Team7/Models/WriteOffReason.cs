using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class WriteOffReason
    {
        public WriteOffReason()
        {
            this.WriteOffLine = new HashSet<WriteOffLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WriteOffReasonID { get; set; }
        public string Description { get; set; }

        public virtual ICollection<WriteOffLine> WriteOffLine { get; set; }

    }
}