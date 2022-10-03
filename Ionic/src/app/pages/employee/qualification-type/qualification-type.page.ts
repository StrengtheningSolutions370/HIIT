/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { QualificationType } from 'src/app/models/qualification-type';
import { RepoService } from 'src/app/services/repo.service';
import { QualificationService } from 'src/app/services/qualification/qualification.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-qualification-type',
  templateUrl: './qualification-type.page.html',
  styleUrls: ['./qualification-type.page.scss'],
})
export class QualificationTypePage implements OnInit {
//String used from the searchbar, used in the filter pipe to search venues.
filter: string;

//Create local venue array to be populated onInit.
qualificationTypeList: QualificationType[] = [];
qualificationTypeListOriginal: QualificationType[] = [];

//Subscription variable to track live updates.
qualificationTypeSub: Subscription;

isLoading = true;
noresults = false;

constructor(public qualificationService: QualificationService, public repo: RepoService) { 
  this.fetchQualificationTypes();
}

ngOnInit() {
  this.qualificationService.fetchQualificationTypeEvent.subscribe(
    {
      next: res => {
        console.log('EMIT TO GO FETCH THE QUALIFICATION TYPES AGAIN')
        this.fetchQualificationTypes();
      }
    }
  );
}

fetchQualificationTypes() {
  this.isLoading = true;
  this.qualificationService.getAllQualificationTypes().subscribe(
    {
      next: data => {
        console.log("FETCHING QUALIFICATION TYPES FROM DB");
        console.log(data.result);
        this.isLoading = false;
        this.qualificationTypeList = data.result;
        this.qualificationTypeListOriginal = data.result;
        if (this.qualificationTypeList.length == 0)
          this.noresults = true;
      }
    }
  );
}

searchType(event : any) {
  this.noresults = false;

  if (event == '' || event == null) {
    this.qualificationTypeList = this.qualificationTypeListOriginal;

    if (this.qualificationTypeList.length == 0) {
      this.noresults = true;
    }

    return;
  }

  const hits = new Fuse(this.qualificationTypeList, {
    keys: [
      'name',
    ]
  }).search(
  	event
  );

  this.qualificationTypeList = [];

  if (hits.length == 0) {
    this.noresults = true;
    return;
  }

  hits.map((el : any) => {
    this.qualificationTypeList.push(el.item);
  });
}

}
