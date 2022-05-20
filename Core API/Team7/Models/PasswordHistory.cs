using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class PasswordHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PasswordID { get; set; }
        public System.DateTime Date { get; set; }
        public string Hashed { get; set; }
        public int UserID { get; set; }

        public virtual User User { get; set; }
    }
}