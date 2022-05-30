/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from 'src/app/models/userRole';
import { Permission } from 'src/app/models/permission';
import { AddRoleComponent } from 'src/app/pages/user/user-roles/add-role/add-role.component';
import { AssociativeRoleComponent } from 'src/app/pages/user/user-roles/associative-role/associative-role.component';
import { ConfirmRoleComponent } from 'src/app/pages/user/user-roles/confirm-role/confirm-role.component';
import { DeleteRoleComponent } from 'src/app/pages/user/user-roles/delete-role/delete-role.component';
import { UpdateRoleComponent } from 'src/app/pages/user/user-roles/update-role/update-role.component';
import { ViewRoleComponent } from 'src/app/pages/user/user-roles/view-role/view-role.component';
import { RepoService } from '../repo.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() fetchUserRolesEvent = new EventEmitter<Permission>();
  @Output() fetchPermissionEvent = new EventEmitter<Permission>();

  //Creating a user role list for all the venues in the service.
  private _userRoleList = new BehaviorSubject<UserRole[]>([]);
  private _permissionList = new BehaviorSubject<Permission[]>([]);


  //Return the user role list as an observable.
  public get userRoleList() {
    return this._userRoleList.asObservable();
  }
  public get permissionList() {
    return this._permissionList.asObservable();
  }

  private temp: UserRole[];
  private temp1: Permission[];

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Receive the user roles from the repo (API).
    this.repo.getUserRoles().subscribe(result => {
      console.log('User Role List: User Service -> Get User Roles');
      console.log(result);

      const tempResult = Object.assign(result);
      this._userRoleList.next(tempResult);

      console.log('User Role List: User Service -> Updated User Roles');
      console.log(this._userRoleList);
    });

    this.repo.getPermissions().subscribe(result => {
      console.log('Permission List: User Service -> Get Permissions');
      console.log(result);

      const tempResult = Object.assign(result);
      this._userRoleList.next(tempResult);

      console.log('User Role List: User Service -> Updated User Roles');
      console.log(this._userRoleList);
    });
  }

  getAllUserRoles(): Observable<any> {
    return this.repo.getUserRoles();
  }

  getAllPermissions(): Observable<any> {
    return this.repo.getPermissions();
  }

   //Methods
  //Add a user role to the user role list within the user role service.
  createUserRole(userRole: any){
    this.repo.createUserRole(userRole).subscribe(
      {
        next: () => {
          console.log('USER ROLE CREATED');
          this.fetchUserRolesEvent.emit(userRole);
        }
      });
   }

  //Receives a user role to update in the service user role list.
  async updateUserRole(id: number,userRole: any) {
    return this.repo.updateUserRole(userRole.userId,userRole).subscribe(
      {
       next: () => {
         console.log('USER ROLE UPDATED');
         this.fetchUserRolesEvent.emit(userRole);
       }
      }
    );
  }
  //Receives a title to delete in the service title list.
  deleteUserRole(id: number){
    this.repo.deleteUserRole(id).subscribe(result => {
      console.log('USER ROLE DELETED');
      this.fetchUserRolesEvent.emit();
    });
   }

  matchingUserRole(input: string) {
    console.log('User Service: Repo -> Matching User Role');
    this.repo.getMatchUserRole(input);
  }

  existingUserRole(id: number) {
    console.log('User Service: Repo -> Existing User Role');
    this.repo.existsUserRole(id).subscribe(result =>
      console.log(result));
  }

  //Modals
  async addUserRoleInfoModal(userRole?: UserRole) {
    const modal = await this.modalCtrl.create({
      component: AddRoleComponent,
      componentProps: {
        userRole
      }
    });
    await modal.present();
  }

  //Display the update user role modal.
  //This method receives the selected user role object, from the user role page, in the modal through the componentProps.
  async updateUserRoleInfoModal(userRole: UserRole) {
    console.log('User Service: Update User Role Modal Call');
    const modal = await this.modalCtrl.create({
      component: UpdateRoleComponent,
      componentProps: {
        userRole,
        permissionList: this.permissionList
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async deleteUserRoleInfoModal(userRole: UserRole) {
    console.log('User Service: Delete User Role Modal Call');
    let tempUserRole = new UserRole();
    tempUserRole = Object.assign(userRole);
    console.log(tempUserRole);
    if (tempUserRole.users != null
      // tempUserRole.permissions != null && tempUserRole.permissions.length > 0
      ) {
      const modal = await this.modalCtrl.create({
        component: AssociativeRoleComponent,
        componentProps: {
          userRole: tempUserRole
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteRoleComponent,
        componentProps: {
          userRole: tempUserRole
        }
      });

      //Update the current venue list with the venue list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getUserRoles().subscribe(result => {
          const tempResult = Object.assign(result);
          this._userRoleList.next(tempResult);
          console.log('Updated user role list: User Service: delete user role');
          console.log(this._userRoleList);
        });
      });
      await modal.present();
    }
  }

  //Display the view venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async viewUserRoleInfoModal(userRole: UserRole) {
    console.log('User Service: View User Role  Modal Call');
    let tempUserRole = new UserRole();
    tempUserRole = Object.assign(userRole);
    console.log(tempUserRole);
    const modal = await this.modalCtrl.create({
      component: ViewRoleComponent,
      componentProps: {
        userRole: tempUserRole
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected venue from the venue page
  async confirmUserRoleModal(selection: number, userRole: any) {
    console.log('User Service: Confirm User Role Modal Call');
    console.log(selection);
    if (selection === 1) {
      console.log('Performing ADD');
      const modal = await this.modalCtrl.create({
        component: ConfirmRoleComponent,
        componentProps: {
          userRole,
          selection
        }
      });

      //Update the current venue list with the venue list from the confirm modal.
      modal.onDidDismiss().then(() => {
        this.repo.getUserRoles().subscribe(result => {
          const tempResult = Object.assign(result);
          this._userRoleList.next(tempResult);
          console.log('Updated user role list: User Service: confirm user role');
          console.log(this._userRoleList);
        });
      });
      await modal.present();
    } else if (selection === 2) {
      console.log('Performing UPDATE');
      let tempUserRole = new UserRole();
      tempUserRole = Object.assign(userRole);
      console.log(tempUserRole);
      const modal = await this.modalCtrl.create({
        component: ConfirmRoleComponent,
        componentProps: {
          userRole: tempUserRole,
          choice: selection
        }
      });
      modal.onDidDismiss().then(() => {
        this.repo.getUserRoles().subscribe(result => {
          const tempResult = Object.assign(result);
          this._userRoleList.next(tempResult);
          console.log('Updated user role list: User Service: Update confirm user role');
          console.log(this._userRoleList);
        });
      });
      await modal.present();
    } else {
      console.log('BadOption: ' + selection);
    }
  }
}
