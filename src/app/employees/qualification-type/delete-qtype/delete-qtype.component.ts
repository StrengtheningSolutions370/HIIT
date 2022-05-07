import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-qtype',
  templateUrl: './delete-qtype.component.html',
  styleUrls: ['./delete-qtype.component.scss'],
})
export class DeleteQtypeComponent  {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
