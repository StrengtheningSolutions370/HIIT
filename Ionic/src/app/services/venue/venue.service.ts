/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';
import { AddVenueComponent } from 'src/app/pages/venue/add-venue/add-venue.component';
import { DeleteVenueComponent } from 'src/app/pages/venue/delete-venue/delete-venue.component';
import { UpdateVenueComponent } from 'src/app/pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from 'src/app/pages/venue/view-venue-info/view-venue-info.component';
import { RepoService } from '../repo.service';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  //Creating a venueList for all the venues in the service.
  private venueList: VENUE[] = [];

  //Creating a temporary venue list to be used within the service.
  private tempVenueList: [];

  //Creating a temporary single venue to be used within the service.
  private tempVenue: VENUE;

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Calling the venues from the repo and API, to populate the venueList within the venue service.
    this.repo.getVenues().subscribe(result =>{
      this.venueList = [];
      this.tempVenueList = [];
      this.tempVenueList = Object.assign(result);
      this.tempVenueList.forEach(element => {
        this.tempVenue = new VENUE();
        this.tempVenue.SCHEDULEs = element['SCHEDULEs'];
        this.tempVenue.VENUE_ID = element['VENUE_ID'];
        this.tempVenue.VENUE_NAME = element['VENUE_NAME'];
        this.tempVenue.VENUE_ADDRESS = element['VENUE_ADDRESS'];
        this.tempVenue.VENUE_POSTAL_CODE = element['VENUE_POSTAL_CODE'];
        this.tempVenue.VENUE_CAPACITY = element['VENUE_CAPACITY'];
        this.venueList.push(this.tempVenue);
      });
    });
   }

   //Return the list of venues in the venue service.
   getVenues(): VENUE[] {
    return this.venueList;
   }

   //Add a venue to the venue list within the venue service.
   createVenue(venue: any){
     this.repo.createVenue(venue).subscribe(res=> {
       console.log(res);
     });
   }

  //Receives a venue to update in the venue list within the venue service.
   updateVenue(venue: any){
     this.repo.updateVenue(venue['VENUE_ID'],venue).subscribe(result =>
      console.log(result));
   }

  //Receives a venue to delete in the venue list within the venue service.
   deleteVenue(id: number){
     this.repo.deleteVenue(id).subscribe(result =>
      console.log(result));
   }

  //Display the add venue modal.
  async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AddVenueComponent
    });
    await modal.present();
  }

  //Display the update venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async updateVenueInfoModal(venue: VENUE) {
    this.tempVenue = new VENUE();
    this.tempVenue = Object.assign(venue);
    const modal = await this.modalCtrl.create({
      component: UpdateVenueComponent,
      componentProps:{
        venue:this.tempVenue
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async deleteVenueInfoModal(venue: VENUE) {
    console.log("VenueService: DeleteVenueModalCall");
    this.tempVenue = new VENUE();
    this.tempVenue = Object.assign(venue);
    console.log(this.tempVenue);
    console.log( this.tempVenue);
    const modal = await this.modalCtrl.create({
      component: DeleteVenueComponent,
        componentProps: {
          venue: this.tempVenue
      }
    });
    await modal.present();
  }

  //Display venue information modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async viewVenueInfoModal(venue: VENUE) {
    console.log("VenueService: ViewVenueModalCall");
    this.tempVenue = new VENUE();
    this.tempVenue = Object.assign(venue);
    console.log(this.tempVenue);
    const modal = await this.modalCtrl.create({
      component: ViewVenueInfoComponent,
      componentProps: {
        venue:this.tempVenue
      }
    });
    await modal.present();
  }

}
