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
      des : 'Create employee accounts'
    },
    {
      des : 'Update profile information'
    },
    {
      des : 'View Access to client data '
    },
    {
      des : 'Run as-hoc reporting'
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
