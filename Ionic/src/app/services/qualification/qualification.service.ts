/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable, OnInit, Output, EventEmitter  } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { AssociativeVenueComponent } from 'src/app/pages/venue/associative-venue/associative-venue.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddQtypeComponent } from 'src/app/pages/employee/qualification-type/add-qtype/add-qtype.component';
import { DeleteQtypeComponent } from 'src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component';
import { UpdateQtypeComponent } from 'src/app/pages/employee/qualification-type/update-qtype/update-qtype.component';
import { ViewQtypeComponent } from 'src/app/pages/employee/qualification-type/view-qtype/view-qtype.component';
import { ConfirmQtypeComponent } from 'src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component';
import { AssociativeQtypeComponent } from 'src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component';
import { Qualification } from 'src/app/models/qualification';
import { UpdateQualificationComponent } from 'src/app/pages/employee/qualification/update-qualification/update-qualification.component';
import { AddQualificationComponent } from 'src/app/pages/employee/qualification/add-qualification/add-qualification.component';
import { DeleteQualificationComponent } from 'src/app/pages/employee/qualification/delete-qualification/delete-qualification.component';
import { ViewQualificationComponent } from 'src/app/pages/employee/qualification/view-qualification/view-qualification.component';
import { ConfirmQualificationComponent } from 'src/app/pages/employee/qualification/confirm-qualification/confirm-qualification.component';
import { AssociativeQualificationComponent }
from 'src/app/pages/employee/qualification/associative-qualification/associative-qualification.component';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

@Output() fetchQualificationTypeEvent = new EventEmitter<QualificationType>();
@Output() fetchQualificationEvent = new EventEmitter<Qualification>();


constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
  this.getAllQualifications();
  this.getAllQualificationTypes();
  }

//Methods
//Add a qualification type to the qualification type list within the qualification service.

getAllQualificationTypes(): Observable<any> {
  return this.repo.getQualificationTypes();
}

getAllQualifications(): Observable<any> {
  return this.repo.getQualification();
}

 createQualificationType(qualificationType: any){
  this.repo.createQualificationType(qualificationType).subscribe(
    {
      next: () => {
        console.log('QUALIFICATION TYPE CREATED');
        this.fetchQualificationTypeEvent.emit(qualificationType);
      }
    }
  );
 }

//Receives a qualification type to update in the service qualification type list.
 async updateQualificationType(id: number,qualificationType: any) {
  return this.repo.updateQualificationType(qualificationType.qualificationTypeID,qualificationType).subscribe(
    {
     next: () => {
       console.log('QUALIFICATION TYPE UPDATED');
       this.fetchQualificationTypeEvent.emit(qualificationType);
     }
    }
  );
 }

//Receives a venue to delete in the service venue list.
 deleteQualificationType(id: number){
   this.repo.deleteQualificationType(id).subscribe(result =>
   {
    console.log('QUALIFICATION TYPE DELETED');
    this.fetchQualificationTypeEvent.emit();
   });

 }

 matchingQualificationType(input: string): Promise<any>{
  console.log('qualificationService: Repo -> Matching qualificationtype');
  return this.repo.getMatchQualificationType(input).toPromise();
 }

 existingQualificationType(id: number){
  console.log('qualificationService: Repo -> Existing qualificationtype');
  this.repo.existsQualificationType(id).subscribe(result =>
   console.log(result));
 }


 createQualification(qualification: any){
  this.repo.createQualification(qualification).subscribe(
    {
      next: () => {
        console.log('QUALIFICATION  CREATED');
        this.fetchQualificationEvent.emit(qualification);
      }
    }
  );
 }


//Receives a qualification to update in the service qualification list.
 async updateQualification(id: number,qualification: any) {
  return this.repo.updateQualificationType(qualification.qualificationID,qualification).subscribe(
    {
     next: () => {
       console.log('QUALIFICATION  UPDATED');
       this.fetchQualificationEvent.emit(qualification);
     }
    }
  );
 }

//Receives a venue to delete in the service venue list.
 deleteQualification(id: number){
   this.repo.deleteQualification(id).subscribe(result =>
   {
    console.log('QUALIFICATION  DELETED');
    this.fetchQualificationEvent.emit();
   });

 }

 matchingQualification(input: string): Promise<any>{
  console.log('qualificationService: Repo -> Matching qualification');
  return this.repo.getMatchQualification(input).toPromise();
 }

 existingQualification(id: number){
  console.log('qualificationService: Repo -> Existing qualification');
  this.repo.existsQualification(id).subscribe(result =>
   console.log(result));
 }

//Modals
async addQualificationTypeInfoModal(qualificationType?: QualificationType) {
  const modal = await this.modalCtrl.create({
    component: AddQtypeComponent,
    componentProps:{
      qualificationType
    }
  });
  await modal.present();
}

//Display the update venue modal.
//This method receives the selected venue object, from the venue page, in the modal through the componentProps.
async updateQualificationTypeInfoModal(qualificationType: QualificationType) {
  console.log('qualificationService: UpdateQualificationTypeModalCall');
  const modal = await this.modalCtrl.create({
    component: UpdateQtypeComponent,
    componentProps:{
      qualificationType
    }
  });
  await modal.present();
}

//Display the delete venue modal.
//This method receives the selected venue object, from the venue page, in the modal through the componentProps.
async deleteQualificationTypeInfoModal(qualificationType: QualificationType) {
  console.log('qualificationService: DeleteQualificationTypeModalCall');
  let tempQualificationType = new QualificationType();
  tempQualificationType = Object.assign(qualificationType);
  console.log(tempQualificationType);

  if (tempQualificationType.qualifications!= null && tempQualificationType.qualifications.length > 0){
    const modal = await this.modalCtrl.create({
      component: AssociativeQtypeComponent,
        componentProps: {
          qualificationType: tempQualificationType
      }
    });
    await modal.present();

  } else {

    const modal = await this.modalCtrl.create({
      component: DeleteQtypeComponent,
        componentProps: {
          qualificationType: tempQualificationType
      }
    });

    await modal.present();

  }

}
//Display the view qualificationtype modal.
  //This method receives the selected qualificationtye object, from the qualificationtype page, in the modal through the componentProps.
async viewQualificationTypeInfoModal(qualificationtype: QualificationType) {
  console.log('QualificationTypeService: ViewQualificationTypeModalCall');
  let tempQualificationType = new QualificationType();
  tempQualificationType = Object.assign(qualificationtype);
  console.log(tempQualificationType);
  const modal = await this.modalCtrl.create({
    component: ViewQtypeComponent,
    componentProps: {
      qualificationType:tempQualificationType
    }
  });
  await modal.present();
}

//Display the confirm create/update modal
//Receives the selected qualificationtype from the qualificationtype page
async confirmQualificationTypeModal(choice: number, qualificationType: any) {
  if(choice === 1){

    console.log('Performing ADD');
    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        qualificationType,
        choice
      }

    });
    await modal.present();

  } else if (choice === 2){

    console.log('Performing UPDATE');
    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        qualificationType,
        choice
      }
    });
    await modal.present();
  } else {
    console.log('BadOption: ' + choice);
  }
}

//Modals
async addQualificationInfoModal(qualification?: Qualification) {
  const modal = await this.modalCtrl.create({
    component: AddQualificationComponent,
    componentProps:{
      qualification
    }
  });
  await modal.present();
}

//Display the update venue modal.
//This method receives the selected venue object, from the venue page, in the modal through the componentProps.
async updateQualificationInfoModal(qualification: Qualification) {
  console.log('qualificationService: UpdateQualification ModalCall');
  const modal = await this.modalCtrl.create({
    component: UpdateQualificationComponent,
    componentProps:{
      qualification
    }
  });
  await modal.present();
}

//Display the delete venue modal.
//This method receives the selected venue object, from the venue page, in the modal through the componentProps.
async deleteQualificationInfoModal(qualification: Qualification) {
  console.log('qualificationService: DeleteQualificationTypeModalCall');
  let tempQualification = new Qualification();
  tempQualification = Object.assign(qualification);
  console.log(tempQualification);

  if (tempQualification.qualificationTypes!= null && tempQualification.qualificationTypes.length > 0){
    const modal = await this.modalCtrl.create({
      component: AssociativeQualificationComponent,
        componentProps: {
          qualification: tempQualification
      }
    });
    await modal.present();

  } else {

    const modal = await this.modalCtrl.create({
      component: DeleteQualificationComponent,
        componentProps: {
          qualification: tempQualification
      }
    });
    await modal.present();
  }
}
//Display the view qualificationtype modal.
  //This method receives the selected qualificationtye object, from the qualificationtype page, in the modal through the componentProps.
async viewQualificationInfoModal(qualification: Qualification) {
  console.log('Qualification Service: View Qualification ModalCall');
  let tempQualification = new Qualification();
  tempQualification = Object.assign(qualification);
  console.log(tempQualification);
  const modal = await this.modalCtrl.create({
    component: ViewQualificationComponent,
    componentProps: {
      qualification:tempQualification
    }
  });
  await modal.present();
}

//Display the confirm create/update modal
//Receives the selected qualificationtype from the qualificationtype page
async confirmQualificationModal(choice: number, qualification: any) {

  console.log('QualificationService: ConfirmQualification ModalCall');
  console.log(choice);

  if(choice === 1){
    console.log('Performing ADD');
    const modal = await this.modalCtrl.create({
      component: ConfirmQualificationComponent,
      componentProps: {
        qualification,
        choice
      }
    });
    await modal.present();

  } else if (choice === 2){

    console.log('Performing UPDATE');
    let tempQualification = new Qualification();
    tempQualification = Object.assign(qualification);
    console.log(tempQualification);

    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        qualification,
        choice
      }
    });
    await modal.present();

  } else {
    console.log('BadOption: ' + choice);
  }
}
}


