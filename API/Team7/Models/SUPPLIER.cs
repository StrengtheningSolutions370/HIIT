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
    
    public partial class SUPPLIER
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SUPPLIER()
        {
            this.SUPPLIER_ORDER = new HashSet<SUPPLIER_ORDER>();
        }
    
        public int SUPPLIER_ID { get; set; }
        public string SUPPLIER_NAME { get; set; }
        public string SUPPLIER_SURNAME { get; set; }
        public string SUPPLIER_EMAIL { get; set; }
        public string SUPPLIER_CELL { get; set; }
        public string SUPPLIER_ADDRESS { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SUPPLIER_ORDER> SUPPLIER_ORDER { get; set; }
    }
}