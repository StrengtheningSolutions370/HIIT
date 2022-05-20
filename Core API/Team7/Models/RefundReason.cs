using System.Collections.Generic;

namespace Team7.Models
{
    public class RefundReason
    {
        public RefundReason()
        {
            this.Refund = new HashSet<Refund>();
        }

        public int RefundReasonID { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Refund> Refund { get; set; }
    }
}