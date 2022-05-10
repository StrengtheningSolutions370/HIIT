import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent {

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
