import { Injectable, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { AssociativeVenueComponent } from 'src/app/pages/venue/associative-venue/associative-venue.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject } from 'rxjs';
import { AddQtypeComponent } from 'src/app/pages/employee/qualification-type/add-qtype/add-qtype.component';
import { DeleteQtypeComponent } from 'src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component';
import { UpdateQtypeComponent } from 'src/app/pages/employee/qualification-type/update-qtype/update-qtype.component';
import { ViewQtypeComponent } from 'src/app/pages/employee/qualification-type/view-qtype/view-qtype.component';
import { ConfirmQtypeComponent } from 'src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  //QUALIFICATION-TYPE:
//Creating a qtypeList for all the qtypes in the service.
private _qualificationtypeList = new BehaviorSubject<QualificationType[]>([]);

//Return the qtype list as an observable.
public get qualificationtypeList(){
  return this._qualificationtypeList.asObservable();
}

constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
  //Receive the qtypes from the repo (API).
  this.repo.getQualificationTypes().subscribe(result => {
    console.log('QualificationType List: QualificationType Service -> Get QualificationType');
    console.log(result);

    var tempResult = Object.assign(result);
    this._qualificationtypeList.next(tempResult);

    console.log('QualificationType List: qualification type Service -> Updated qualification types');
    console.log(this._qualificationtypeList);
  })
}

//Methods
//Add a qualificationtype to the qualificationtype list within the qualification service.
 createQualificationType(qualificationType: any){
   console.log('qualificationService: Repo -> Create QualificationType');
   console.log(JSON.stringify(qualificationType));
   this.repo.createQualificationType(qualificationType).subscribe(res=> {
    var tempResult = Object.assign(res);
    console.log("Qualification Service: Create qualificationtype");
    console.log(res);
    this._qualificationtypeList.next(tempResult.data);
   });
 }

//Receives a qualificationtype to update in the service qualificationtype list.
 updateQualificationType(id,qualificationType: any){
   console.log('qualificationService: Repo -> Update qualificationtype');
   console.log(qualificationType);

   const currentQualificationType = this._qualificationtypeList.value;
   const index = currentQualificationType.findIndex(x => x.qualificationTypeID === id)
   this.repo.updateQualificationType(qualificationType.qualificationTypeID,qualificationType).subscribe(result =>
    console.log(result));
 }

//Receives a venue to delete in the service venue list.
 deleteQualificationType(id: number){
   this.repo.deleteQualificationType(id).subscribe(result =>
    console.log(result));
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
  console.log("qualificationService: UpdateQualificationTypeModalCall");
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
  console.log("qualificationService: DeleteQualificationTypeModalCall");
  let tempQualificationType = new QualificationType();
  tempQualificationType = Object.assign(qualificationType);
  console.log(tempQualificationType);
    const modal = await this.modalCtrl.create({
      component: DeleteQtypeComponent,
        componentProps: {
          venue: tempQualificationType
      }
    });

    //Update the current qualificationtype list with the qualificationtype list from the delete modal.
    modal.onDidDismiss().then(() => {
      this.repo.getQualificationTypes().subscribe(result => {
        var tempResult = Object.assign(result);
        this._qualificationtypeList.next(tempResult);
        console.log("Updated qualificationtype list: Qualification Service: delete qualificationtype");
        console.log(this._qualificationtypeList);
      });
    });
    await modal.present();
  }


//Display the view qualificationtype modal.
  //This method receives the selected qualificationtye object, from the qualificationtype page, in the modal through the componentProps.
async viewQualificationTypeInfoModal(qualificationtype: QualificationType) {
  console.log("QualificationTypeService: ViewQualificationTypeModalCall");
  let tempQualificationType = new QualificationType();
  tempQualificationType = Object.assign(qualificationtype);
  console.log(tempQualificationType);
  const modal = await this.modalCtrl.create({
    component: ViewQtypeComponent,
    componentProps: {
      venue:tempQualificationType
    }
  });
  await modal.present();
}

//Display the confirm create/update modal
//Receives the selected qualificationtype from the qualificationtype page
async confirmQualificationTypeModal(selection: number, qualificationType: any) {
  console.log('QualificationService: ConfirmQualificationTypeModalCall');
  console.log(selection);
  if(selection === 1){
    console.log("Performing ADD");
    let tempQualificationType = new QualificationType();
    tempQualificationType.qualificationTypeID = 0;
    tempQualificationType = Object.assign(qualificationType);
    console.log(tempQualificationType);
    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        venue:tempQualificationType,
        choice:selection
      }
    });

    //Update the current venue list with the venue list from the confirm modal.
    modal.onDidDismiss().then(() => {
      this.repo.getQualificationTypes().subscribe(result => {
        var tempResult = Object.assign(result);
        this._qualificationtypeList.next(tempResult);
        console.log("Updated qualificationtype list: Qualification Service: confirm qualificationtype");
        console.log(this._qualificationtypeList);
      });
    });
    await modal.present();
  } else if (selection === 2){
    console.log("Performing UPDATE");
    let tempQualificationType = new QualificationType();
    tempQualificationType = Object.assign(qualificationType);
    console.log(tempQualificationType);
    const modal = await this.modalCtrl.create({
      component: ConfirmQtypeComponent,
      componentProps: {
        venue:tempQualificationType,
        choice:selection
      }
    });
    modal.onDidDismiss().then(() => {
      this.repo.getQualificationTypes().subscribe(result => {
        var tempResult = Object.assign(result);
        this._qualificationtypeList.next(tempResult);
        console.log("Updated qualificationtype list: Qualification Service: Update confirm qualificationtype");
        console.log(this._qualificationtypeList);
      });
    });
    await modal.present();
  } else {
    console.log("BadOption: " + selection);
  }
}
}

