import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent {

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
