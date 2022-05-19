﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class Receipt
    {
        public Receipt()
        {
            this.BookingAttendance = new HashSet<BookingAttendance>();
            this.Refund = new HashSet<Refund>();
            this.SaleLine = new HashSet<SaleLine>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ReceiptID { get; set; }
        public System.DateTime DateTime { get; set; }
        public double TotalVAT { get; set; }
        public double Total { get; set; }
        public int PaymentTypeID { get; set; }
        public virtual ICollection<BookingAttendance> BookingAttendance { get; set; }

        public virtual ICollection<Refund> Refund { get; set; }

        public virtual ICollection<SaleLine> SaleLine { get; set; }
    }
}