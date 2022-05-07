import { Component } from '@angular/core';

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

  constructor() { }


}
