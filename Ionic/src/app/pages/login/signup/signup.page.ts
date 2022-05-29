import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isLoading = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(!form.valid) {return;}
    // this.register(form)

  }
  

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

}
