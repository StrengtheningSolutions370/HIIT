import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-group-session-report',
  templateUrl: './group-session-report.page.html',
  styleUrls: ['./group-session-report.page.scss'],
})
export class GroupSessionReportPage implements ViewWillEnter {

  bookings: any [] = [];
  tempBookings: any [] = [];

  loading = true;
  noresults = false;

  constructor(public reportService: ReportService, public bookingService: BookingService) { }

  ionViewWillEnter() {
    console.log("Entered Booking Report")
    this.bookingService.fetchBookingEvent.subscribe(()=>{
      this.reportService.getAllBookingReport().subscribe(data => {
        console.log(data.result);
        //this.tempBookings = data.result;
        this.bookings = data.result;
        this.bookings = this.bookings.filter(x => x.bookingAttendance.length > 0);
        this.loading = false;
        if (this.bookings.length === 0){
          this.noresults = true;
        }
      });
    })

    this.bookingService.fetchBookingEvent.emit();
  }

  download() {
    let Data = document.getElementById('htmlData')!;
    var img = new Image();
    img.src = 'assets/Logo.jpg';

    var HTML_Width = Data.clientWidth;
		var HTML_Height = Data.clientHeight;
		var top_left_margin = 25;
		var PDF_Width = HTML_Width+(top_left_margin*2);
		var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

    console.log("HTML-Width",HTML_Width);
    console.log("HTML_Height",HTML_Height);
    console.log("PDF_Width",PDF_Width);
    console.log("PDF_Height",PDF_Height);
    console.log("canvas_image_width ",canvas_image_width);
    console.log("canvas_image_height ",canvas_image_height);
    console.log("totalPDFPages ",totalPDFPages);



    const PDF = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: [PDF_Width, PDF_Height]
    });

    html2canvas(Data).then((canvas) => {
      canvas.getContext('2d');
      console.log("Canvas Height + width: ");
      console.log(canvas.height+"  "+canvas.width);

      var contentDataURL = canvas.toDataURL('image/png',1.0);

			//var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      PDF.addImage(contentDataURL, 'PNG', top_left_margin, top_left_margin+200,canvas_image_width,canvas_image_height);


			for (var i = 1; i <= totalPDFPages; i++) {
        console.log("adding another page to PDF");
				PDF.addPage([PDF_Width, PDF_Height]);
				PDF.addImage(contentDataURL, 'PNG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}


      //My code:
      // let imgWidth = 290;
      // let imgHeight = (canvas.height * imgWidth) / canvas.width;
      // var heightLeft = imgHeight;

      // var contentDataURL = canvas.toDataURL('image/png',1.0);


      // PDF.setPage(1);

      //Add heading
      PDF.setFontSize(60);
      PDF.text('Booking Report', 15, 55);
      //Add Logo
      PDF.addImage(img, 'PNG', (PDF_Width-PDF_Width/10), 5, PDF_Width/12, PDF_Height/20);
      //Add Line
      PDF.line(0,PDF_Height/18,PDF_Width,PDF_Height/18);
      //Add date
      var today = new Date();
      var dateNow = "Date Printed: " + formatDate(today, 'yyyy-MM-dd', 'EN');
      PDF.setFontSize(20);
      PDF.text(dateNow,PDF_Width-HTML_Width,PDF_Height-100);

      // // PDF.setFontSize(30)
      // // PDF.text('Client Progress Report', 10, 10);

      // var topPosition = 28;
      // const leftPosition = 5;
      // var pageHeight = 290;
      // PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, imgWidth, pageHeight);

      // imgHeight = (canvas.height * imgWidth) / canvas.width;
      // //var pages = 1;

      // while (heightLeft >= 0) {
      //   topPosition = heightLeft - imgHeight;
      //   PDF.addPage();
      //   PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, imgWidth, pageHeight);
      //   heightLeft -= pageHeight;
      // }

      const pageCount = PDF.internal.pages.length-1;
      console.log("pageCount:" ,pageCount);

      for(var i = 1; i <= pageCount; i++) {
        let str = 'Page: '+ String(i) + '/' + String(pageCount);
          PDF.setPage(i);
          PDF.text(str, PDF_Width-200, PDF_Height-100);
      }

      PDF.save('Booking report.pdf');
    });
  }

}
