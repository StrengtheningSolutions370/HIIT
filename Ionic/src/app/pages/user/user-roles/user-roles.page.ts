import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/models/userRole';
import { RepoService } from 'src/app/services/repo.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.page.html',
  styleUrls: ['./user-roles.page.scss'],
})
export class UserRolesPage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search venues.
  filter: string;

  //Create local user role array to be populated onInit.
  userRoleList: UserRole[] = [];

  //Subscription variable to track live updates.
  userRoleSub: Subscription;

  isLoading = true;

  constructor(public userService: UserService, public repo: RepoService) { }

  ngOnInit() {
    setTimeout(async () => {
      //Populate the user role list within the user role page, with the user role list from the user service.
      this.userRoleSub = this.userService.userRoleList.subscribe(results => {
        this.userRoleList = results;

        console.log('User Role Page Init -> User Role List');
        console.log(this.userRoleList);
      });
    });
    this.getUserRoles();
  }

  //Receive user roles from the repo in local page.
  async getUserRoles() {
    setTimeout(async () => {
      this.isLoading = false;
      await this.repo.getUserRoles();

      console.log('User Role Page -> Get User Roles');
      console.log(this.userRoleList);
    }, 1500);
  }

}
