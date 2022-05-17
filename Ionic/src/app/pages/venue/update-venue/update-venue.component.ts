/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { async } from 'rxjs';
import { VENUE } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-update-venue',
  templateUrl: './update-venue.component.html',
  styleUrls: ['./update-venue.component.scss'],
})
export class UpdateVenueComponent implements ViewWillEnter {
  // Receiving the venue object from the main venue page
  @Input() venue: VENUE;

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
    //Populate the update venue form with the values received from the selected venue object in the main page.
    this.uVenueForm.controls.venueName.setValue(this.venue.VENUE_NAME);
    this.uVenueForm.controls.location.setValue(this.venue.VENUE_ADDRESS);
    this.uVenueForm.controls.postalCode.setValue(this.venue.VENUE_POSTAL_CODE);
    this.uVenueForm.controls.capacity.setValue(this.venue.VENUE_CAPACITY);
  }

  submitForm() {
    if (!this.uVenueForm.valid) { //If the form has any validation errors, the form will not be submitted.
    if (!this.uVenueForm.valid){
      console.log('Please provide all required fields');
      // this.InvalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      const temp = new VENUE();
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        temp.VENUE_ID = this.venue.VENUE_ID,
        temp.VENUE_NAME= this.uVenueForm.value.venueName;
        temp.VENUE_ADDRESS = this.uVenueForm.value['location'];
        temp.VENUE_POSTAL_CODE = this.uVenueForm.value['postalCode'];
        temp.VENUE_CAPACITY = this.uVenueForm.value['capacity'];
        this.venueService.confirmVenueModal(temp);
      };
      // this.venueService.updateVenue(temp);
      // this.dismissModal();
      // this.sucUpdate();
      // this.ionViewWillEnter();
    }


  dismissModal(){
    this.modalCtrl.dismiss(this.venue);
  }

  async invalidAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Input',
      message: 'Please provide all required fields and ensure that the information is in the correct format',
      buttons: ['OK']
    });
    alert.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Venue Already Exists',
      message: 'The Venue Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
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

