using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class OrderStatus
    {
        public OrderStatus()
        {
            this.SupplierOrder = new HashSet<SupplierOrder>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderStatusID { get; set; }
        [Required]
        public string Description { get; set; }
        public virtual ICollection<SupplierOrder> SupplierOrder { get; set; }
    }
}