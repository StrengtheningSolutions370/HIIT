import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-qualification',
  templateUrl: './delete-qualification.component.html',
  styleUrls: ['./delete-qualification.component.scss'],
})
export class DeleteQualificationComponent{

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
