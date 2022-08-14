import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { GlobalService } from 'src/app/services/global/global.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.page.html',
  styleUrls: ['./sale-report.page.scss'],
})
export class SaleReportPage implements AfterViewInit {

  @ViewChild('barCanvas') private saleBarCanvas: ElementRef;
  saleBarChart: any;
  rangeTitle: string = 'Year view';

  barConfig: any;
  barLabels: any;
  barData: any;
  selected: number;
  year: string[] = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"];
  yearMonth: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  biMonth: string[] = ["January-February","March-April","May-June","July-August","September-October","November-December"];
  triMonth: string[] = ["January-March","April-June","July-September","October-December"];
  halfyear: string[] = ["January-June","July-December"];
  saleCategoryReportData: any;
  tempCategoryDataset: any[] = [];


  @ViewChild('lineCanvas') private saleLineCanvas: ElementRef;
  saleLineChart: any;
  categorySelected: string = 'default';
  lineConfig: any;
  lineData_count: number;
  lineLabels: any;
  lineData: any;

  colors = ['red','chartreuse','mediumblue','orange','cyan', 'gold','fuchsia','coral', 'teal', 'darkviolet'];


  constructor(public report: ReportService, public global: GlobalService) { }

  updateView(ev: CustomEvent){
    this.global.nativeLoad();
    //this.barData = null;
    this.saleBarChart.destroy();
    console.log(ev.detail.value);
    let view = ev.detail.value;
    if (view === 'yearly'){
      this.selected = this.year.length;
    } else if (view === 'monthly'){
      this.selected = this.yearMonth.length;
    } else if (view === 'bimonth'){
      this.selected = this.biMonth.length;
    } else if (view === 'quarterly'){
      this.selected = this.triMonth.length;
    } else if (view === 'halfyear'){
      this.selected = this.halfyear.length;
    } else {
      this.selected = this.yearMonth.length;
    }
    console.log("Starting update");
    this.fetchCategoryReport().then(() => {
      this.barChartMethod();
    this.global.endNativeLoad();
    console.log("Finishing update");
    });



  }

  async fetchCategoryReport(): Promise<any>{
    this.tempCategoryDataset = [];
    return new Promise<any>((resolve) => {
      this.report.getAllSaleCategoryReport().subscribe(data => {

        //console.log(data.result);
        this.saleCategoryReportData = data.result;
        for (let [index, element] of this.saleCategoryReportData.entries()){
          console.log(element);
          var tempData = [];
          element.saleItem.forEach(saleItem => {
            console.log(saleItem);
            var subQuantity = 0;
            saleItem.saleLine.forEach(saleLine => {
              let date = new Date(saleLine.date);
              if (this.selected == this.yearMonth.length){
                console.log("year month view");
                this.barLabels = this.yearMonth;
                for (let index = 0; index < this.selected; index++) {
                  if (index == date.getMonth()){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData.push(subQuantity);
                }
              } else if (this.selected == this.biMonth.length){
                console.log("bi-Month view");
                this.barLabels = this.biMonth;
                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/2)-1){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData.push(subQuantity);
                }
              } else if (this.selected == this.triMonth.length){
                console.log("tri-Month view");
                this.barLabels = this.triMonth;
                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/3)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData.push(subQuantity);
                }
              } else if (this.selected == this.halfyear.length){
                console.log("half-year view");
                this.barLabels = this.halfyear;
                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/6)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData.push(subQuantity);
                }
              } else if (this.selected == this.year.length){
                console.log("year view");
                this.barLabels = this.year;
                for (let index = 0; index < this.selected; index++) {
                  if (2020+index == date.getFullYear()){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData.push(subQuantity);
                }
              }


            })

          });
          console.log(index);
          let color = this.colors[index];
          console.log(color);
          var dataset = {
            label: element.name,
            data: tempData,
            backgroundColor: color
            // yAxisID: 'y',

          }
          this.tempCategoryDataset.push(dataset);
        }
        resolve(true)
      });
    })
  }

  ngAfterViewInit() {
    this.global.nativeLoad();
    //Chart.register(LinearScale)
    //Default view as year month
    this.selected = 12;
    this.barLabels = this.yearMonth;
    this.fetchCategoryReport().then(() => {
      this.barChartMethod();
      this.lineChartMethod();
      this.global.endNativeLoad();
    });
 //X-axis labels so group by month or by year or by day


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
            }
        }
    });
  }

  lineChartMethod() {
    this.saleLineChart = new Chart(this.saleLineCanvas.nativeElement, {
      type: 'line',
      data: this.lineData,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Total number of sales per sale category'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
      // {
      //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      //   datasets: [
      //     {
      //       label: 'Sell per week',
      //       fill: false,
      //       backgroundColor: 'rgba(75,192,192,0.4)',
      //       borderColor: 'rgba(75,192,192,1)',
      //       borderCapStyle: 'butt',
      //       borderDash: [],
      //       borderDashOffset: 0.0,
      //       borderJoinStyle: 'miter',
      //       pointBorderColor: 'rgba(75,192,192,1)',
      //       pointBackgroundColor: '#fff',
      //       pointBorderWidth: 1,
      //       pointHoverRadius: 5,
      //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //       pointHoverBorderColor: 'rgba(220,220,220,1)',
      //       pointHoverBorderWidth: 2,
      //       pointRadius: 1,
      //       pointHitRadius: 10,
      //       data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
      //       spanGaps: false,
      //     }
      //   ]
      // }
    });
  }
}
