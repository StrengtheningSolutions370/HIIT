import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from 'src/app/services/qualification/qualification.service';
import { RepoService } from 'src/app/services/repo.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.page.html',
  styleUrls: ['./qualification.page.scss'],
})
export class QualificationPage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search venues.
  filter: string;

  //Create local venue array to be populated onInit.
  qualificationList: Qualification[] = [];
  qualificationListOriginal: Qualification[] = [];

  noresults = false;

  //Subscription variable to track live updates.
  qualificationSub: Subscription;

  isLoading = true;


  constructor(public qualificationService: QualificationService, public repo: RepoService) {
    this.fetchQualifications();
   }

  ngOnInit() {
    this.qualificationService.fetchQualificationEvent.subscribe(
      {
        next: res => {
          console.log('EMIT TO GO FETCH THE QUALIFICATION AGAIN');
          this.fetchQualifications();
        }
      }
    );
  }

  fetchQualifications() {
    this.isLoading = true;
    this.qualificationService.getAllQualification().subscribe(
      {
        next: data => {
          console.log('FETCHING QUALIFICATION FROM DB');
          console.log(data.result);
          this.isLoading = false;
          this.qualificationList = data.result;
          this.qualificationListOriginal = data.result;
          if (this.qualificationList.length == 0)
            this.noresults = true;
        }
      }
    );
  }

  searchQualification(event : any) {
    this.noresults = false;

  if (event == '' || event == null) {
    this.qualificationList = this.qualificationListOriginal;

    if (this.qualificationList.length == 0) {
      this.noresults = true;
    }

    return;
  }

  const hits = new Fuse(this.qualificationList, {
    keys: [
      'name',
      'description',
      'quantityOnHand',
      'saleCategory.name',
    ]
  }).search(
  	event
  );

  this.qualificationList = [];

  if (hits.length == 0) {
    this.noresults = true;
    return;
  }

  hits.map((el : any) => {
    this.qualificationList.push(el.item);
  });
  }

}
