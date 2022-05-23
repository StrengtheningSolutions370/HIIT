using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class WriteOff
    {
        public WriteOff()
        {
            this.WriteOffLine = new HashSet<WriteOffLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WriteOffID { get; set; }
        public System.DateTime Date { get; set; }

        public virtual ICollection<WriteOffLine> WriteOffLine { get; set; }
    }
}