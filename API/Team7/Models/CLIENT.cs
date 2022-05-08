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
    
    public partial class CLIENT
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CLIENT()
        {
            this.BOOKINGs = new HashSet<BOOKING>();
            this.MEMBERs = new HashSet<MEMBER>();
            this.SALEs = new HashSet<SALE>();
            this.SALE_LINE = new HashSet<SALE_LINE>();
        }
    
        public int USERS_ID { get; set; }
        public int CLIENT_ID { get; set; }
        public string CLIENT_NAME { get; set; }
        public string CLIENT_SURNAME { get; set; }
        public byte[] CLIENT_PHOTO { get; set; }
        public bool CLIENT_INDEMNITY { get; set; }
        public string QR_Code { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BOOKING> BOOKINGs { get; set; }
        public virtual USER USER { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MEMBER> MEMBERs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SALE> SALEs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SALE_LINE> SALE_LINE { get; set; }
    }
}