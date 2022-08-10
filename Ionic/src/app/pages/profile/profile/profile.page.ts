import { CartService } from 'src/app/services/cart.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { TitleService } from 'src/app/services/title/title.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user! : any;

  indemnitySrc! : any;
  indemnityFlag = false;

  titleList : any[] = [];
  // personalForm! : FormGroup;
  @ViewChild('personalForm') personalForm!: NgForm;
  isLoading = false;
  i = false;

  @ViewChild('firstName') firstName : any;

  constructor(private repo : RepoService, private builder : FormBuilder, public global: GlobalService, public titleService: TitleService, public cartService: CartService, private storage : StoreService) { }

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

    // this.form = this.builder.group({
    //   firstName: [''],
    //   lastName: [''],
    //   email: [''],
    //   number: [''],
    //   title: [''],
    // });

    this.global.nativeLoad("Loading...");
    this.storage.getKey('token').then((token : any) => {
      console.log(token);
      this.repo.getUserRole(token).subscribe({
        next: (data : any) => {
          //query for the user:
          this.storage.getKey('user').then((usr : any) => {
            const u = JSON.parse(usr);
            this.repo.getUser(u.id).subscribe((usr : any) => {
              this.user = {
                ...usr.emp, ...usr.cli, ...usr.user[0], role : data.role
              }
              console.log(this.user);
              //populate the form:
              this.personalForm.controls['firstName'].setValue(this.user.firstName);
              this.personalForm.controls['lastName'].setValue(this.user.lastName);
              this.personalForm.controls['email'].setValue(this.user.email);
              this.personalForm.controls['number'].setValue(this.user.phoneNumber);
              this.personalForm.controls['TitleId'].setValue(`${this.user.title.titleID},${this.user.title.description}`);


            }).add(() => {
              this.global.endNativeLoad();
            });
          }); 

          if (data.role == 'client') {
            //this is a client:

          } else {
            //this is an employee:

          }
        }
      });

      // this.personalForm = new FormGroup({
      //   titleId: new FormControl(`${this.user.titleID},${this.user.titleDescription}`),
      //   firstName: new FormControl(this.user.firstName),
      //   lastName: new FormControl(this.user.lastName),
      //   email: new FormControl(this.user.email),
      //   phone: new FormControl(this.user.phone),
      //   address: new FormControl(this.user.address),
      //   city: new FormControl(this.user.city),
      //   state: new FormControl(this.user.state),
      //   zip: new FormControl(this.user.zip),
      //   country: new FormControl(this.user.country),
      //   password: new FormControl(this.user.password),
      //   newpassword: new FormControl(''),
      //   confirmpassword: new FormControl('')
      // });
    });

  }

  setTitleId(titles : any) {
    // const description = this.appUserRegister.title.description;
    // titles.map((el : any) => {
    //   if (el.description == description) {
    //     this.personalForm.get('titleId').setValue(`${el.titleID},${description}` );
    //     return;
    //   }
    // })
  }

  onPersonalSubmit(registerForm: NgForm){
    if(!registerForm.valid) {
       this.global.showAlert('Please enter all required fields', 'Required fields')}
       else
       {
          this.global.showAlert('Proceed')
          //Add code to database here
       }
  }

  ChangePassword(form : NgForm) {
    const newp = form.control.get('newpassword').value;
    this.storage.getKey('user').then((usr : any) => {
      const u = JSON.parse(usr);
      const uvm = {
        EmailAddress: u.email,
        newPassword: newp
      }
      this.global.nativeLoad("Setting...");
      this.repo.SetNewPassword(uvm).subscribe({
        next: () => {
            this.storage.deleteKey('email').then(() => {
            this.global.showToast("Password changed successfully.") //CHECKHERE
            // this.router.navigate(['/login']);
          });
        },
        error: (err : any) => {
          this.global.showAlert(err.error); //CHECKHERE
        }
      }).add(() => { this.global.endNativeLoad(); });
    });
  }

}
