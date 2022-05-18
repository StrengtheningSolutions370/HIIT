import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { USER_ROLE } from 'src/app/models/userRole';
import { RepoService } from '../repo.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userRoleList: USER_ROLE[] = [];
  private tempUserRoleList: [];
  private tempUserRole: USER_ROLE;
  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) { 
    this.repo.getVenues().subscribe(result =>{
      this.tempUserRoleList = [];
      this.tempUserRoleList = Object.assign(result);
      this.tempUserRoleList.forEach(element => {
        this.tempUserRole = new USER_ROLE();
        this.tempUserRole.PERMISSIONs = element['SCHEDULEs'];
        this.tempUserRole.USERs = element['USERs'];
        this.tempUserRole.USER_ROLE_ID = element['USER_ROLE_ID'];        
        this.tempUserRole.USER_ROLE_NAME = element['USER_ROLE_NAME'];
        this.tempUserRole.USER_ROLE_DESCRIPTION = element['USER_ROLE_DESCRIPTION'];
        this.userRoleList.push(this.tempUserRole);
      });
      console.log("UserService: subscribe -GetUserRole()",this.userRoleList);
    } );
  }

  getUserRole(): USER_ROLE[] {
    return this.userRoleList;
  }


  createUserRole(userRole:any){
    console.log("userRoleService: Repo-CreateUserRole");
    this.repo.createVenue(userRole).subscribe(res=> {
      console.log(res);
    });

  }

  updateVenue(venue:any){
    console.log("userRoleService: Repo-UpdateUserRole");
    console.log(venue);
    this.repo.updateVenue(venue['VENUE_ID'],venue).subscribe(result =>
     console.log(result));
  }

  deleteVenue(id:number){
    console.log("userRoleService: Repo-DeleteUserRole")
    this.repo.deleteVenue(id).subscribe(result =>
     console.log(result));
  }


}
