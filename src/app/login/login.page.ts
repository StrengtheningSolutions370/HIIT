import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passType = true;
  isLogin = false;
  frgPass = "passwordlink.html";
  sgnUp = "SignLink.html";

  constructor(private auth: AuthService, private router:Router, private global: GlobalService) { }

  ngOnInit() {
    this.isLogged();
  }

  updateIcn(){
    this.passType = !this.passType;
  }

  async isLogged(){
    try{
      this.global.showLoader();
      const val = await this.auth.getId();
      console.log(val);
    } catch (err){
      console.log(err);
    }
  }


  onSubmit(loginForm: NgForm){
    console.log(loginForm);
    if(!loginForm.valid) return;
    this.login(loginForm);
  }


  login(form){
    this.isLogin = true;
    this.auth.login(form.value.email, form.value.password).then(res => {
      console.log(res);
      this.router.navigateByUrl('/home');
      this.isLogin = false;
      form.reset()
    })
    .catch(err =>{
      console.log(err);
      this.isLogin = false;
    })
  }

}
