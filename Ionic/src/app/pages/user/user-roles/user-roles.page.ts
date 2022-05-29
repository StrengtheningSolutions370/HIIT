import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Permission } from 'src/app/models/permission';
import { UserRole } from 'src/app/models/userRole';
import { RepoService } from 'src/app/services/repo.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.page.html',
  styleUrls: ['./user-roles.page.scss'],
})
export class UserRolesPage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search titles.
  public filter: string;

  //Create local title array to be populated onInit.
  userRoleList: UserRole[] = [];
  permissionList: Permission[] = [];

  //Subscription variable to track live updates.
  userRoleSub: Subscription;
  permissionSub: Subscription;

  isLoading = true;

  constructor(public userService: UserService, public repo: RepoService) {
    // this.populateTitles();
    this.fetchUserRoles();
    this.fetchPermissions();
  }

  fetchUserRoles() {
    this.isLoading = true;
    this.userService.getAllUserRoles().subscribe(
      {
        next: data => {
          console.log('FETCHING USER ROLES FROM DB');
          console.log(data);
          this.isLoading = false;
          this.userRoleList = data;
        }
      }
    );
  }

  fetchPermissions() {
    this.isLoading = true;
    this.userService.getAllPermissions().subscribe(
      {
        next: data => {
          console.log('FETCHING PERMISSIONS FROM DB');
          console.log(data);
          this.isLoading = false;
          this.permissionList = data;
        }
      }
    );
  }

  ngOnInit() {

    this.userService.fetchUserRolesEvent.subscribe(
      {
        next: res => {
          console.log('EMIT TO GO FETCH THE USER ROLES AGAIN');
          this.fetchUserRoles();
        }
      }
    );
    this.userService.fetchPermissionEvent.subscribe(
      {
        next: res => {
          console.log('EMIT TO GO FETCH THE PERMISSIONS AGAIN');
          this.fetchPermissions();
        }
      }
    );
  }
}
