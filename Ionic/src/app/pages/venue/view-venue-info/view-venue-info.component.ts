import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { VENUE } from 'src/app/models/venue';

@Component({
  selector: 'app-view-venue-info',
  templateUrl: './view-venue-info.component.html',
  styleUrls: ['./view-venue-info.component.scss'],
})
export class ViewVenueInfoComponent implements OnInit {

  @Input() venue: VENUE;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.venue);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

