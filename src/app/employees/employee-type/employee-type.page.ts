import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddEtypeComponent } from './add-etype/add-etype.component';
import { UpdateEtypeComponent } from './update-etype/update-etype.component';
import { DeleteEtypeComponent } from './delete-etype/delete-etype.component';
import { ViewEtypeComponent } from './view-etype/view-etype.component';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.page.html',
  styleUrls: ['./employee-type.page.scss'],
})
export class EmployeeTypePage {

  employeeTypes = [
    {
      name : 'Administrator',
      description : 'a person responsible for carrying out the administration of a business or organization'
    },
    {
      name : 'Trainer',
      description : 'one whose occupation is to guide or instruct people in fitness and exercise routines a personal trainer ',
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  async addEmployeeTypeModal() {
     const modal = await this.modalCtrl.create({
       component : AddEtypeComponent
      });
     await modal.present();
 }

   async updateEmployeeTypeModal() {
     const modal = await this.modalCtrl.create({
       component : UpdateEtypeComponent
     });
     await modal.present();
   }

   async deleteEmployeeTypeModal() {
     const modal = await this.modalCtrl.create({
       component : DeleteEtypeComponent
     });
     await modal.present();
   }

   async viewEmployeeTypeInfoModal() {
    const modal = await this.modalCtrl.create({
       component : ViewEtypeComponent
     });
     await modal.present();
 }


}
