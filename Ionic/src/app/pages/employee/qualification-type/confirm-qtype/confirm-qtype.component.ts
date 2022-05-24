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
    public router: Router, public activated: ActivatedRoute) {
   }

  //1 = confirm ADD
  //2 = confirm UPDATE
  confirmChanges(qualificationType: QualificationType){
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
        this.qualificationService.createQualificationType(qualificationType);
      }

    } else if (this.choice === 2){
      console.log('Update Qualification Type from confirm:');
      //CallRepoToUpdate
      this.qualificationService.updateQualificationType(qualificationType.qualificationTypeID,qualificationType);
    }

    //dismiss modal
    this.dismissModal();
  }

  returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.qualificationType);
      this.dismissModal();
      this.qualificationService.addQualificationTypeInfoModal(this.qualificationType);
    }
  }

  async dismissModal() {
    this.modalCtrl.dismiss();
  };
}
