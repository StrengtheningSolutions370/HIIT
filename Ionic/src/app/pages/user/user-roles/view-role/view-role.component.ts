import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss'],
})
export class ViewRoleComponent  {
  @Input() userRole: UserRole;

  constructor(private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    console.log('view Specific User Role - View Will Enter');
    console.log(this.userRole);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
