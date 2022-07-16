import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

@Component({
  selector: 'app-confirm-qtype',
  templateUrl: './confirm-qtype.component.html',
  styleUrls: ['./confirm-qtype.component.scss'],
})
export class ConfirmQtypeComponent {

  @Input() choice: number;
  @Input() qualificationType: QualificationType;

  constructor(private modalCtrl: ModalController, public qualificationService: QualificationService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl : ToastController) {
   }

   //double check where it returns to with josh 
 async dismissModal() {
    //await this.router.navigate(['../qualification-type'],{relativeTo:this.activated});
    this.modalCtrl.dismiss();
  };
  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(qualificationType: QualificationType){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.qualificationService.matchingQualificationType(qualificationType.name) != null)
      {
        console.log('Existing QualificationType: ' + qualificationType.name);
        //display duplicate alert
        //failure alert
        return;
      }
      else {
        console.log('Add Qualification Type from confirm:');
        //CallRepoToCreate
        await this.qualificationService.createQualificationType(qualificationType);
        await this.dismissModal();
        this.sucAdd();
      }
    }

     else if (this.choice === 2){
      console.log('Update Qualification Type from confirm:');
      //CallRepoToUpdate
      await this.qualificationService.updateQualificationTypes(qualificationType.qualificationTypeID,qualificationType);
      this.dismissModal();
      this.sucUpdate();
        }

    //dismiss modal
   // this.dismissModal();
  }

  async returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.qualificationType);
      await this.dismissModal();
      this.qualificationService.addQualificationTypeInfoModal(this.qualificationType);
    }
    else if (this.choice === 2){
      console.log(this.qualificationType);
      await this.dismissModal();
      this.qualificationService.updateQualificationTypeInfoModal(this.qualificationType);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification Type has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification Type has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

}
