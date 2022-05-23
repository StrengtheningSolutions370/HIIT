import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

@Component({
  selector: 'app-update-qtype',
  templateUrl: './update-qtype.component.html',
  styleUrls: ['./update-qtype.component.scss'],
})
export class UpdateQtypeComponent implements ViewWillEnter {

  @Input() qualificationType: QualificationType;

  uQTypeForm: FormGroup = new FormGroup({
    qualificationTypeName: new FormControl('', [Validators.required])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public qualificationService: QualificationService, private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uQTypeForm.controls;
  }

  ionViewWillEnter() {
      console.log('UpdateQualificationType-ViewWillEnter');
      console.log(this.qualificationType);
      this.uQTypeForm.controls.qualificationTypeName.setValue(this.qualificationType.name)
    //Populate the update qualification type form with the values received from the selected qualification type object in the main page.
  }

  submitForm() {
    if (!this.uQTypeForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      var temp = new QualificationType();
      const choice = 2;
      temp = {
        qualificationTypeID: this.qualificationType.qualificationTypeID,
        name: this.uQTypeForm.value['qualificationTypeName'],
        qualifications: []
      };
        console.log(temp);
       this.qualificationService.confirmQualificationTypeModal(choice,temp);
       this.dismissModal();
    }
}

   async sucUpdate() {
     const toast = await this.toastCtrl.create({
       message: 'The Qualification Type has been successfully updated!',
       duration: 2000,
       position : 'top'
     });
     toast.present();
   }

  dismissModal() {
    this.modalCtrl.dismiss(this.qualificationType);
  }

   async InvalidAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Invalid Input',
       message: 'Please provide all required fields and ensure that the information is in the correct format',
       buttons: ['OK']
     });
     alert.present();
   }

   async DuplicateAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Qualification Type Already Exists',
       message: 'The Qualification Type Information entered already exists on the system',
       buttons: ['OK']
     });
    alert.present();
  }

   async FailureAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Could not update qualification type',
       subHeader : 'There was an error updating the qualification type. Please try again',
       //Enter SQL Code Error here
       message: 'SQL Code Error',
       buttons: ['OK']
     });
     alert.present();
   }

}
