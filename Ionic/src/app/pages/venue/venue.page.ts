import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Venue } from 'src/app/models/venue';
import { RepoService } from 'src/app/services/repo.service';
import { VenueService } from 'src/app/services/venue/venue.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search venues.
  public filter: string;

  //Create local venue array to be populated onInit.
  venueList: Venue[] = [];
  venueListOriginal : Venue[] = [];

  //Subscription variable to track live updates.
  venueSub: Subscription;
  noresults = false;
  isLoading = true;


  constructor(public venueService: VenueService, public repo: RepoService) {
    this.fetchVenues();
   }

  ngOnInit() {
    this.venueService.fetchVenuesEvent.subscribe(
      {
        next: res => {
          console.log('EMIT TO GO FETCH THE TITLES AGAIN');
          this.fetchVenues();
        }
      }
    );
    this.venueService.fetchVenuesEvent.emit();
  }

  deleteVenueInfoModal(venue : any) {
    this.venueService.deleteVenueInfoModal(venue);
  }

  fetchVenues() {
    this.isLoading = true;
    this.venueService.getAllVenues().subscribe(
      {
        next: data => {
          console.log('FETCHING VENUES FROM DB');
          console.log(data.result);
          this.venueList = data.result;
          this.venueListOriginal = data.result;
          this.isLoading = false;
          if (this.venueList.length == 0) {
            this.noresults = true;
          }
        }
      }
    );
  }

  searchVenue(event : any) {
    this.noresults = false;

    if (event == '' || event == null) {
      this.venueList = this.venueListOriginal;

      if (this.venueList.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.venueList, {
      keys: [
        'name',
        'description',
        'quantityOnHand',
        'saleCategory.name',
      ]
    }).search(
      event
    );

    this.venueList = [];

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    hits.map((el : any) => {
      this.venueList.push(el.item);
    });
  }
}
