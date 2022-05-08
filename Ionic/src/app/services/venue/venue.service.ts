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
  private venueList: VENUE[] = [];
  private tempVenueList: [];
  private tempVenue: VENUE;
  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
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
        console.log(this.tempVenue);
        this.venueList.push(this.tempVenue);
      });
    } );
   }

   getVenues(): VENUE[] {
    return this.venueList;
   }

   createVenue(venue:any){
     console.log("venueService: Createvenue:");
     console.log(venue);
     this.repo.createVenue(venue).subscribe(res=> {
       console.log(res);
     });

   }

   updateVenue(venue:any){
     console.log("venueService: UpdateVenue");
     console.log(venue);
     this.repo.updateVenue(venue['VENUE_ID'],venue).subscribe(result =>
      console.log(result));
   }

   deleteVenue(id:number){
     console.log("venueService: Delete")
     this.repo.deleteVenue(id).subscribe(result =>
      console.log(result));
   }

  async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AddVenueComponent
    });
    await modal.present();
  }

  async updateVenueInfoModal(venue: VENUE) {
    this.tempVenue = Object.assign(venue);
    const modal = await this.modalCtrl.create({
      component: UpdateVenueComponent,
      componentProps:{
        venue:this.tempVenue
      }
    });
    await modal.present();
  }

  async deleteVenueInfoModal(venue: VENUE) {
    this.tempVenue = Object.assign(venue);
    const modal = await this.modalCtrl.create({
      component: DeleteVenueComponent, 
      componentProps: {
        componentProps: {
          venue:this.tempVenue
        }
      }
    });
    await modal.present();
  }

  async viewVenueInfoModal(venue: VENUE) {
    this.tempVenue = Object.assign(venue);
    const modal = await this.modalCtrl.create({
      component: ViewVenueInfoComponent,
      componentProps: {
        componentProps: {
          venue:this.tempVenue
        }
      }
    });
    await modal.present();
  }
}
