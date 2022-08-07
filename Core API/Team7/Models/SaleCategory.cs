using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SaleCategory
    {
        
        public SaleCategory()
        {
            this.SaleItem = new HashSet<SaleItem>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SaleCategoryID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public virtual ICollection<SaleItem> SaleItem { get; set; }

    }
}