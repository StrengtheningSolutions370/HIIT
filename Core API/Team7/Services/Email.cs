using System.Net;
using System.Net.Mail;

using System;
using System.Threading;

namespace Team7.Services
{
    public class Email
    {

        private const string USERNAME = "shannonleighnoel@zohomail.com";
        private const string PASSWORD = "Shannon123*";
        private const int PORT = 587;

        public string recpt;
        public string subject;
        public string body;

        public Email(string recpt, string subject, string body)
        {
            this.recpt = recpt;
            this.subject = subject;
            this.body = body;
        }
        
        public void sendEmail()
        {
            MailMessage email = new MailMessage();
            email.From = new System.Net.Mail.MailAddress(USERNAME);
            SmtpClient smtp = new SmtpClient();
            smtp.Port = PORT;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential(email.From.ToString(), PASSWORD);
            smtp.Host = "smtp.zoho.com";
            email.To.Add(new MailAddress(recpt));
            email.IsBodyHtml = true;
            email.Subject = subject;
            email.Body = body;
            smtp.Send(email);
        }

    }
}
