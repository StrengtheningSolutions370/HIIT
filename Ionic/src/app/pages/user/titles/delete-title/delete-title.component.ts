import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-title',
  templateUrl: './delete-title.component.html',
  styleUrls: ['./delete-title.component.scss'],
})
export class DeleteTitleComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
