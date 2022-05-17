import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent implements OnInit {
  @Input() venue: VENUE;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  addVenue(venue: VENUE){
    //search duplicates

    //display duplicate alert

    //failure alert

    //dismiss modal
  }

}
