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

  async checkToken() {
    var token = await this.storage.getKey('token');
    if (token == null) {
      this.loggedIn.next(false);
    }
    else {
      var tokenObj = this.global.decodeToken(token);
      if (tokenObj == null) {
        this.loggedIn.next(false);
      }
      else if (!this.global.validateTokenData(tokenObj)) {
        this.loggedIn.next(false);
      }
      else this.loggedIn.next(true);
    }
  }

  get isLoggedIn() {
    this.checkToken();
    return this.loggedIn.asObservable();
  }

  navLogin() {
    this.loggedIn.next(true);
    console.log('navLogin called');
  }

  navLogout() {
    this.loggedIn.next(false);
  }

  async getState() {
    await this.checkToken();
    return this.loggedIn.value;
  }
  //////////////

  constructor(
    private repo: RepoService,
    private global: GlobalService,
    private storage: StoreService,
    private router: Router) { }

  async register(registerUser: appUserRegister) {
    await this.storage.deleteKey('token').then(() => {
      this.repo.register(registerUser).subscribe(result => {
        this.router.navigate(['login']);
      });
    });
    
  }

  async login(appUser: appUser) {
    await this.storage.deleteKey('token');
    await this.global.nativeLoad('loading...');
    return this.repo.login(appUser).subscribe((result : any) => {
      var token = result.value.token;
      var expiration = result.value.expiration;
      var date = new Date(expiration);
      var epoch = date.getTime(); //convert TZ string to epoch
      this.storage.setKey('token', token);
      this.navLogin(); //change observable to show navbar
      this.router.navigate(['home']);
    }).add(() =>{this.global.endNativeLoad()});
  }

  async logout() {
    this.storage.deleteKey('token').then(() => {
      this.navLogout();
      this.router.navigate(['login']); //route user back to login
    })
   }

}
