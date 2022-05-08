import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { VenueService } from '../services/venue/venue.service';
import { venue } from '../models/venue';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})

export class VenuesPage {

  venueArr : venue[] = [];

  // venues = [
  //   {
  //     name : 'Strength Center',
  //     location : '4819 Sadle Road, Lanseria , Johannesburg',
  //     postalCode : 1945,
  //     capacity : 45
  //   },
  //   {
  //     name : 'Body Sculpting Studio',
  //     location : '42 Babiana Avenue, Sandton, Johannesburg',
  //     postalCode : 1769,
  //     capacity : 15
  //   },
  //   {
  //     name : 'Power Zone',
  //     location : '12 Melbos Avenue, Roodepoort, Johannesburg',
  //     postalCode : 1789,
  //     capacity : 30
  //   },
  //   {
  //     name : 'Cardio Circuit',
  //     location : '12 Shandon Avenue, Noordheuwel, Johannesburg',
  //     postalCode : 1744,
  //     capacity : 25
  //   }
  // ];

  constructor(private modalCtrl: ModalController, public venueServ: VenueService) { }

}
