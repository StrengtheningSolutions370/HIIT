import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';

@Component({
  selector: 'app-view-venue-info',
  templateUrl: './view-venue-info.component.html',
  styleUrls: ['./view-venue-info.component.scss'],
})
export class ViewVenueInfoComponent implements ViewWillEnter {

  @Input() venue: VENUE;
  
  constructor(private modalCtrl: ModalController, public fb:FormBuilder) { 
  }

  ionViewWillEnter() {
    console.log("viewSpecificVenue-ViewWillEnter");
    console.log(this.venue);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

