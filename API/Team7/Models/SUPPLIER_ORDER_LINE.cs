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
    
    public partial class SUPPLIER_ORDER_LINE
    {
        public int SUPPLIER_ORDER_ID { get; set; }
        public int SUPPLIER_ORDER_LINE_ID { get; set; }
        public int SUPPLIER_ORDER_LINE_QUANTITY { get; set; }
        public int INVENTORY_ITEM_ID { get; set; }
    
        public virtual INVENTORY_ITEM INVENTORY_ITEM { get; set; }
        public virtual SUPPLIER_ORDER SUPPLIER_ORDER { get; set; }
    }
}