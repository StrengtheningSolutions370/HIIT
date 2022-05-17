import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements ViewWillEnter {
  filter: string;
  venueList: any[] = [];

  constructor(public venueService: VenueService) { }
  
  ionViewWillEnter(): void {
    this.venueList = this.venueService.getVenues();
    console.log(this.venueList);
  }
}
