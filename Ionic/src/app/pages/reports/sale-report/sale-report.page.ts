import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import Chart from 'chart.js/auto'
import { GlobalService } from 'src/app/services/global/global.service';
import { ReportService } from 'src/app/services/report/report.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { formatDate } from '@angular/common';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.page.html',
  styleUrls: ['./sale-report.page.scss'],
})
export class SaleReportPage {

  colors = ['red','chartreuse','mediumblue','orange','cyan', 'gold','fuchsia','coral', 'teal', 'darkviolet'];
  rangeTitle: string = 'Month view';

  @ViewChild('barCanvas') private saleBarCanvas: ElementRef;
  saleBarChart: Chart;
  barLabels: any; // Labels below - this object is placed inside barData along with tempCategoryDataset on submit
  selected: number; // length of selected labels
  year: string[] = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"];
  yearMonth: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  biMonth: string[] = ["January-February","March-April","May-June","July-August","September-October","November-December"];
  triMonth: string[] = ["January-March","April-June","July-September","October-December"];
  halfyear: string[] = ["January-June","July-December"];

  grandTotal = 0;


  barData: any;// Final barData object passed to Generate Bar Chart method

  saleCategoryReportData: any; //Initial copied array from data.result in fetch sale category method
  tempCategoryDataset: any[] = []; //Collection of number values aggregated in the fetch sale category method - this object is placed inside barData along with BarLabels on submit


  // @ViewChild('lineCanvas') private saleLineCanvas: ElementRef;
  // saleLineChart: Chart;
  // categorySelected: string = 'default';
  // lineConfig: any;
  // lineLabels: string[] = [];
  // lineReportData: any;
  // tempLineData: any;
  // tempLineDataset: number[] = [];




  constructor(public report: ReportService, public global: GlobalService) {
    if (this.saleBarChart){
      this.saleBarChart.destroy();
    }
    this.global.nativeLoad();
    //Default view as year month
    this.selected = 12;
    this.barLabels = this.yearMonth;
    this.fetchCategoryReport().then(() => {
      this.barChartMethod();
      this.global.endNativeLoad();
    });
  }

  display(val){
    let str = 'X ' + Number(val);
    return str;
  }

  sumTotal(val){
    let total = 0;

    val.forEach((item) => {
      total += Number(item);
    });
    return total;
   }


  async download() {
    let Data = document.getElementById('htmlData')!;
    var img = new Image();
    img.src = 'assets/Logo.jpg';

    const PDF = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4'
    });

   await html2canvas(Data).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let imgWidth = 400;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      PDF.setPage(1);

      //Add heading
      PDF.setFontSize(30);
      PDF.text('Sale Quantity Report', 15, 15);
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

      const topPosition = 25;
      const leftPosition = -50;

      PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, imgWidth, imgHeight);

    });

    PDF.addPage();
    PDF.setPage(2);

    autoTable(PDF,{ html: '#htmlData2' });

    const pageCount = PDF.internal.pages.length-1;
    //console.log(pageCount);

    for(var i = 1; i <= pageCount; i++) {
      let str = 'Page: '+ String(i) + '/' + String(pageCount);
        PDF.setPage(i);
        PDF.text(str, 260, 200);
    }

    PDF.save('Sales Report.pdf');
  }

  updateView(ev: CustomEvent){
    this.global.nativeLoad();
    this.saleBarChart.destroy();
    //this.barData = null;
    //this.saleBarChart.clearRect();
    //context.clearRect(0, 0, canvas.width, canvas.height);

    //console.log(ev.detail.value);
    let view = ev.detail.value;
    if (view === 'yearly'){
      this.selected = this.year.length;
      this.rangeTitle = 'Year view';
      this.barLabels = this.year;
    } else if (view === 'monthly'){
      this.selected = this.yearMonth.length;
      this.rangeTitle = 'Month view';
      this.barLabels = this.yearMonth;
    } else if (view === 'bimonth'){
      this.selected = this.biMonth.length;
      this.rangeTitle = 'Bimonth view';
      this.barLabels = this.biMonth;
    } else if (view === 'quarterly'){
      this.selected = this.triMonth.length;
      this.rangeTitle = 'Quarterly view';
      this.barLabels = this.triMonth;
    } else if (view === 'halfyear'){
      this.selected = this.halfyear.length;
      this.rangeTitle = 'Half year view';
      this.barLabels = this.halfyear;
    } else {
      this.selected = this.yearMonth.length;
      this.rangeTitle = 'Month view';
      this.barLabels = this.yearMonth;
    }
    console.log("Starting update");
    this.fetchCategoryReport().then(() => {
      this.barChartMethod();
      //this.saleBarChart.resize(this.saleBarChart.width,this.saleBarChart.height);
    this.global.endNativeLoad();
    console.log("Finishing update");
    });
  }

  async fetchCategoryReport(): Promise<any>{
    this.tempCategoryDataset = [];
    this.grandTotal = 0;
    return new Promise<any>((resolve) => {
      this.report.getAllSaleCategoryReport().subscribe(data => {

        //console.log(data.result);
        this.saleCategoryReportData = data.result;
        console.log("Initial category data.result");
        console.log(this.saleCategoryReportData);
        if (this.saleCategoryReportData == undefined){
          console.log("Empty")
          resolve(true);
          return;
        }
        for (let [index, element] of this.saleCategoryReportData.entries()){
          //console.log("Entering reportData entries: ");
          //console.log(element);
          var tempData: number[];
          if (this.selected == this.yearMonth.length){
            tempData = [0,0,0,0,0,0,0,0,0,0,0,0];
          } else if (this.selected == this.biMonth.length){
            tempData = [0,0,0,0,0,0];
          } else if (this.selected == this.triMonth.length){
            tempData = [0,0,0,0];
          } else if (this.selected == this.halfyear.length){
            tempData = [0,0];
          } else if (this.selected == this.year.length){
            tempData = [0,0,0,0,0,0,0,0,0,0,0];
          }

          element.saleItem.forEach(saleItem => {
            var subQuantity = 0;
            saleItem.saleLine.forEach(saleLine => {
              this.grandTotal += saleLine.quantity;
              //console.log("Entering Sale Line: ");
              //console.log(saleLine);
              let date = new Date(saleLine.date);
              if (this.selected == this.yearMonth.length){
                //console.log("TempData: ");
                //console.log(tempData);
                //Year month calculation
                for (let index = 0; index < this.selected; index++) {
                  if (index == date.getMonth()){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                 // console.log(tempData[index]);
                  //console.log(subQuantity);
                  tempData[index] += subQuantity;
                  //console.log("TempData: ");
                  //console.log(tempData);
                }
              } else if (this.selected == this.biMonth.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.floor(date.getMonth()/2)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              } else if (this.selected == this.triMonth.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.floor(date.getMonth()/3)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              } else if (this.selected == this.halfyear.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.floor(date.getMonth()/6)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              } else if (this.selected == this.year.length){

                for (let index = 0; index < this.selected; index++) {
                  if (2020+index == date.getFullYear()){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              }


            })

          });
          let color = this.colors[index];
          //Loop through and add tempData here otherwise
          var dataset = {
            label: element.name,
            data: tempData,
            backgroundColor: color
            // yAxisID: 'y',

          }
          this.tempCategoryDataset.push(dataset);
          console.log(this.tempCategoryDataset);
        }
        resolve(true)
      });
    })
  }

  barChartMethod() {

    this.barData = {
      labels: this.barLabels,
      datasets: this.tempCategoryDataset
    };

    this.saleBarChart = new Chart(this.saleBarCanvas.nativeElement, {
      type: 'bar',
      data: this.barData,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Quantity sold grouped by sale category'
          }
        },
        scales: {
          y: {
            title: {
              text: 'Quantity',
              display: true
            },
            beginAtZero:true,
          },
          x: {
            title : {
              text: 'Date',
              display: true
            }
          }
        }
      }
    });
  }

}
