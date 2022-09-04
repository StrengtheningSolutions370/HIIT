import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import Chart from 'chart.js/auto'
import { GlobalService } from 'src/app/services/global/global.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.page.html',
  styleUrls: ['./income-report.page.scss'],
})
export class IncomeReportPage implements ViewWillEnter {

  constructor(public report: ReportService, public global: GlobalService) { }

  ionViewWillEnter(): void {

  }

}
