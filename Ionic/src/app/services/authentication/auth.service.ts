import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { appUser, appUserRegister } from 'src/app/models/appUser';
import { GlobalService } from '../global/global.service';
import { RepoService } from '../repo.service';
import {StoreService} from '../storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private repo: RepoService,
    private global: GlobalService,
    private storage: StoreService,
    private router: Router) { }

  register(registerUser: appUserRegister) {
    this.repo.register(registerUser).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/login');
    });
  }

  async login(appUser: appUser) {
   await this.global.nativeLoad("loading...");
    return this.repo.login(appUser).subscribe(result => { 
      if (result){
        console.log(result);
      }    
      var token = result['token'];
      this.storage.setKey('token',token);
      this.router.navigateByUrl('/home');   
   }).add(() =>{this.global.endNativeLoad()});


  }

  async logout() {
    await this.global.nativeLoad();
    this.storage.deleteKey('token').then(result => {
      this.router.navigateByUrl('/login');
      this.global.endNativeLoad();
    })
   }

  // roleMatch(allowedRoles): boolean {
  //   let isMatch = false;
  //   const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
  //   const userRole = payLoad.role;
  //   allowedRoles.forEach(element => {
  //     if (userRole === element) {
  //       isMatch = true;
  //       return false;
  //     }
  //   });
  //   return isMatch;
  // }

}
