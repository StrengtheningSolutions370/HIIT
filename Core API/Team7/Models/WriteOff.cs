﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class WriteOff
    {
        public WriteOff()
        {
            this.WriteOffLine = new HashSet<WriteOffLine>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WriteOffID { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        public int EmployeeID { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual ICollection<WriteOffLine> WriteOffLine { get; set; }
    }
}