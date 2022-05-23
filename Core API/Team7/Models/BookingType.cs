using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team7.Models
{
    public class BookingType
    {
        public BookingType()
        {
            this.BookingPriceHistory = new HashSet<BookingPriceHistory>();
            this.Schedule = new HashSet<Schedule>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingTypeID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<BookingPriceHistory> BookingPriceHistory { get; set; }
        public virtual ICollection<Schedule> Schedule { get; set; }
    }
}