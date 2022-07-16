/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

import { Injectable, Output, EventEmitter  } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { RepoService } from '../repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddQtypeComponent } from 'src/app/pages/employee/qualification-type/add-qtype/add-qtype.component';
import { DeleteQtypeComponent } from 'src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component';
import { UpdateQtypeComponent } from 'src/app/pages/employee/qualification-type/update-qtype/update-qtype.component';
import { ViewQtypeComponent } from 'src/app/pages/employee/qualification-type/view-qtype/view-qtype.component';
import { ConfirmQtypeComponent } from 'src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component';
import { AssociativeQtypeComponent } from 'src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component';
import { Qualification } from 'src/app/models/qualification';
import { AddQualificationComponent } from 'src/app/pages/employee/qualification/add-qualification/add-qualification.component';
import { UpdateQualificationComponent } from 'src/app/pages/employee/qualification/update-qualification/update-qualification.component';
import { AssociativeQualificationComponent } from 'src/app/pages/employee/qualification/associative-qualification/associative-qualification.component';
import { DeleteQualificationComponent } from 'src/app/pages/employee/qualification/delete-qualification/delete-qualification.component';
import { ViewQualificationComponent } from 'src/app/pages/employee/qualification/view-qualification/view-qualification.component';
import { ConfirmQualificationComponent } from 'src/app/pages/employee/qualification/confirm-qualification/confirm-qualification.component';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  @Output() fetchQualificationTypeEvent = new EventEmitter<QualificationType>();
  @Output() fetchQualificationEvent = new EventEmitter<Qualification>();

//QUALIFICATION-TYPE:
//Creating a qtypeList for all the qtypes in the service.
private _qualificationtypeList = new BehaviorSubject<QualificationType[]>([]);

//Return the qtype list as an observable.
public get qualificationtypeList(){
  return this._qualificationtypeList.asObservable();
}

//QUALIFICATION:
//Creating a qList for all the qualification in the service.
private _qualificationList = new BehaviorSubject<Qualification[]>([]);

//Return the q list as an observable.
public get qualificationList(){
  return this._qualificationList.asObservable();
}

constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
  //Receive the qualification from the repo (API).
  this.repo.getQualificationTypes().subscribe(result => {
    console.log('QualificationType List: QualificationType Service -> Get QualificationType');
    console.log(result);

    const tempResult = Object.assign(result);
    this._qualificationtypeList.next(tempResult);

    console.log('QualificationType List: qualification type Service -> Updated qualification types');
    console.log(this._qualificationtypeList);
  });

  this.repo.getQualifications().subscribe(result => {
    console.log('Qualification List: Qualification Service -> Get Qualification');
    console.log(result);

    const tempResult = Object.assign(result);
    this._qualificationList.next(tempResult);

    console.log('Qualification List: qualification  Service -> Updated qualifications ');
    console.log(this._qualificationList);
  });
}


//Methods
//Add a qualificationtype to the qualificationtype list within the qualification service.
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

   //Receives a venue to update in the service venue list.
   updateQualificationTypes(id: number, qualificationType: any){
    if (id !== qualificationType.qualificationID){
      console.log('ERROR IN QUALIFICATION UPDATE - MISMATCH ID');
      return;
    }
   return this.repo.updateQualificationType(id,qualificationType).subscribe(
     {
      next: () => {
        console.log('VENUE UPDATED');
        this.fetchQualificationTypeEvent.emit(qualificationType);
      }
     }
   );
  }

 getAllQualificationTypes(): Observable<any> {
  return this.repo.getQualificationTypes();
}

//Receives a venue to delete in the service venue list.
 deleteQualificationType(id: number){
   this.repo.deleteQualificationType(id).subscribe(result =>
   {
    console.log('QUALIFICATION TYPE DELETED');
    this.fetchQualificationTypeEvent.emit();
   });

 }

 matchingQualificationType(input: string){
  console.log('qualificationService: Repo -> Matching qualificationtype');
  this.repo.getMatchQualificationType(input);
 }

 existingQualificationType(id: number){
  console.log('qualificationService: Repo -> Existing qualificationtype');
  this.repo.existsQualificationType(id).subscribe(result =>
   console.log(result));
 }

//Add a qualification the qualification list within the qualification service.
createQualification(qualification: any){
  this.repo.createQualification(qualification).subscribe(
    {
      next: () => {
        console.log('QUALIFICATION TYPE CREATED');
        this.fetchQualificationTypeEvent.emit(qualification);
      }
    }
  );
 }

 getAllQualification(): Observable<any> {
  return this.repo.getQualifications();
}

//Receives a qualificationtype to update in the service qualificationtype list.
 async updateQualification(id: number,qualification: any) {
  return this.repo.updateQualification(qualification.qualificationID,qualification).subscribe(
    {
     next: () => {
       console.log('QUALIFICATION UPDATED');
       this.fetchQualificationEvent.emit(qualification);
     }
    }
  );
 }

//Receives a qualification to delete in the service qualification list.
 deleteQualification(id: number){
   this.repo.deleteQualification(id).subscribe(result =>
   {
    console.log('QUALIFICATION  DELETED');
    this.fetchQualificationEvent.emit();
   });

 }

 matchingQualification(input: string){
  console.log('qualification: Repo -> Matching qualification');
  this.repo.getMatchQualification(input);
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

  if (qualificationType.qualifications!= null && qualificationType.qualifications.length > 0){
    const modal = await this.modalCtrl.create({
      component: AssociativeQtypeComponent,
        componentProps: {
          qualificationType
      }
    });
    await modal.present();

  } else {

    const modal = await this.modalCtrl.create({
      component: DeleteQtypeComponent,
        componentProps: {
          qualificationType
      }
    });

    //Update the current qualificationtype list with the qualificationtype list from the delete modal.
    modal.onDidDismiss().then(() => {
      this.repo.getQualificationTypes().subscribe(result => {
        const tempResult = Object.assign(result);
        this._qualificationtypeList.next(tempResult);
        console.log('Updated qualificationtype list: Qualification Service: delete qualificationtype');
        console.log(this._qualificationtypeList);
      });
    });

    await modal.present();

  }

}
//Display the view qualificationtype modal.
  //This method receives the selected qualificationtype object, from the qualificationtype page, in the modal through the componentProps.
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

  console.log('QualificationService: ConfirmQualificationTypeModalCall');
  console.log(choice);

  if(choice === 1){

    console.log('Performing ADD');
    // let tempQualificationType = new QualificationType();
    // tempQualificationType.qualificationTypeID = 0;
    // tempQualificationType = Object.assign(qualificationType);
    // console.log(tempQualificationType);

    const modal = await this.modalCtrl.create({

      component: ConfirmQtypeComponent,
      componentProps: {
        qualificationType,
        choice
      }

    });

    //Update the current venue list with the venue list from the confirm modal.
    modal.onDidDismiss().then(() => {

      // .repo.getQualificationTypes().subscribe(result => {
      //   var tempResult = Object.assign(result);
      //   this._qualificationtypeList.next(tempResult);
      //   console.log("Updated qualificationtype list: Qualification Service: confirm qualificationtype");
      //   console.log(this._qualificationtypeList);
      //});
      // this.repo.getQualificationTypes().subscribe(() => {});
    });

    await modal.present();

  } else if (choice === 2){

    console.log('Performing UPDATE');
    let tempQualificationType = new QualificationType();
    tempQualificationType = Object.assign(qualificationType);
    console.log(tempQualificationType);

    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        qualificationType,
        choice
      }
    });

    modal.onDidDismiss().then(() => {

      // this.repo.getQualificationTypes().subscribe(result => {
      //   var tempResult = Object.assign(result);
      //   this._qualificationtypeList.next(tempResult);
      //   console.log("Updated qualificationtype list: Qualification Service: Update confirm qualificationtype");
      //   console.log(this._qualificationtypeList);
      //});

      // this.repo.getQualificationTypes();

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
  console.log('qualificationService: UpdateQualificationModalCall');
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
  console.log('qualificationService: DeleteQualificationModalCall');

  if (qualification.qualificationTypes!= null && qualification.qualificationTypes.length > 0){
    const modal = await this.modalCtrl.create({
      component: AssociativeQualificationComponent,
        componentProps: {
          qualification
      }
    });
    await modal.present();

  } else {

    const modal = await this.modalCtrl.create({
      component: DeleteQualificationComponent,
        componentProps: {
          qualification
      }
    });

    //Update the current qualificationtype list with the qualificationtype list from the delete modal.
    modal.onDidDismiss().then(() => {
      this.repo.getQualifications().subscribe(result => {
        const tempResult = Object.assign(result);
        this._qualificationList.next(tempResult);
        console.log('Updated qualification list: Qualification Service: delete qualification');
        console.log(this._qualificationList);
      });
    });

    await modal.present();

  }

}
//Display the view qualificationtype modal.
  //This method receives the selected qualification object, from the qualificationtype page, in the modal through the componentProps.
async viewQualificationInfoModal(qualification: Qualification) {
  console.log('QualificationTypeService: ViewQualificationTypeModalCall');
  let tempQualification = new QualificationType();
  tempQualification = Object.assign(qualification);
  console.log(tempQualification);
  const modal = await this.modalCtrl.create({
    component: ViewQualificationComponent,
    componentProps: {
      qualificationType:tempQualification
    }
  });
  await modal.present();
}

//Display the confirm create/update modal
//Receives the selected qualification from the qualification page
async confirmQualificationModal(choice: number, qualification: any) {

  console.log('QualificationService: ConfirmQualificationModalCall');
  console.log(choice);

  if(choice === 1){

    console.log('Performing ADD');
    // let tempQualificationType = new QualificationType();
    // tempQualificationType.qualificationTypeID = 0;
    // tempQualificationType = Object.assign(qualificationType);
    // console.log(tempQualificationType);

    const modal = await this.modalCtrl.create({

      component: ConfirmQualificationComponent,
      componentProps: {
        qualification,
        choice
      }

    });

    //Update the current venue list with the venue list from the confirm modal.
    modal.onDidDismiss().then(() => {
      // .repo.getQualificationTypes().subscribe(result => {
      //   var tempResult = Object.assign(result);
      //   this._qualificationtypeList.next(tempResult);
      //   console.log("Updated qthisualificationtype list: Qualification Service: confirm qualificationtype");
      //   console.log(this._qualificationtypeList);
      //});
      // this.repo.getQualificationTypes().subscribe(() => {});
    });

    await modal.present();

  } else if (choice === 2){

    console.log('Performing UPDATE');
    let tempQualification = new Qualification();
    tempQualification = Object.assign(qualification);
    console.log(tempQualification);

    const modal = await this.modalCtrl.create({
      component: ConfirmQualificationComponent,
      componentProps: {
        qualification,
        choice
      }
    });

    modal.onDidDismiss().then(() => {

      // this.repo.getQualificationTypes().subscribe(result => {
      //   var tempResult = Object.assign(result);
      //   this._qualificationtypeList.next(tempResult);
      //   console.log("Updated qualificationtype list: Qualification Service: Update confirm qualificationtype");
      //   console.log(this._qualificationtypeList);
      //});

      // this.repo.getQualificationTypes();

    });

    await modal.present();

  } else {

    console.log('BadOption: ' + choice);

  }
}
}

