import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent implements OnInit {
  @Input() venue: Venue;

  constructor(private modalCtrl: ModalController, public venueService: VenueService) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  addVenue(venue: Venue){
    //search duplicates
    if (this.venueService.matchingVenue(venue) != null){
      console.log("existingVenue: " + venue);
    //display duplicate alert

    //failure alert
    
    return;
    }


    //CallRepoToAdd
    this.venueService.createVenue(venue);
    //dismiss modal
    this.dismissModal();
  }

}
