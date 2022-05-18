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

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  modalData: any;
  //Creating a venueList for all the venues in the service.
  private _venueList: Venue[] = [];

  get venueList():Venue[]{
    return this._venueList;
  }


  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) { 
    this.repo.getVenues().subscribe(result => {
      console.log("NGONINIT- Venue Service: GetVenues");
      console.log(result);
      result.forEach(element => {
        let tempVenue = new Venue();        
        tempVenue.venueID = element['venueID'];        
        tempVenue.name = element['name'];
        tempVenue.address = element['address'];
        tempVenue.postalCode = element['postalCode'];
        tempVenue.capacity = element['capacity'];
        tempVenue.schedules = element['schedules'];
        console.log(tempVenue);
        this.venueList.push(tempVenue);
      //Calling the venues from the repo and API, to populate the venueList within the venue service.
      });
    })
  }

   createVenue(venue:any){
     console.log('venueService: Repo-Createvenue');
     console.log(JSON.stringify(venue));
   //Add a venue to the venue list within the venue service.
     this.repo.createVenue(venue).subscribe(res=> {
       console.log(res);
     });
   }

   updateVenue(venue:any){
     console.log('venueService: Repo-UpdateVenue');
     console.log(venue);
     this.repo.updateVenue(venue['venueID'],venue).subscribe(result =>
  //Receives a venue to update in the venue list within the venue service.
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
    // modal.onDidDismiss().then((venue) => {
    //   if (venue !== null){
    //     this.venueList = this.venueList.push(venue);
    //     console.log('Modal Data: ' +this.modalData.data);
    //   }
    // });
    await modal.present();
  }

  //Display the update venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async updateVenueInfoModal(venue: Venue) {
    console.log("VenueService: UpdateVenueModalCall");
    let tempVenue = new Venue();
    tempVenue = Object.assign(venue);
    console.log(tempVenue);
    const modal = await this.modalCtrl.create({
      component: UpdateVenueComponent,
      componentProps:{
        venue:tempVenue
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
      await modal.present();
    }

  }

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

  //Display venue information modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async confirmVenueModal(venue: Venue) {
    console.log('VenueService: ConfirmVenueModalCall');
    let tempVenue = new Venue();
    tempVenue = Object.assign(venue);
    console.log(tempVenue);
    const modal = await this.modalCtrl.create({
      component: ConfirmVenueComponent,
      componentProps: {
        venue:tempVenue
      }
    });
    return await modal.present();
  }

}
