/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
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
    postalCode: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
    capacity: new FormControl('', [Validators.required, Validators.max(12), Validators.min(0)])
  });

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController, public fb: FormBuilder,
    public venueService: VenueService) { }

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
      return false;
    } else {
      //Creating the temporary record to be sent the createVenue() method in the Venue Service.
      const temp = {
        VENUE_ID: this.venue.VENUE_ID,
        VENUE_NAME: this.uVenueForm.value['venueName'],
        VENUE_ADDRESS: this.uVenueForm.value['location'],
        VENUE_POSTAL_CODE: this.uVenueForm.value['postalCode'],
        VENUE_CAPACITY: this.uVenueForm.value['capacity']
      };
      this.venueService.updateVenue(temp);
      this.dismissModal();
      this.sucUpdate();
      this.ionViewWillEnter();
    }
  }

  async sucUpdate() {
    const toast = await this.alertCtrl.create({
      //what message should display
      message: 'The Venue has been successfully updated!',
      //how long should the message be present
      duration: 2000
    });
    //display the toast notification
    toast.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss(this.venue);
  }
}
