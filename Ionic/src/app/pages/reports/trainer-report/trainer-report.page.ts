import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-trainer-report',
  templateUrl: './trainer-report.page.html',
  styleUrls: ['./trainer-report.page.scss'],
})
export class TrainerReportPage implements OnInit {

  constructor(private repo : RepoService) { }

  ngOnInit() {
    // this.repo.getA
  }

  searchTrainers(event : string) {
    console.log(event);
  }

}
