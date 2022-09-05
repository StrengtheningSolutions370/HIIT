using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading;
using Team7.Models;

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

        public Email()
        {
        }

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

        //multi threaded emailing list: (does not work with zoho) :/
        public void emailList(List<AppUser> list, string subject, string body)
        {
            List<Thread> threads = new List<Thread>();

            for (int i = 0; i < list.Count; i++)
            {
                AppUser user = list[i];
                this.body = "<h1>Hey, " + user.FirstName + " " + user.LastName + "</h1>";
                this.body += body;
                this.subject = subject;
                this.recpt = user.Email;
                var email = new Email(user.Email, "Subject", "Hey, " + user.FirstName + " " + user.LastName);
                var t = new Thread(new ThreadStart(email.sendEmail));
                t.Start();
            }


            return;
            for (int i = 0; i < list.Count; i++)
            {
                AppUser user = list[i];
                this.body = "<h1>Hey, " + user.FirstName + " " + user.LastName + "</h1>";
                this.body += body;
                this.subject = subject;
                this.recpt = user.Email;
                this.sendEmail();
            }   


        }

    }
}
