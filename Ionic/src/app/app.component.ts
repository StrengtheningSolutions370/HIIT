import { Component } from '@angular/core';
import { VenueService } from './services/venue/venue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(venueService: VenueService) {}
}
