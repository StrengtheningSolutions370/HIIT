using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class OrderRecieved
    {

        public OrderRecieved()
        {
            this.SaleItemOrders = new HashSet<SaleItemOrder>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderRecievedID { get; set; }

        public int SupplierID { get; set; }

        virtual public Supplier Supplier { get; set; }

        public int Date { get; set; }

        public virtual ICollection<SaleItemOrder> SaleItemOrders { get; set; }

    }
}
