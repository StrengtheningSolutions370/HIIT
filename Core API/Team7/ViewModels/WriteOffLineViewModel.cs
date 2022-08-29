using Team7.Models;

namespace Team7.ViewModels
{
    public class WriteOffLineViewModel
    {
        public WriteOff WriteOff { get; set; }
        public int Quantity { get; set; }
        public WriteOffReason WriteOffReasons { get; set; } 
        public SaleItem[] SaleItems { get; set; }
    }
}
