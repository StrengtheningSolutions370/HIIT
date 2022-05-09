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
  venue: VENUE[] = [];
  searchInput = document.getElementById("searchInput");
  //searchQuery = new BehaviorSubject();
  constructor(public venueService: VenueService) { }
  ionViewWillEnter(): void {
    this.venue = this.venueService.getVenues();
  }

  searchVenue(){

  }
}
