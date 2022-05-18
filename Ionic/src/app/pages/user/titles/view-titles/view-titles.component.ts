import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-titles',
  templateUrl: './view-titles.component.html',
  styleUrls: ['./view-titles.component.scss'],
})
export class ViewTitlesComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
