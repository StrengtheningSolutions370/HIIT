/* eslint-disable new-parens */
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-confirm-role',
  templateUrl: './confirm-role.component.html',
  styleUrls: ['./confirm-role.component.scss'],
})
export class ConfirmRoleComponent implements ViewWillEnter{
  @Input() userRole: UserRole;
  @Input() choice: number;

  constructor(private modalCtrl: ModalController, public userService: UserService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController) {
    }

  ionViewWillEnter() {
  }


  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(userRole: UserRole){
    console.log(this.choice);
    // if (this.choice === 1){
      console.log(userRole);
      console.log('Add user role from confirm:');
      //CallRepoToCreate
      const permissionRole = {
        name: userRole.name,
        description: userRole.description,
        permissions: userRole.permissions,
      };
      await this.userService.createUserRole(userRole);
      await this.dismissModal();
      this.sucAdd();
    // } else if(this.choice === 2){
    //   console.log('Update user role from confirm:');
    //   //CallRepoToUpdate
    //   this.userService.updateUserRole(userRole.userRoleID,userRole);
    //   this.dismissModal();
    //   this.sucUpdate();
    // }

    //   //search duplicates
    //   if (this.userService.matchingUserRole(userRole.name) != null ||
    //this.userService.matchingUserRole(this.userRole.description) != null)
    //   {
    //     console.log('Existing User Role: ' + userRole.name + ' <-Name ++ Description -> ' + userRole.description);
    //     //display duplicate alert
    //     //failure alert
    //     return;
    //   }
    //   else {
    //     console.log('Add user role from confirm:');
    //     //CallRepoToCreate
    //     await this.userService.createUserRole(userRole);
    //     await this.dismissModal();
    //     this.sucAdd();
    //   }

    // } else if (this.choice === 2){
    //   console.log('Update user role from confirm:');
    //   //CallRepoToUpdate
    //   this.userService.updateUserRole(userRole.userRoleID,userRole);
    //   this.dismissModal();
    //   this.sucUpdate();
    // }


    //dismiss modal
    this.dismissModal();
  }

  async returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.userRole);
      await this.dismissModal();
      this.userService.addUserRoleInfoModal(this.userRole);
    } else if (this.choice === 2){
      console.log(this.userRole);
      this.dismissModal();
      this.userService.updateUserRoleInfoModal(this.userRole);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The User role has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The User role has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };
}
