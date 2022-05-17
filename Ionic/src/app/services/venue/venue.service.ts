import { Injectable } from '@angular/core';
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
  private venueList: Venue[] = [];
  private tempVenueList: [];
  private tempVenue: Venue;

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    this.repo.getVenues().subscribe(result =>{
      console.log(result);
      this.tempVenueList = [];
      this.tempVenueList = Object.assign(result);
      console.log(this.tempVenueList);
      this.tempVenueList.forEach(element => {
        this.tempVenue = new Venue();
        
        this.tempVenue.venueID = element['venueID'];        
        this.tempVenue.name = element['name'];
        this.tempVenue.address = element['address'];
        this.tempVenue.postalCode = element['postalCode'];
        this.tempVenue.capacity = element['capacity'];
        this.tempVenue.schedules = element['schedules'];
        console.log(this.tempVenue);
        this.venueList.push(this.tempVenue);
      });
      console.log('VenueService: subscribe -GetVenue()',this.venueList);
    } );
   }

   getVenues(): Venue[] {
    return this.venueList;
   }

   createVenue(venue:any){
     console.log('venueService: Repo-Createvenue');
     console.log(venue);
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

  async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AddVenueComponent
    });
    await modal.present();
  }

  async updateVenueInfoModal(venue: Venue) {
    console.log("VenueService: UpdateVenueModalCall");
    this.tempVenue = new Venue();
    this.tempVenue = Object.assign(venue);
    console.log(this.tempVenue);
    const modal = await this.modalCtrl.create({
      component: UpdateVenueComponent,
      componentProps:{
        venue:this.tempVenue
      }
    });
    await modal.present();
  }

  //just testing 

  async deleteVenueInfoModal(venue: Venue) {
    console.log("VenueService: DeleteVenueModalCall");
    this.tempVenue = new Venue();
    this.tempVenue = Object.assign(venue);
    console.log(this.tempVenue);
    if (this.tempVenue.schedules.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeVenueComponent,
          componentProps: {
            venue: this.tempVenue
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteVenueComponent,
          componentProps: {
            venue: this.tempVenue
        }
      });
      await modal.present();
    }

  }

  async viewVenueInfoModal(venue: Venue) {
    console.log("VenueService: ViewVenueModalCall");
    this.tempVenue = new Venue();
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

  async confirmVenueModal(venue: Venue) {
    console.log('VenueService: ConfirmVenueModalCall');
    this.tempVenue = new Venue();
    this.tempVenue = Object.assign(venue);
    console.log(this.tempVenue);
    const modal = await this.modalCtrl.create({
      component: ConfirmVenueComponent,
      componentProps: {
        venue:this.tempVenue
      }
    });
    await modal.present();
  }
}
