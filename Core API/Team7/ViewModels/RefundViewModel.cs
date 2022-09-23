using Team7.Models;

namespace Team7.ViewModels
{
    public class RefundViewModel
    {
        public int RefundID { get; set; }

        public string? Notes { get; set; }

        public int RefundAmount { get; set; }

        public int PaymentID { get; set; }

        public int RefundResonID { get; set; }

    }
}
