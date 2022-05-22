import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.scss'],
})
export class UpdateTitleComponent {
  @Input() title: Title;

  uTitleForm: FormGroup = new FormGroup({
    titleDescription: new FormControl('', [Validators.required])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public titleService: TitleService, private alertCtrl: AlertController) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uTitleForm.controls;
  }

  ionViewWillEnter() {
    console.log('UpdateVenue-ViewWillEnter');
    console.log(this.title);
    this.uTitleForm.controls.venueName.setValue(this.title.description);
    //Populate the update ttile form with the values received from the selected title object in the main page.
  }

  submitForm() {
    if (!this.uTitleForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      var temp = new Title();
      const choice = 2;
      temp = {
        titleID: this.title.titleID,
        description: this.uTitleForm.value['titleDescription'],
        users: []
      };
        console.log(temp);
       this.titleService.confirmTitleModal(choice,temp);
       this.dismissModal();
    }
}

   async sucUpdate() {
     const toast = await this.toastCtrl.create({
       message: 'The Title has been successfully updated!',
       duration: 2000,
       position : 'top'
     });
     toast.present();
   }

  dismissModal() {
    this.modalCtrl.dismiss(this.title);
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
       header: 'Title Already Exists',
       message: 'The Title Information entered already exists on the system',
       buttons: ['OK']
     });
    alert.present();
  }

   async FailureAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Could not update title',
       subHeader : 'There was an error updating the title. Please try again',
       //Enter SQL Code Error here
       message: 'SQL Code Error',
       buttons: ['OK']
     });
     alert.present();
   }
}
