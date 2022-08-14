import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import Chart from 'chart.js/auto'
import { GlobalService } from 'src/app/services/global/global.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.page.html',
  styleUrls: ['./sale-report.page.scss'],
})
export class SaleReportPage implements ViewWillEnter {

  @ViewChild('barCanvas') private saleBarCanvas: ElementRef;
  saleBarChart: Chart;
  rangeTitle: string = 'Year view';
  chartHeight: any;
  chartWidth: any;

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
  saleLineChart: Chart;
  categorySelected: string = 'default';
  lineConfig: any;
  lineData_count: number;
  lineLabels: any;
  lineData: any;

  colors = ['red','chartreuse','mediumblue','orange','cyan', 'gold','fuchsia','coral', 'teal', 'darkviolet'];


  constructor(public report: ReportService, public global: GlobalService) {
    if (this.saleBarChart){
      this.saleBarChart.destroy();
    }
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
  }

  updateView(ev: CustomEvent){
    this.global.nativeLoad();
    this.chartHeight = this.saleBarChart.height;
    this.chartWidth = this.saleBarChart.width;
    this.saleBarChart.destroy();
    //this.barData = null;
    //this.saleBarChart.clearRect();
    //context.clearRect(0, 0, canvas.width, canvas.height);

    console.log(ev.detail.value);
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
    return new Promise<any>((resolve) => {
      this.report.getAllSaleCategoryReport().subscribe(data => {

        //console.log(data.result);
        this.saleCategoryReportData = data.result;
        console.log("Initial data.result");
        console.log(this.saleCategoryReportData);
        if (this.saleCategoryReportData == undefined){
          console.log("Empty")
          resolve(true);
          return;
        }
        for (let [index, element] of this.saleCategoryReportData.entries()){
          console.log("Entering reportData entries: ");
          console.log(element);
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
            console.log("Entering Sale Item: ");
            console.log(saleItem);
            var subQuantity = 0;
            saleItem.saleLine.forEach(saleLine => {
              console.log("Entering Sale Line: ");
              console.log(saleLine);
              let date = new Date(saleLine.date);
              if (this.selected == this.yearMonth.length){
                console.log("TempData: ");
                console.log(tempData);
                //Year month calculation
                for (let index = 0; index < this.selected; index++) {
                  if (index == date.getMonth()){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  console.log(tempData[index]);
                  console.log(subQuantity);
                  tempData[index] += subQuantity;
                  console.log("TempData: ");
                  console.log(tempData);
                }
              } else if (this.selected == this.biMonth.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/2)-1){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              } else if (this.selected == this.triMonth.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/3)){
                    subQuantity += saleLine.quantity;
                  } else {
                    subQuantity = 0;
                  }
                  tempData[index] += subQuantity;
                }
              } else if (this.selected == this.halfyear.length){

                for (let index = 0; index < this.selected; index++) {
                  if (index == Math.round(date.getMonth()/6)){
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

  ionViewWillEnter(): void {
    // this.global.nativeLoad();
    // //Chart.register(LinearScale)
    // //Default view as year month
    // this.selected = 12;
    // this.barLabels = this.yearMonth;
    // this.fetchCategoryReport().then(() => {
    //   this.barChartMethod();
    //   this.lineChartMethod();
    //   this.global.endNativeLoad();
    // });
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
    //this.saleBarChart.resize(this.chartWidth, this.chartHeight);
    //this.saleBarChart.getChart().resize();
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
