namespace Team7.ViewModels
{
    public class OrderRecievedViewModel
    {
        public int SupplierID { get; set; }

        public OrderRecievedItemViewModel[] SaleItems { get; set; }

    }
}