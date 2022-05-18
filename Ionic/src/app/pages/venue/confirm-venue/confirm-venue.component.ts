import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent {
  @Input() choice: number;
  @Input() venue: Venue;

  constructor(private modalCtrl: ModalController, public venueService: VenueService, public router: Router, public activated: ActivatedRoute) {
   }

 async dismissModal() {
    await this.router.navigate(['../venues'],{relativeTo:this.activated})
    this.modalCtrl.dismiss();
    
  };
  //1 = confirm ADD
  //2 = confirm UPDATE
  confirmChanges(venue: Venue){
    console.log(this.choice);
    if (this.choice == 1){
      //search duplicates
      if (this.venueService.matchingVenue(venue.address) != null || this.venueService.matchingVenue(venue.name) != null)
      {
        console.log("existing Venue: " + venue.address + " <-Address ++ Name -> " + venue.name);
        //display duplicate alert

        //failure alert
        return;
      }  
      
      
      else {
        console.log("Add Venue from confirm:");
        //CallRepoToCreate
        this.venueService.createVenue(venue);
      }

    } else if (this.choice == 2){
      console.log("Update Venue from confirm:");
      //CallRepoToUpdate
      this.venueService.updateVenue(venue);
    }

    //dismiss modal
    this.dismissModal();
  }

  returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice == 1){
      console.log(this.venue);
      this.dismissModal();
      this.venueService.addVenueInfoModal(this.venue);
    }
    
  }

}
