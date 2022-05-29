import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

@Component({
  selector: 'app-confirm-qualification',
  templateUrl: './confirm-qualification.component.html',
  styleUrls: ['./confirm-qualification.component.scss'],
})
export class ConfirmQualificationComponent implements OnInit {
  @Input() choice: number;
  @Input() qualification: Qualification;

  constructor(private modalCtrl: ModalController, public qualificationService: QualificationService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController) {
    }

  ngOnInit(){

  }

 async dismissModal() {
    this.modalCtrl.dismiss();
  };

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(qualification: Qualification){
    console.log(this.choice);
    // if (this.choice === 1){
      console.log(qualification);
      console.log('Add qualification from confirm:');
      //CallRepoToCreate
      const permissionRole = {
        name: qualification.name,
        qualificationType: qualification.qualificationTypes,
      };
      await this.qualificationService.createQualification(this.qualification);
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
      console.log(this.qualification);
      await this.dismissModal();
      this.qualificationService.addQualificationInfoModal(this.qualification);
    }
    else if (this.choice === 2){
      console.log(this.qualification);
      await this.dismissModal();
      this.qualificationService.updateQualificationInfoModal(this.qualification);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

}
