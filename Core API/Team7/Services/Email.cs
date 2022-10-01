using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading;
using Team7.Models;

namespace Team7.Services
{
    public class Email
    {

        private const string USERNAME = "besterstrengthconditioning@gmail.com";
        private const string PASSWORD = "cchhelqamtwnkhqu";
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
            smtp.Host = "smtp.gmail.com";
            email.To.Add(new MailAddress(recpt));
            email.IsBodyHtml = true;
            email.Subject = subject;
            body += "<br><hr><br><img height=\"150px\" width=\"150px\" src='data:image/png;base64,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'>";
            email.Body = body;
            try
            {
                smtp.Send(email);
            } catch (Exception e)
            {
            }
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
