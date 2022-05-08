import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { venue } from 'src/app/models/venue';
import { RepoService } from '../repo/repo.service';
import { ModalController, ToastController } from '@ionic/angular';
import { AddVenueComponent }from '../../venues/add-venue/add-venue.component'
import { DeleteVenueComponent } from '../../venues/delete-venue/delete-venue.component';
import { UpdateVenueComponent} from '../../venues/update-venue/update-venue.component';
import { ViewVenueInfoComponent} from '../../venues/view-venue-info/view-venue-info.component';
import { ConfirmVenueComponent} from '../../venues/confirm-venue/confirm-venue.component';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private venueList: venue[] = [];
  private tempVenueList: [];
  private tempVenue: venue;
  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    this.repo.getVenues().subscribe(result =>{
      this.venueList = [];
      this.tempVenueList = [];
      this.tempVenueList = Object.assign(result);
      this.tempVenueList.forEach(element => {
        this.tempVenue = new venue();
        this.tempVenue.schedule = element['SCHEDULEs'];
        this.tempVenue.venueID = element['VENUE_ID'];        
        this.tempVenue.venueName = element['VENUE_NAME'];
        this.tempVenue.venueAddress = element['VENUE_ADDRESS'];
        this.tempVenue.venuePostalCode = element['VENUE_POSTAL_CODE'];
        console.log(this.tempVenue);
        this.venueList.push(this.tempVenue);
      });
    } );
   }

   ngOnIt(){       
   } 

   getVenues(): venue[] {
    return this.venueList;
   }

   async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component : AddVenueComponent
    });
    await modal.present();

  }

  async updateVenueInfoModal(venue: venue) {
    const modal = await this.modalCtrl.create({
      component : UpdateVenueComponent,
      componentProps: {
        venue
      }
    });
    await modal.present();
  }

  async deleteVenueInfoModal(venue: venue) {
    const modal = await this.modalCtrl.create({
      component : DeleteVenueComponent
    });
    await modal.present();
  }

  async viewVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component : ViewVenueInfoComponent
    });
    await modal.present();
  }
}
