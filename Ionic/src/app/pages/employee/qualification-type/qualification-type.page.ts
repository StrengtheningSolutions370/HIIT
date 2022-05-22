import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { QualificationType } from 'src/app/models/qualification-type';
import { RepoService } from 'src/app/services/repo.service';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

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

//Subscription variable to track live updates.
qualificationTypeSub: Subscription;

isLoading = true;


constructor(public qualificationService: QualificationService, public repo: RepoService) { }

ngOnInit() {
  setTimeout(async () => {
    //Populate the qualificationtype list within the qualificationtype page, with the qulificationtype list from the qualification service.
    this.qualificationTypeSub = this.qualificationService.qualificationtypeList.subscribe(results => {
      this.qualificationTypeList = results;

      console.log('Qualification type Page Init -> qualification type List');
      console.log(this.qualificationTypeList);
    });
  });
  this.getQualificationTypes();
}

//Receive qualification type list from the repo in local page.
async getQualificationTypes() {
  setTimeout(async () => {
    this.isLoading = false;
    await this.repo.getQualificationTypes();

    console.log('Qualification type Page -> Get qualification types');
    console.log(this.qualificationTypeList);
  }, 1500);
}
  // qualificationTypes = [
  //   {
  //     name : 'Diploma',
  //   },
  //   {
  //     name : 'Certificate',
  //   },
  //   {
  //     name : 'Postgraduate Study',
  //   },
  //   {
  //     name : 'Bachelors degree',
  //   }
  // ];

  // constructor() { }

  // ngOnInit() {
  // }

}
