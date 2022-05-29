import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Qualification } from 'src/app/models/qualification';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';
import { RepoService } from 'src/app/services/repo.service';

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
qualificationTypeList: QualificationType[] = [];

isLoading = true;


constructor(public qualificationService: QualificationService, public repo: RepoService) {
  this.fetchQualifications();
  this.fetchQualificationTypes();
}

ngOnInit() {
  this.qualificationService.fetchQualificationEvent.subscribe(
    {
      next: res => {
        console.log('EMIT TO GO FETCH THE QUALIFICATIONS AGAIN');
        this.fetchQualifications();
      }
    }
  );
  this.qualificationService.fetchQualificationTypeEvent.subscribe(
    {
      next: res => {
        console.log('EMIT TO GO FETCH THE QUALIFICATION TYPES AGAIN');
        this.fetchQualificationTypes();
      }
    }
  );
}

fetchQualifications() {
  this.isLoading = true;
  this.qualificationService.getAllQualifications().subscribe(
    {
      next: data => {
        console.log('FETCHING QUALIFICATION FROM DB');
        console.log(data.result);
        this.isLoading = false;
        this.qualificationList = data.result;
      }
    }
  );
}

fetchQualificationTypes() {
  this.isLoading = true;
  this.qualificationService.getAllQualificationTypes().subscribe(
    {
      next: data => {
        console.log('FETCHING QUALIFICATION TYPES FROM DB');
        console.log(data.result);
        this.isLoading = false;
        this.qualificationTypeList = data.result;
      }
    }
  );
}
}
