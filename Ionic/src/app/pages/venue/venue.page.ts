import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { RepoService } from 'src/app/services/repo.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search venues.
  filter: string;

  //Create local venue array to be populated onInit.
  venueList: Venue[] = [];

  //Subscription variable to track live updates.
  venueSub: Subscription;

  isLoading = true;


  constructor(public venueService: VenueService, public repo: RepoService) { }

  ngOnInit() {
    setTimeout(async () => {
      //Populate the venue list within the venue page, with the venue list from the venue service.
      this.venueSub = this.venueService.venueList.subscribe(results => {
        this.venueList = results;

        console.log('Venue Page Init -> Venue List');
        console.log(this.venueList);
      });
    });
    this.getVenues();
  }

  //Receive venues from the repo in local page.
  async getVenues() {
    setTimeout(async () => {
      this.isLoading = false;
      await this.repo.getVenues();

      console.log('Venue Page -> Get Venues');
      console.log(this.venueList);
    }, 1500);
  }
}
