import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements ViewWillEnter {
  Filter: string;
  venueList: any=[] = [];

  constructor(public venueService: VenueService) { }
  ionViewWillEnter() {
   this.venueList = this.venueService.getVenues();
  }

  onSearchChange($event){
    
  }
}
