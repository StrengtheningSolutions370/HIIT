/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Permission } from 'src/app/models/permission';
import { UserRole } from 'src/app/models/userRole';
import { RepoService } from 'src/app/services/repo.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  permissionList: Permission[];

    //Create local title array to be populated onInit.

    //Subscription variable to track live updates.
    permissionSub: Subscription;

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cUserRoleForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    checkboxPermissionList: this.formBuilder.array([], [Validators.required],)
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public userService: UserService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController,public repo: RepoService ) { }

  ngOnInit(){
    this.permissionSub = this.repo.getPermissions().subscribe(permissions => {
      this.permissionList = permissions;

      console.log('Add User Role: NgOnIt: Return Permission List');
      console.log(this.permissionList);
    });
   }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cUserRoleForm.controls;
  }

  fetchPermissions() {
    this.userService.getAllPermissions().subscribe(
      {
        next: data => {
          console.log('FETCHING Permissions FROM DB');
          console.log(data);
          this.permissionList = data;
        }
      }
    );
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
        permissions: this.cUserRoleForm.value['checkboxPermissionList'],
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

   updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((permission: FormControl, index) => {
        if (permission.value === o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }

  onLoadCheckboxStatus() {
    const checkboxPermissionList: FormArray = this.cUserRoleForm.get('checkboxPermissionList') as FormArray;
    this.permissionList.forEach(o => {
      this.updateCheckControl(checkboxPermissionList, o);
    });
  }

  onSelectionChange(e, i) {
    const checkboxPermissionList: FormArray = this.cUserRoleForm.get('checkboxPermissionList') as FormArray;
    this.permissionList[i].permissionID = e.target.checked;
    this.updateCheckControl(checkboxPermissionList, e.target);

  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
