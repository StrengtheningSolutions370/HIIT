import { Injectable, OnInit, Output, EventEmitter  } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  @Output() fetchQualificationTypeEvent = new EventEmitter<QualificationType>();

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
  this.repo.createQualificationType(qualificationType).subscribe(
    {
      next: () => {
        console.log('QUALIFICATION TYPE CREATED');
        this.fetchQualificationTypeEvent.emit(qualificationType);
      }
    }
  )
 }

 getAllQualificationTypes() : Observable<any> {
  return this.repo.getQualificationTypes();
}

//Receives a qualificationtype to update in the service qualificationtype list.
 async updateQualificationType(id:number,qualificationType: any) {
  return this.repo.updateQualificationType(qualificationType.qualificationTypeID,qualificationType).subscribe(
    {
     next: () => {
       console.log('QUALIFICATION TYPE UPDATED');
       this.fetchQualificationTypeEvent.emit(qualificationType);
     }
    }
  )
  
  
  //  console.log('qualificationService: Repo -> Update qualificationtype');
  //  console.log(qualificationType);

  //  const currentQualificationType = this._qualificationtypeList.value;
  //  const index = currentQualificationType.findIndex(x => x.qualificationTypeID === id)
  //  return this.repo.updateQualificationType(qualificationType.qualificationTypeID,qualificationType)
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
        var tempResult = Object.assign(result);
        this._qualificationtypeList.next(tempResult);
        console.log("Updated qualificationtype list: Qualification Service: delete qualificationtype");
        console.log(this._qualificationtypeList);
      });
    });
    
    await modal.present();

  }

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

    console.log("Performing ADD");
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
      //   console.log("Updated qthisualificationtype list: Qualification Service: confirm qualificationtype");
      //   console.log(this._qualificationtypeList);
      //});
      // this.repo.getQualificationTypes().subscribe(() => {});
    });

    await modal.present();

  } else if (choice === 2){

    console.log("Performing UPDATE");
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

    console.log("BadOption: " + choice);

  }
}
}

