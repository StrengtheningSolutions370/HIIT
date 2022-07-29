import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { appUserRegister } from 'src/app/models/appUser';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() appUserRegister : any;

  titleList : any[] = [];
  personalForm! : FormGroup;
  contactForm! : FormGroup;
  isLoading = false;
  i = false;

  constructor(private repo : RepoService, public global: GlobalService, public titleService: TitleService) { }

  ngOnInit() {
    this.repo.getTitles().subscribe({
      next: (data : any) => {
        this.titleList = data.result;
      }
    });

    this.repo.getTitles().subscribe({
      next: (data : any) => {
        this.titleList = data.result;
        this.setTitleId(this.titleList);
      }
    });

    
  }

  setTitleId(titles : any) {
    const description = this.appUserRegister.title.description;
    titles.map((el : any) => {
      if (el.description == description) {
        this.personalForm.get('titleId').setValue(`${el.titleID},${description}` );
        return;
      }
    })
  }

  onContactSubmit(registerForm: NgForm){
    if(!registerForm.valid) {
       this.global.showAlert('Please enter all required fields', 'Required fields')}
       else
       {
          this.global.showAlert('hello')
       }
    // var userRegister = new appUserRegister();
    // console.log(registerForm.value);
    // userRegister = {
    //   emailAddress : registerForm.value.emailAddress,
    //   password : registerForm.value.password,
    //   role: "client", //does not override role in api
    //   firstName: registerForm.value.firstName,
    //   lastName: registerForm.value.lastName,
    //   phoneNumber: registerForm.value.phone,
    //   TitleId: registerForm.value.TitleId
  }

  onPersonalSubmit(registerForm: NgForm){
    if(!registerForm.valid) {
       this.global.showAlert('Please enter all required fields', 'Required fields')}
       else
       {
          this.global.showAlert('hello')
       }
}

}
