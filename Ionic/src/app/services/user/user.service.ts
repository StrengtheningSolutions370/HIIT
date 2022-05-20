/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { UserRole } from 'src/app/models/userRole';
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
  //Creating a user role list for all the venues in the service.
  private _userRoleList = new BehaviorSubject<UserRole[]>([]);

  //Return the user role list as an observable.
  public get userRoleList() {
    return this._userRoleList.asObservable();
  }

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
  }

  //Methods
  //Add a user role to the user role list within the user service.
  createUserRole(userRole: any) {
    console.log('User Service: Repo -> Create User Role');
    console.log(JSON.stringify(userRole));
    this.repo.createVenue(userRole).subscribe(res => {
      const tempResult = Object.assign(res);
      console.log('User Role Service: Create User Role');
      console.log(res);
      this._userRoleList.next(tempResult.data);
    });
  }

  //Receives a venue to update in the service venue list.
  updateUserRole(id, userRole: any) {
    console.log('venueService: Repo -> Update Venue');
    console.log(userRole);

    const currentVenue = this._userRoleList.value;
    const index = currentVenue.findIndex(x => x.userRoleID === id);
    this.repo.updateVenue(userRole.userRoleID, userRole).subscribe(result =>
      console.log(result));
  }

  //Receives a venue to delete in the service venue list.
  deleteUserRole(id: number) {
    this.repo.deleteUserRole(id).subscribe(result =>
      console.log(result));
  }

  matchingUserRole(input: string) {
    console.log('User Service: Repo -> Matching User Role');
    this.repo.getMatch(input);
  }

  existingUserRole(id: number) {
    console.log('User Service: Repo -> Existing User Role');
    this.repo.exists(id).subscribe(result =>
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
        userRole
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async deleteVenueInfoModal(userRole: UserRole) {
    console.log('User Service: Delete User Role Modal Call');
    let tempUserRole = new UserRole();
    tempUserRole = Object.assign(userRole);
    console.log(tempUserRole);
    if (tempUserRole.users != null && tempUserRole.users.length > 0 ||
      tempUserRole.permissions != null && tempUserRole.permissions.length > 0) {
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
      let tempUserRole = new UserRole();
      tempUserRole.userRoleID = 0;
      tempUserRole = Object.assign(tempUserRole);
      console.log(tempUserRole);
      const modal = await this.modalCtrl.create({
        component: ConfirmRoleComponent,
        componentProps: {
          userRole: tempUserRole,
          choice: selection
        }
      });

      //Update the current venue list with the venue list from the confirm modal.
      modal.onDidDismiss().then(() => {
        this.repo.getVenues().subscribe(result => {
          const tempResult = Object.assign(result);
          this._userRoleList.next(tempResult);
          console.log('Updated user role list: Venue Service: confirm venue');
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
