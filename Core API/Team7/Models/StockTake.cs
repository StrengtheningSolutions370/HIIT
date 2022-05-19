using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class StockTake
    {
        public StockTake()
        {
            this.StockTakeLine = new HashSet<StockTakeLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StockTakeID { get; set; }
        public System.DateTime Date { get; set; }
        public string Notes { get; set; }

        public virtual ICollection<StockTakeLine> StockTakeLine { get; set; }
    }
}