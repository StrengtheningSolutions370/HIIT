import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { VENUE } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements ViewWillEnter {
<<<<<<< HEAD
  Filter: string;
  venueList: any=[] = [];

  constructor(public venueService: VenueService) { }
  ionViewWillEnter() {
   this.venueList = this.venueService.getVenues();
  }

  onSearchChange($event){
    
=======
  venue: VENUE[] = [];
  searchInput = document.getElementById("searchInput");
  //searchQuery = new BehaviorSubject();
  constructor(public venueService: VenueService) { }
  ionViewWillEnter(): void {
    this.venue = this.venueService.getVenues();
  }

  searchVenue(){

>>>>>>> 210e6104c69c01c3b2d0f7b12246d9003743a40c
  }
}
