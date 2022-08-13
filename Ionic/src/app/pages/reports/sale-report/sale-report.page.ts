import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.page.html',
  styleUrls: ['./sale-report.page.scss'],
})
export class SaleReportPage implements AfterViewInit {

  @ViewChild('barCanvas') private saleBarCanvas: ElementRef;
  saleBarChart: any;

  barConfig: any;
  barData_count: number;
  barLabels: any;
  barData: any;


  @ViewChild('lineCanvas') private saleLineCanvas: ElementRef;
  saleLineChart: any;
  lineConfig: any;
  lineData_count: number;
  lineLabels: any;
  lineData: any;

  constructor() { }

  ngAfterViewInit() {
    //Chart.register(LinearScale)
    this.barData_count = 3;
    this.barLabels = ["January","February","March","April","May","June","July","August","September","October","November","December"], //X-axis labels so group by month or by year or by day
    this.barData = {
      labels: this.barLabels,
      //Need to for loop add a label of the category and input the data
      datasets: [
        {
          label: 'Clothing',
          data: [0,5,10,15,20,25,30,35,40,45],
          borderColor: '#050000',
          backgroundColor: '#858585',
          yAxisID: 'y',
        },
        {
          label: 'Protein',
          data: [1,2,3,4,5,6,7,8,9,10,11,100],
          borderColor: '#171466',
          backgroundColor: '#54518f',
          yAxisID: 'y',
        },
        {
          label: 'Nutrition',
          data: [45,40,35,30,25,20,15,10,5,0],
          borderColor: '#f50505',
          backgroundColor: '#c73636',
          yAxisID: 'y',
        }
      ]
    };

    this.barChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    this.saleBarChart = new Chart(this.saleBarCanvas.nativeElement, {
      type: 'bar',
      data: this.barData
    //   {
    //     //Set of sale category - grouping quantity of sales per category for value
    //     labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [200, 50, 30, 15, 20, 34],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255,99,132,1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y:{
    //           beginAtZero: true
    //         }
    //     }
    //   }
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
            text: 'Quantity sold grouped by sale category'
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
