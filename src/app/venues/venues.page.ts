import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddVenueComponent } from './add-venue/add-venue.component';
import { DeleteVenueComponent } from './delete-venue/delete-venue.component';
import { UpdateVenueComponent} from './update-venue/update-venue.component';
import { ViewVenueInfoComponent} from './view-venue-info/view-venue-info.component';
import { ConfirmVenueComponent} from './confirm-venue/confirm-venue.component';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage {

  venues = [
    {
      name : 'Strength Center',
      location : '4819 Sadle Road, Lanseria , Johannesburg',
      postalCode : 1945,
      capacity : 45
    },
    {
      name : 'Body Sculpting Studio',
      location : '42 Babiana Avenue, Sandton, Johannesburg',
      postalCode : 1769,
      capacity : 15
    },
    {
      name : 'Power Zone',
      location : '12 Melbos Avenue, Roodepoort, Johannesburg',
      postalCode : 1789,
      capacity : 30
    },
    {
      name : 'Cardio Circuit',
      location : '12 Shandon Avenue, Noordheuwel, Johannesburg',
      postalCode : 1744,
      capacity : 25
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  async addVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component : AddVenueComponent
    });
    await modal.present();

  }

  async updateVenueInfoModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateVenueComponent
    });
    await modal.present();
  }

  async deleteVenueInfoModal() {
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
