import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss'],
})
export class ViewRoleComponent  {

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
