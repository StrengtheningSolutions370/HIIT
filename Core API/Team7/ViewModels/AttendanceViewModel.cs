using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Team7.Models;

namespace Team7.ViewModels
{
    public class AttendanceViewModel
    {
        public int? BookingAttendanceID { get; set; }
        public bool Attended { get; set; }
    }
}
