import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent {

  permissions=[
    {
      description : 'Create employee accounts'
    },
    {
      description : 'Update profile information'
    },
    {
      description : 'View Access to client data '
    },
    {
      description : 'Run as-hoc reporting'
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
