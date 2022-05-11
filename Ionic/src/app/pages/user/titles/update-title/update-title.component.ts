import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.scss'],
})
export class UpdateTitleComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
