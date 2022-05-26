/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent {

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cUserRoleForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // permissions: this.formBuilder.array([], [Validators.required])
  });

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


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public userService: UserService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }


  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cUserRoleForm.controls;
  }

  submitForm() {
    if (!this.cUserRoleForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      let temp = new UserRole();
      temp = {
        name: this.cUserRoleForm.value['name'],
        description: this.cUserRoleForm.value['description'],
        users: []
      };
      console.log(temp);
      this.userService.confirmUserRoleModal(1, temp);
      this.dismissModal();
      //this.sucAdd();
      // console.log("CurrentRoute:ADD");
      // console.log(this.currentRoute.url);
    }
   }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
