import { Component, OnInit, ViewChild } from '@angular/core';
import { VenueService } from 'src/app/services/venue/venue.service';
import { VENUE } from '../../models/venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {

  constructor(public venueService: VenueService) { }

  ngOnInit() {
    console.log();
  }

}
