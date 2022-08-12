using Team7.Models;

namespace Team7.ViewModels
{
    public class PaymentViewModel
    {
        //Payment type name -> payment type ID (we should pass through the ID)
        //UserID -> when sale
        //ClientID -> when booking
        //Array of Sale Items (sale Item ID, quantity change)
        //Array of schedule items (ScheduleID)

        //public Payment Payment { get; set; }

        public int paymentTypeID { get; set; }

        public string? userID { get; set; } 

        public int? clientID { get; set; }   

        public BookingAttendance[] Bookings { get; set; }

        public SaleLine[] Sales { get; set; }
    }
}
