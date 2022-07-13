import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/authentication/auth.service';
import { StoreService } from './services/storage/store.service';
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
