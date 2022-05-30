import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent {
  @Input() choice: number;
  @Input() venue: Venue;

  constructor(public venueService: VenueService, public global: GlobalService) {
   }

  //1 = confirm ADD
  //2 = confirm UPDATE

  async checkMatch(name:string, address:string): Promise<boolean>{
   return this.venueService.matchingVenue(name,address).then(result => {
     console.log(result);
      if (result != 0){
        this.global.showAlert("The Venue information entered already exists on the system","Venue Already Exists");
        return true;
      } else {
        return false;
      }
    });
  }

  confirmChanges(venue: Venue){
    console.log(venue);
    this.checkMatch(venue.name,venue.address).then(result =>{
      console.log(result);
      if (result == true){
        return;       
      } else {
        if (this.choice === 1){
            console.log('Add Venue from confirm:');
            //CallRepoToCreate
            this.venueService.createVenue(venue);
            this.global.showToast("The Title has been successfully added!");
        } else if (this.choice === 2){
            console.log('Update Venue from confirm:');
            //CallRepoToUpdate
            this.venueService.updateVenue(venue.venueID,venue);
            this.global.showToast("The Title has been successfully updated!");
        }
      }
          //dismiss modal
          this.global.dismissModal();
    }); 

  }

  returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.venue);
      this.global.dismissModal();
      this.venueService.addVenueInfoModal(this.venue);
    } else if (this.choice === 2){
      console.log(this.venue);
      this.global.dismissModal();
      this.venueService.updateVenueInfoModal(this.venue);
    }
  }

}
