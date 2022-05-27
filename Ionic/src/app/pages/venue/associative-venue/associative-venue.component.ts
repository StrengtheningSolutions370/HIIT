import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
@Component({
  selector: 'app-associative-venue',
  templateUrl: './associative-venue.component.html',
  styleUrls: ['./associative-venue.component.scss'],
})
export class AssociativeVenueComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  };

}
