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

  //Creating a local venueList array in the class to be viewed in the HTML component.
  venueList: any=[] = [];

  //Calling the venue service.
  constructor(public venueService: VenueService) { }

  //Displaying the venue list every time the page is about to be opened. (Ionic page life cycle)
  ionViewWillEnter() {
   this.venueList = this.venueService.getVenues();
  }

}
