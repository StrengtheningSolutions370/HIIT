import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-vat',
  templateUrl: './delete-vat.component.html',
  styleUrls: ['./delete-vat.component.scss'],
})
export class DeleteVatComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }


}
