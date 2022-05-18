import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {
  filter: string;
  busyLoad: boolean;
  venueList: Venue[] = [];
  venueSub: Subscription;
  constructor(public venueService: VenueService) { }
  
  ngOnInit() {
    this.venueSub = this.venueService.venueList.subscribe(results => {
      this.venueList = results;
      console.log(this.venueList);
    })
  }

}
