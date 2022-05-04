using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace SSTeam7API.Models
{
    [Table("VENUE")]
    public partial class Venue
    {
        public Venue()
        {
           // OrderLine = new HashSet<OrderLine>();
        }

        [Key]
        [Column("VENUE_ID")]
        public int Venue_Id { get; set; }

        [Column("VENUE_NAME", TypeName = "string")]
        public string Venue_Name { get; set; }

        [Column("VENUE_ADDRESS", TypeName = "string")]
        public string Venue_Address { get; set; }

        [Column("VENUE_POSTAL_CODE", TypeName = "string")]
        public string Venue_Postal_Code { get; set; }

        [Column("VENUE_CAPACITY", TypeName = "int")]
        public int Venue_Capacity { get; set; }



        //[InverseProperty("Order")]
        //public virtual ICollection<OrderLine> OrderLine { get; set; }
    }
}
