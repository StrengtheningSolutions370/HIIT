/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { AddVenueComponent } from 'src/app/pages/venue/add-venue/add-venue.component';
import { DeleteVenueComponent } from 'src/app/pages/venue/delete-venue/delete-venue.component';
import { UpdateVenueComponent } from 'src/app/pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from 'src/app/pages/venue/view-venue-info/view-venue-info.component';
import { ConfirmVenueComponent } from 'src/app/pages/venue/confirm-venue/confirm-venue.component';
import { AssociativeVenueComponent } from 'src/app/pages/venue/associative-venue/associative-venue.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VenueService {

  //Creating a venueList for all the venues in the service.
  private _venueList = new BehaviorSubject<Venue[]>([]);

  //Return the venue list as an observable.
  public get venueList(){
    return this._venueList.asObservable();
  }

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Receive the venues from the repo (API).
    this.repo.getVenues().subscribe(result => {
      console.log('Venue List: Venue Service -> Get Venues');
      console.log(result);

      var tempResult = Object.assign(result);
      this._venueList.next(tempResult);

      console.log('Venue List: Venue Service -> Updated Venues');
      console.log(this._venueList);
    })
  }

  //Methods
  //Add a venue to the venue list within the venue service.
   createVenue(venue: any){
     console.log('venueService: Repo -> Create Venue');
     console.log(JSON.stringify(venue));
     this.repo.createVenue(venue).subscribe(res=> {
      var tempResult = Object.assign(res);
      console.log("Venue Service: Create venue");
      console.log(res);
      this._venueList.next(tempResult.data);
     });
   }

  //Receives a venue to update in the service venue list.
   updateVenue(id,venue: any){
     console.log('venueService: Repo -> Update Venue');
     console.log(venue);

     const currentVenue = this._venueList.value;
     const index = currentVenue.findIndex(x => x.venueID === id)
     this.repo.updateVenue(venue.venueID,venue).subscribe(result =>
      console.log(result));
   }

  //Receives a venue to delete in the service venue list.
   deleteVenue(id: number){
     this.repo.deleteVenue(id).subscribe(result =>
      console.log(result));
   }

   matchingVenue(input: string){
    console.log('venueService: Repo -> Matching Venue');
    this.repo.getMatchVenue(input);
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
    let tempVenue = new Venue();
    tempVenue = Object.assign(venue);
    console.log(tempVenue);
    if (tempVenue.schedules!= null && tempVenue.schedules.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeVenueComponent,
          componentProps: {
            venue: tempVenue
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteVenueComponent,
          componentProps: {
            venue: tempVenue
        }
      });

      //Update the current venue list with the venue list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getVenues().subscribe(result => {
          var tempResult = Object.assign(result);
          this._venueList.next(tempResult);
          console.log("Updated venue list: Venue Service: delete venue");
          console.log(this._venueList);
        });
      });
      await modal.present();
    }
  }

  //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async viewVenueInfoModal(venue: Venue) {
    console.log("VenueService: ViewVenueModalCall");
    let tempVenue = new Venue();
    tempVenue = Object.assign(venue);
    console.log(tempVenue);
    const modal = await this.modalCtrl.create({
      component: ViewVenueInfoComponent,
      componentProps: {
        venue:tempVenue
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected venue from the venue page
  async confirmVenueModal(selection: number, venue: any) {
    console.log('VenueService: ConfirmVenueModalCall');
    console.log(selection);
    if(selection === 1){
      console.log("Performing ADD");
      let tempVenue = new Venue();
      tempVenue.venueID = 0;
      tempVenue = Object.assign(venue);
      console.log(tempVenue);
      const modal = await this.modalCtrl.create({
        component: ConfirmVenueComponent,
        componentProps: {
          venue:tempVenue,
          choice:selection
        }
      });

      //Update the current venue list with the venue list from the confirm modal.
      modal.onDidDismiss().then(() => {
        this.repo.getVenues().subscribe(result => {
          var tempResult = Object.assign(result);
          this._venueList.next(tempResult);
          console.log("Updated venue list: Venue Service: ADD confirm venue");
          console.log(this._venueList);
        });
      });
      await modal.present();
    } else if (selection === 2){
      console.log("Performing UPDATE");
      let tempVenue = new Venue();
      tempVenue = Object.assign(venue);
      console.log(tempVenue);
      const modal = await this.modalCtrl.create({
        component: ConfirmVenueComponent,
        componentProps: {
          venue:tempVenue,
          choice:selection
        }
      });
      modal.onDidDismiss().then(() => {
        this.repo.getVenues().subscribe(result => {
          var tempResult = Object.assign(result);
          this._venueList.next(tempResult);
          console.log("Updated venue list: Venue Service: Update confirm venue");
          console.log(this._venueList);
        });
      });
      await modal.present();
    } else {
      console.log("BadOption: " + selection)
    }
  }
}
