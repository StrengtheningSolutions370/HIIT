/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-update-venue',
  templateUrl: './update-venue.component.html',
  styleUrls: ['./update-venue.component.scss'],
})
export class UpdateVenueComponent implements ViewWillEnter {
  @Input() venue: Venue;

  uVenueForm: FormGroup = new FormGroup({
    venueName: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}')]),
    capacity: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public venueService: VenueService, private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uVenueForm.controls;
  }

  ionViewWillEnter() {
      console.log('UpdateVenue-ViewWillEnter');
      console.log(this.venue);
      this.uVenueForm.controls.venueName.setValue(this.venue.name);
      this.uVenueForm.controls.location.setValue(this.venue.address);
      this.uVenueForm.controls.postalCode.setValue(this.venue.postalCode);
      this.uVenueForm.controls.capacity.setValue(this.venue.capacity);
    //Populate the update venue form with the values received from the selected venue object in the main page.
  }

  submitForm() {
    if (!this.uVenueForm.valid) { //If the form has any validation errors, the form will not be submitted.
    if (!this.uVenueForm.valid){
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      let temp = new Venue();
      const choice = 2;
      temp = {
        venueID: this.venue.venueID,
        name: this.uVenueForm.value['venueName'],
        address: this.uVenueForm.value['location'],
        postalCode: this.uVenueForm.value['postalCode'],
        capacity: this.uVenueForm.value['capacity'],
        schedules: []
      };
       this.venueService.confirmVenueModal(choice,temp);
       this.dismissModal();
    }
  }
}

   async sucUpdate() {
     const toast = await this.toastCtrl.create({
       message: 'The Venue has been successfully updated!',
       duration: 2000,
       position : 'top'
     });
     toast.present();
   }

  dismissModal() {
    this.modalCtrl.dismiss(this.venue);
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
       header: 'Venue Already Exists',
       message: 'The Venue Information entered already exists on the system',
       buttons: ['OK']
     });
    alert.present();
  }

   async FailureAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Could not update venue',
       subHeader : 'There was an error updating the venue. Please try again',
       //Enter SQL Code Error here
       message: 'SQL Code Error',
       buttons: ['OK']
     });
     alert.present();
   }
}

