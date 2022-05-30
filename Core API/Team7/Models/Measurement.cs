using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Measurement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MeasurementID { get; set; }
        public int? MemberID { get; set; }
        public Nullable<double> MuscleMass { get; set; }
        public Nullable<double> BodyFate { get; set; }
        public Nullable<double> Waist { get; set; }
        public Nullable<double> Height { get; set; }
        public Nullable<double> Weight { get; set; }
        public System.DateTime Date { get; set; }

        public virtual Member Member { get; set; }
    }
}