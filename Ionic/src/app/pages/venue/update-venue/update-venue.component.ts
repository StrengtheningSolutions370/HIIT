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
    postalCode: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
    capacity: new FormControl('', [Validators.required, Validators.max(120), Validators.min(1)])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public venueService: VenueService, private alertCtrl : AlertController) { }

  get errorControl() {
    return this.uVenueForm.controls;
  }

  ionViewWillEnter() {
      console.log("UpdateVenue-ViewWillEnter");
      console.log(this.venue);
      this.uVenueForm.controls.venueName.setValue(this.venue.name);
      this.uVenueForm.controls.location.setValue(this.venue.address);
      this.uVenueForm.controls.postalCode.setValue(this.venue.postalCode);
      this.uVenueForm.controls.capacity.setValue(this.venue.capacity);
  }

  

  submitForm() {
    if (!this.uVenueForm.valid){
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }else
    //if
    //test here for duplicate entry in the database
    //display duplicateAlert
    //else statement
    {
      console.log('InsideUpdateSubmit:');
      var temp = {
        VenueID: this.venue.venueID,
        Name: this.uVenueForm.value['venueName'],
        Address: this.uVenueForm.value['location'],
        PostalCode: this.uVenueForm.value['postalCode'],
        Capacity: this.uVenueForm.value['capacity']        
      };
      this.venueService.updateVenue(temp);
      this.dismissModal();
      this.sucUpdate();
      this.ionViewWillEnter();
    }
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Venue has been successfully updated!',
      duration: 2000
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
