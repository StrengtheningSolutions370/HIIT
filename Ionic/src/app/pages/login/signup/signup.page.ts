import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { appUserRegister } from 'src/app/models/appUser';
import { AuthService } from 'src/app/services/authentication/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isLoading = false;
  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm){
    if(!registerForm.valid) {return;}
    var userRegister = new appUserRegister();
    userRegister = {
      emailAddress : registerForm.value.emailAddress,
      password : registerForm.value.password 
    }
    this.authServ.register(userRegister);
    // this.register(form)
  }

}
