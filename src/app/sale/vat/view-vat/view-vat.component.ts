import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-vat',
  templateUrl: './view-vat.component.html',
  styleUrls: ['./view-vat.component.scss'],
})
export class ViewVatComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
