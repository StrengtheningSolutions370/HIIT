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
    
    public partial class MEASUREMENT
    {
        public int MEMBER_ID { get; set; }
        public int MEASUREMENT_ID { get; set; }
        public Nullable<double> MUSCLE_MASS_PERCENTAGE { get; set; }
        public Nullable<double> BODY_FAT_PERCENTAGE { get; set; }
        public Nullable<double> WAIST_CIRCUMFERENCE { get; set; }
        public Nullable<double> HEIGHT { get; set; }
        public Nullable<double> WEIGHT { get; set; }
        public System.DateTime MEASUREMENT_DATE { get; set; }
    
        public virtual MEMBER MEMBER { get; set; }
    }
}