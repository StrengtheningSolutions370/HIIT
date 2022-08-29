using Team7.Models;

namespace Team7.ViewModels
{
    public class WriteOffLineViewModel
    {
        public WriteOff WriteOff { get; set; }
        public int Quantity { get; set; }
        public int WriteOffReasons { get; set; } 
        public SaleItem[] SaleItems { get; set; }
    }
}
