//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Team7.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class REFUND
    {
        public int REFUND_ID { get; set; }
        public System.DateTime REFUND_DATE { get; set; }
        public string REFUND_NOTES { get; set; }
        public decimal REFUND_TOTAL_AMOUNT { get; set; }
        public int RECEIPT_ID { get; set; }
        public int REFUND_REASON_ID { get; set; }
    
        public virtual RECEIPT RECEIPT { get; set; }
        public virtual REFUND_REASON REFUND_REASON { get; set; }
    }
}