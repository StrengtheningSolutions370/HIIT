import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { venue } from 'src/app/models/venue';
import { RepoService } from '../repo/repo.service';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  venueList!: venue[];
  tempVenue: venue;
  constructor(public repo: RepoService) {
    this.venueList = [];
    this.repo.getVenues().subscribe(data => this.venueList = data);
   }

   ngOnIt(){
     console.log("ngOnIt VenueServices");          
   } 

   getVenues(): venue[] {
    
    console.log(this.venueList);
    return this.venueList;
   }
}
