using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

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
