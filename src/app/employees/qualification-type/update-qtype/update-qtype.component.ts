import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-qtype',
  templateUrl: './update-qtype.component.html',
  styleUrls: ['./update-qtype.component.scss'],
})
export class UpdateQtypeComponent{

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
