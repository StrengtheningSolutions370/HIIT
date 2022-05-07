import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-venue-info',
  templateUrl: './view-venue-info.component.html',
  styleUrls: ['./view-venue-info.component.scss'],
})
export class ViewVenueInfoComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
