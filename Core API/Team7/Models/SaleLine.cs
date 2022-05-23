using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SaleLine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SaleLineID { get; set; }
        public int Quantity { get; set; }
        public int ClientID { get; set; }
        public int SaleID { get; set; }
        public int SaleItemID { get; set; }
        public int ReceiptID { get; set; }

        public virtual Client Client { get; set; }
        public virtual Receipt Receipt { get; set; }
        public virtual Sale Sale { get; set; }
        public virtual SaleItem SaleItem { get; set; }
    }
}