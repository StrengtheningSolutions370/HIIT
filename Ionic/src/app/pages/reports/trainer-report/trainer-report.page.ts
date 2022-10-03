import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import axios from 'axios';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-trainer-report',
  templateUrl: './trainer-report.page.html',
  styleUrls: ['./trainer-report.page.scss'],
})
export class TrainerReportPage implements OnInit {

  trainers : any[] = [];
  trainersOriginal : any[] = [];
  i = 1;
  date: Date = null;
  dateStr = '';
  total = 0;
  noLessons = 0;

  constructor(private repo : RepoService) { }

  ngOnInit() {
    this.total = 0;
    this.repo.getTrainers().subscribe((res : any) => {
      res.filter((trainer : any) => {
        return trainer.role == 'trainer';
      }).forEach(e => {
        const photo = e.data.photo;
        const name = `${e.data.appUser.firstName} ${e.data.appUser.lastName}`;
        const email = e.data.appUser.email;
        const phone = e.data.appUser.phoneNumber;
        const qDesc = e.data.qualification.description;
        const qType = e.data.qualification.qualificationType.name;
        const les = e.data.lesson.length;
        this.noLessons += les;
        const t = new trainer(this.i++, photo, name, email, phone, qDesc, qType, les);
        this.trainers.push(t);
        this.trainersOriginal.push(t);
        this.total++;
      });
    });
    this.date = new Date();
    this.dateStr = "Date Printed: " + formatDate(this.date, 'yyyy-MM-dd', 'EN')
    console.log(this.date);
  }

  download() {
    var element = document.getElementsByTagName('ion-col');

    var logo = new Image();
    logo.src = 'assets/Logo.jpg';

    for (let i = 0; i < element.length; i++) {
      element[i].style.color = 'black';
    }


    var header = document.getElementById('header');
    header.style.color = 'black';
    var button = document.getElementById('downloadbutton');
    button.style.display = 'none';

    var h = document.getElementById('hide');
    h.style.display = 'block';


    var h2 = document.getElementById('hide2');
    h2.style.display = 'block';
    h2.style.marginBottom = '20px';

    var h3 = document.getElementById('hide3');
    h3.style.display = 'block';
    h3.style.marginBottom = '10px';

    var img = document.getElementById('hideimg');
    img.style.display = 'none';

    var hea = document.getElementById('hidehead');
    hea.style.display = 'none';

    let Data = document.getElementById('htmlData');
    const o = Data.style.width;
    Data.style.width = '300mm';

    html2canvas(Data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 210;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png',1.0);
      var pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF



      // pdf.setFontSize(30)
      // pdf.text('Trainer Report', 15, 15);

      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      //Add Logo
      pdf.addImage(logo, 'PNG', 180, 1, 25, 20);
      //Add Line
      pdf.line(0,22,300,22);

      //Add page numbers
      const pageCount = pdf.internal.pages.length-1;
      console.log(pageCount);
      pdf.setFontSize(10);

      for(var i = 1; i <= pageCount; i++) {
        let str = 'Page: '+ String(i) + '/' + String(pageCount);
        pdf.setPage(i);
        pdf.text(str, 180, 280);
      }

      pdf.save('Trainer report.pdf'); // Generated PDF
    });

    var element = document.getElementsByTagName('ion-col');
    for (let i = 0; i < element.length; i++) {
      element[i].style.color = 'white';
    }
    header.style.color = 'white';
    button.style.display = 'block';
    Data.style.width = o;
    h.style.display = 'none';
    h2.style.display = 'none';
    h3.style.display = 'none';
    img.style.display = 'block';
    hea.style.display = 'block';

  }

  searchTrainers(event : string) {
    console.log(event);
  }

  updateNumbering() {
    this.trainers.forEach((e, i) => {
      e.displayID = i + 1;
    });
    this.trainersOriginal.forEach((e, i) => {
      e.displayID = i + 1;
    });
  }

  createImg (fileName: string) {
    if (fileName == null)
      return `https://localhost:44383/Resources/Employees/Images/default.jpeg`;
    return `https://localhost:44383/Resources/Employees/Images/${fileName}`;
   };

}
export class trainer {
  //col1
  displayID : number;
  //col2
  photo : string;
  //col3
  name : string;
  //col4
  email : string;
  phone : string;
  //col5
  qDescription : string;
  qType : string;
  //col6
  noLessons : number;

  constructor(displayID : number, photo : string, name : string, email : string, phone : string, qDescription : string, qType : string, noLessons : number) {
    this.displayID = displayID;
    this.photo = photo;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.qDescription = qDescription;
    this.qType = qType;
    this.noLessons = noLessons;
  }

}
