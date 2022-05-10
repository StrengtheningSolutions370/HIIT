import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddTitleComponent } from './add-title/add-title.component';
import { UpdateTitleComponent } from './update-title/update-title.component';
import { DeleteTitleComponent } from './delete-title/delete-title.component';
import { ViewTitlesComponent } from './view-titles/view-titles.component';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.page.html',
  styleUrls: ['./titles.page.scss'],
})
export class TitlesPage {

  titles = [
    {name : 'Mr.',
     description : 'a designation for a man'},
    {name : 'Mrs',
     description : 'a designation for a woman who is married'},
    {name : 'Miss.',
    description : 'a designation for a young woman '},
    {name : 'Ms.',
    description : 'a designation for a woman who is unmarried'},
    {name : 'Dr.',
    description : 'a designation for a person who has obtained a doctorate (commonly a PhD)'},
    {name : 'Prof.',
    description : 'a designation for a person who is a teacher of the highest rank, or is a expert in their field'},
  ];

  constructor(private modalCtrl: ModalController) { }

  async addTitleModal() {
    const modal = await this.modalCtrl.create({
      component : AddTitleComponent
     });
    await modal.present();
}

  async updateTitleModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateTitleComponent
    });
    await modal.present();
  }

  async deleteTitleModal() {
    const modal = await this.modalCtrl.create({
      component : DeleteTitleComponent
    });
    await modal.present();
  }

  async viewTitleModal() {
   const modal = await this.modalCtrl.create({
      component : ViewTitlesComponent
    });
    await modal.present();
}

}
