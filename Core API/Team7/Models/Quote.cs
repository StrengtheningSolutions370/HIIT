namespace Team7.Models
{
    public class Quote
    {
        public string clientMail { get; set; }

        public string employeeMail { get; set; }

        public string saleQuoteName { get; set; }

        public int saleQuoteID { get; set; }


        public string optDescription => string.Empty;
    }
}
