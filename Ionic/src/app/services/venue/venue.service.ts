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
  private _venueList: Venue[] = [];

  get venueList():Venue[]{
    return this._venueList;
  }

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) { 
    this.repo.getVenues().subscribe(result => {
      console.log("NGONIT- Venue Service: GetVenues");
      console.log(result);
      var tempList = [];
      tempList = Object.assign(result);
      console.log(tempList);
      tempList.forEach(element => {
        let tempVenue = new Venue();        
        tempVenue.venueID = element['venueID'];        
        tempVenue.name = element['name'];
        tempVenue.address = element['address'];
        tempVenue.postalCode = element['postalCode'];
        tempVenue.capacity = element['capacity'];
        tempVenue.schedules = element['schedules'];
        console.log(tempVenue);
        this.venueList.push(tempVenue);
      });
    })
  }

   createVenue(venue:any){
     console.log('venueService: Repo-Createvenue');
     console.log(JSON.stringify(venue));
     this.repo.createVenue(venue).subscribe(res=> {
       console.log(res);
     });
   }

   updateVenue(venue:any){
     console.log('venueService: Repo-UpdateVenue');
     console.log(venue);
     this.repo.updateVenue(venue['venueID'],venue).subscribe(result =>
      console.log(result));
   }

   deleteVenue(id: number){
     console.log('venueService: Repo-DeleteVenue');
     this.repo.deleteVenue(id).subscribe(result =>
      console.log(result));
   }

   matchingVenue(venue:any){
     
   }

   existingVenue(id:number){
    console.log('venueService: Repo-ExistingVenue');
    this.repo.exists(id).subscribe(result =>
     console.log(result));
   } 

   //Modals

  async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AddVenueComponent
    });
    await modal.present();
  }

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
    await modal.present();
  }
}
