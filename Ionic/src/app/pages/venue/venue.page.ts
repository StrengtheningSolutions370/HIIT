import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements ViewWillEnter {
<<<<<<< HEAD
<<<<<<< HEAD
  filter: string;
  venueList: any=[] = [];

  constructor(public venueService: VenueService) { }

  ionViewWillEnter() {
   this.venueList = this.venueService.getVenues();
  }

  onSearchChange($event){
    

  venue: VENUE[] = [];
  searchInput = document.getElementById("searchInput");
  //searchQuery = new BehaviorSubject();
  constructor(public venueService: VenueService) { }
  ionViewWillEnter(): void {
    this.venue = this.venueService.getVenues();
  }

  searchVenue(){

>>>>>>> 210e6104c69c01c3b2d0f7b12246d9003743a40c
=======
  filter: string;
  venueList: any[] = [];

  constructor(public venueService: VenueService) { }
  ionViewWillEnter(): void {
    this.venueList = this.venueService.getVenues();
>>>>>>> 490d704a8bda42f6f4c89130e0b645d7d4e1c4c4
  }
}
