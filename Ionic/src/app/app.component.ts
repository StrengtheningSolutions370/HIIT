import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/authentication/auth.service';
import { VenueService } from './services/venue/venue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  hide = false;

  constructor(venueService: VenueService, private auth : AuthService) {
    
  }
  
  
  ngOnInit() {
    this.auth.isLoggedIn.subscribe(log => {
      this.hide = log;
    })
  }


}
