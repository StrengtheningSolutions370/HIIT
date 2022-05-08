import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.page.html',
  styleUrls: ['./user-roles.page.scss'],
})
export class UserRolesPage {

  userRoles = [
    {
      name : 'Administrator',
      description : 'a person responsible for carrying out the administration of a business or organization'
    },
    {
      name : 'Trainer',
      description : 'one whose occupation is to guide or instruct people in fitness and exercise routines a personal trainer ',
    },
    {
      name : 'Client',
      description : 'a person training at the gym',
    },
    {
      name : 'Member',
      description : 'a person training at the gym and tracking their performance',
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  async addUserRoleModal() {
     const modal = await this.modalCtrl.create({
       component : AddRoleComponent
      });
     await modal.present();
 }

   async updateUserRoleModal() {
     const modal = await this.modalCtrl.create({
       component : UpdateRoleComponent
     });
     await modal.present();
   }

   async deleteUserRoleModal() {
     const modal = await this.modalCtrl.create({
       component : DeleteRoleComponent
     });
     await modal.present();
   }

   async viewUserRoleModal() {
    const modal = await this.modalCtrl.create({
       component : ViewRoleComponent
     });
     await modal.present();
 }



}
