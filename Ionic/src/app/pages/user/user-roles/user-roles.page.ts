import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.page.html',
  styleUrls: ['./user-roles.page.scss'],
})
export class UserRolesPage {

  userRoles = [
    {
      name : 'Administrator',
      description : 'A person responsible for carrying out the administration of a business or organization'
    },
    {
      name : 'Trainer',
      description : 'One whose occupation is to guide or instruct people in fitness and exercise routines a personal trainer ',
    },
    {
      name : 'Client',
      description : 'A person training at the gym',
    },
    {
      name : 'Member',
      description : 'A person training at the gym and tracking their performance',
    }
  ];

  constructor(private modalCtrl: ModalController) { }

}
