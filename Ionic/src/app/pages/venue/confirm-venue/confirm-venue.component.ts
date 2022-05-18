import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent implements OnInit {
  @Input() venue: Venue;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  addVenue(venue: Venue){
    //search duplicates

    //display duplicate alert

    //failure alert

    //dismiss modal
  }

}
