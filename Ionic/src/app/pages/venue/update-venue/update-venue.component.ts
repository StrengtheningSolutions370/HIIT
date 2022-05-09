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
  @Input() venue: VENUE;
  
  uVenueForm: FormGroup = new FormGroup({
    venueName: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
    capacity: new FormControl('', [Validators.required, Validators.max(12), Validators.min(0)])
  });

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController, public fb: FormBuilder,
    public venueService: VenueService) { }

  get errorControl() {
    return this.uVenueForm.controls;
  }

  ionViewWillEnter() {
      console.log("UpdateVenue-ViewWillEnter");
      console.log(this.venue);
      this.uVenueForm.controls.venueName.setValue(this.venue.VENUE_NAME);
      this.uVenueForm.controls.location.setValue(this.venue.VENUE_ADDRESS);
      this.uVenueForm.controls.postalCode.setValue(this.venue.VENUE_POSTAL_CODE);
      this.uVenueForm.controls.capacity.setValue(this.venue.VENUE_CAPACITY);
  }

  

  submitForm() {
    if (!this.uVenueForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      console.log('InsideUpdateSubmit:');
      var temp = {
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
