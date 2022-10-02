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

    const PDF = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4'
    });
    html2canvas(Data).then((canvas) => {
      let imgWidth = 290;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');


      PDF.setPage(1);

      //Add heading
      PDF.setFontSize(30);
      PDF.text('Booking Report', 15, 15);
      //Add Logo
      PDF.addImage(img, 'PNG', 260, 1, 25, 20);
      //Add Line
      PDF.line(0,25,300,25);
      //Add date
      var today = new Date();
      var dateNow = "Date Printed: " + formatDate(today, 'yyyy-MM-dd', 'EN');
      PDF.setFontSize(10);
      PDF.text(dateNow, 20,200);

      // PDF.setFontSize(30)
      // PDF.text('Client Progress Report', 10, 10);

      var topPosition = 28;
      const leftPosition = 5;
      var pageHeight = 290;
      PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, imgWidth, pageHeight);

      imgHeight = (canvas.height * imgWidth) / canvas.width;
      //var pages = 1;

      while (heightLeft >= 0) {
        topPosition = heightLeft - imgHeight;
        PDF.addPage();
        PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, imgWidth, pageHeight);
        heightLeft -= pageHeight;
      }

      const pageCount = PDF.internal.pages.length-1;
      console.log(pageCount);

      for(var i = 1; i <= pageCount; i++) {
        let str = 'Page: '+ String(i) + '/' + String(pageCount);
          PDF.setPage(i);
          PDF.text(str, 260, 200);
      }

      PDF.save('Booking report.pdf');
    });
  }

}
