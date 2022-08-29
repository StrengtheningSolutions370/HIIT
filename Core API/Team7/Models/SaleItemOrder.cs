using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class SaleItemOrder
    {
        public SaleItemOrder()
        {
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SaleItemOrderID { get; set; }

        public int SaleItemID { get; set; }
        
        public int OrderRecievedID { get; set; }

        public int QuantityReceived { get; set; }

        public virtual SaleItem SaleItems { get; set; }

        public virtual OrderRecieved OrdersRecieved { get; set; }

    }
}
