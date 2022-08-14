using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class VAT
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VATID { get; set; }
        [Required]
        public decimal Percentage { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
    }
}
