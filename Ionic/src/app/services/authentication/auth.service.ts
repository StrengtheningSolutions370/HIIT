import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appUser, appUserRegister } from 'src/app/models/appUser';
import { GlobalService } from '../global/global.service';
import { RepoService } from '../repo.service';
import {StoreService} from '../storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private repo: RepoService,
    private global: GlobalService,
    private storage: StoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  // formModel = this.fb.group({
  //   UserName: ['', Validators.required],
  //   Email: ['', Validators.email],
  //   FullName: [''],
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(4)]],
  //     ConfirmPassword: ['', Validators.required]
  //   }, { validator: this.comparePasswords })

  // });

  // comparePasswords(fb: FormGroup) {
  //   const confirmPswrdCtrl = fb.get('ConfirmPassword');
  //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //     if (fb.get('Password').value !== confirmPswrdCtrl.value) {
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     } else {
  //       confirmPswrdCtrl.setErrors(null);
  //     }
  //   }
  // }

  register(registerUser: appUserRegister) {
    this.repo.register(registerUser).subscribe(result => {
      console.log(result);
    });
  }

  async login(appUser: appUser) {
   await this.global.nativeLoad();
    this.repo.login(appUser).subscribe(result => {     
      var token = result['token'];
      this.storage.setKey('token',token);
   });
   this.router.navigateByUrl('/home')
   await this.global.endNativeLoad();
  }

  // login(formData) {
  //   return this.http.post(environment.URL  + '/ApplicationUser/Login', formData);
  // }

  // getUserProfile() {
  //   return this.http.get(environment.URL + '/UserProfile');
  // }

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
