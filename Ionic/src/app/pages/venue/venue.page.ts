import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements ViewWillEnter {

  //Creating a local search string to be called from the search bar.
  searchTerm: string;

  //Calling the venue service.
  constructor(public venueService: VenueService) { }

  ionViewWillEnter() {
  }

}
