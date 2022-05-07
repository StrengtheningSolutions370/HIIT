import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-qtype',
  templateUrl: './view-qtype.component.html',
  styleUrls: ['./view-qtype.component.scss'],
})
export class ViewQtypeComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
