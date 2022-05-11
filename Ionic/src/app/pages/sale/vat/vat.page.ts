import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddVatComponent } from './add-vat/add-vat.component';
import { UpdateVatComponent } from './update-vat/update-vat.component';
import { DeleteVatComponent } from './delete-vat/delete-vat.component';
import { ViewVatComponent } from './view-vat/view-vat.component';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.page.html',
  styleUrls: ['./vat.page.scss'],
})
export class VATPage {

  vats = [
    {percentage : '10%',
     year : '1991'},
    {percentage : '14%',
     year : '1993'},
     {percentage : '15%',
     year : '2018'}
  ];

  constructor(private modalCtrl: ModalController) { }

  async addVATModal() {
    const modal = await this.modalCtrl.create({
      component : AddVatComponent
     });
    await modal.present();
}

  async updateVATModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateVatComponent
    });
    await modal.present();
  }

  async deleteVATModal() {
    const modal = await this.modalCtrl.create({
      component : DeleteVatComponent
    });
    await modal.present();
  }

  async viewVATModal() {
   const modal = await this.modalCtrl.create({
      component : ViewVatComponent
    });
    await modal.present();
}

}
