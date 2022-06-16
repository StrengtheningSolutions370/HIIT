import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VenueService } from './services/venue/venue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  shownav! : boolean;

  constructor(venueService: VenueService, private router : Router) {
    this.shownav = false;
    this.router.events.subscribe((event: any) => {
        console.log(event.url)
        var route = event.url;
        if (route == '/login' || route == '/' || route == '/login/signup') {
          this.shownav == false;
        } else {
          this.shownav = true;
        }
    })
    
  }

  
  ngOnInit() {
    // console.log(this.router.url);
  }


}
