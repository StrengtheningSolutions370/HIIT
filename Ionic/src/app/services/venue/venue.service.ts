/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { AddVenueComponent } from 'src/app/pages/venue/add-venue/add-venue.component';
import { DeleteVenueComponent } from 'src/app/pages/venue/delete-venue/delete-venue.component';
import { UpdateVenueComponent } from 'src/app/pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from 'src/app/pages/venue/view-venue-info/view-venue-info.component';
import { ConfirmVenueComponent } from 'src/app/pages/venue/confirm-venue/confirm-venue.component';
import { AssociativeVenueComponent } from 'src/app/pages/venue/associative-venue/associative-venue.component';
import { RepoService } from '../repo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VenueService {

  @Output() fetchVenuesEvent = new EventEmitter<Venue>();


  constructor(public repo: RepoService, private modalCtrl: ModalController) {
    //Receive the venues from the repo (API).
    this.getAllVenues();
  }

  getAllVenues(): Observable<any> {
    return this.repo.getVenues();
  }

  //Methods
  //Add a venue to the venue list within the venue service.
   createVenue(venue: any){
    this.repo.createVenue(venue).subscribe(
      {
        next: () => {
          console.log('VENUE CREATED');
          this.fetchVenuesEvent.emit(venue);
        }
      }
    )
   }

  //Receives a venue to update in the service venue list.
   updateVenue(id: number,venue: any){
     if (id !== venue.venueID){
       console.log("ERROR IN VENUE UPDATE - MISMATCH ID");
       return;
     }
    return this.repo.updateVenue(id,venue).subscribe(
      {
       next: () => {
         console.log('VENUE UPDATED');
         this.fetchVenuesEvent.emit(venue);
       }
      }
    )
   }

  //Receives a venue to delete in the service venue list.
   deleteVenue(id: number){
    this.repo.deleteVenue(id).subscribe(result => {
      console.log('VENUE DELETED');
      this.fetchVenuesEvent.emit();
    });
   }



   matchingVenue(name: string, address:string): Promise<any>{
    return this.repo.getMatchVenue(name,address).toPromise();
   }

   existingVenue(id: number){
    console.log('venueService: Repo -> Existing Venue');
    this.repo.existsVenue(id).subscribe(result =>
     console.log(result));
   }

  //Modals
  async addVenueInfoModal(venue?: Venue) {
    const modal = await this.modalCtrl.create({
      component: AddVenueComponent,
      componentProps:{
        venue
      }
    });
    await modal.present();
  }

  //Display the update venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async updateVenueInfoModal(venue: Venue) {
    console.log("VenueService: UpdateVenueModalCall");
    const modal = await this.modalCtrl.create({
      component: UpdateVenueComponent,
      componentProps:{
        venue
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async deleteVenueInfoModal(venue: Venue) {
    console.log("VenueService: DeleteVenueModalCall");
    if (venue.schedules!= null && venue.schedules.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeVenueComponent,
          componentProps: {
            venue
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteVenueComponent,
          componentProps: {
            venue
        }
      });
      await modal.present();
    }
  }

  //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async viewVenueInfoModal(venue: Venue) {
    console.log("VenueService: ViewVenueModalCall");
    const modal = await this.modalCtrl.create({
      component: ViewVenueInfoComponent,
      componentProps: {
        venue
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected venue from the venue page
  async confirmVenueModal(choice: number, venue: any) {
    console.log('VenueService: ConfirmVenueModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      const modal = await this.modalCtrl.create({
        component: ConfirmVenueComponent,
        componentProps: {
          venue,
          choice
        }
      });
      await modal.present();
    } else if (choice === 2){
      console.log("Performing UPDATE");
      const modal = await this.modalCtrl.create({
        component: ConfirmVenueComponent,
        componentProps: {
          venue,
          choice
        }
      });
      await modal.present();
    } else {
      console.log("BadOption: " + choice)
    }
  }

  async associativeVenueModal(venue: Venue) {
    console.log("VenueService: AssociativeModalCall");
    const modal = await this.modalCtrl.create({
      component: AssociativeVenueComponent,
      componentProps: {
        venue
      }
    });
    await modal.present();
  }
}
