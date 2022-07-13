/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { appUser, appUserRegister } from 'src/app/models/appUser';
import { GlobalService } from '../global/global.service';
import { RepoService } from '../repo.service';
import {StoreService} from '../storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //////////////
  //navbar authentication with observable
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  navLogin() {
    this.loggedIn.next(true);
    console.log('navLogin called');
  }

  navLogout() {
    this.loggedIn.next(false);
    console.log('navLogout called');
  }
  //////////////

  constructor(
    private repo: RepoService,
    private global: GlobalService,
    private storage: StoreService,
    private router: Router,
    private cookie: CookieService) { }

  register(registerUser: appUserRegister) {
    this.repo.register(registerUser).subscribe(result => {
      this.router.navigate(['login']);
    });
  }

  async login(appUser: appUser) {
   await this.global.nativeLoad('loading...');
    return this.repo.login(appUser).subscribe((result: any) => {
      const token = result.value.token;
      const expiration = result.value.expiration;
      const date = new Date(expiration);
      const epoch = date.getTime(); //convert TZ string to epoch
      this.cookie.set('token', token, epoch);
      this.navLogin(); //change observable to show navbar
      this.router.navigate(['home']);
   }).add(() =>{this.global.endNativeLoad();});
  }

  async logout() {
    // await this.global.nativeLoad();
    // this.storage.deleteKey('token').then(result => {
    //   this.router.navigateByUrl('/login');
    //   this.global.endNativeLoad();
    // })
    this.cookie.deleteAll(); //removes all cookies from client
    this.navLogout();
    this.router.navigate(['login']); //route user back to login
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
