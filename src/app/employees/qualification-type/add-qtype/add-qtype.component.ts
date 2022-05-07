import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-qtype',
  templateUrl: './add-qtype.component.html',
  styleUrls: ['./add-qtype.component.scss'],
})
export class AddQtypeComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
