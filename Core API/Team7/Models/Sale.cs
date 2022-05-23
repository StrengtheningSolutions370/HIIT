using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Sale
    {
        public Sale()
        {
            this.SaleLine = new HashSet<SaleLine>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SaleID { get; set; }
        public System.DateTime Date { get; set; }
        public int ClientID { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<SaleLine> SaleLine { get; set; }
        
    }
}