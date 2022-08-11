import { CartService } from 'src/app/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { appUserRegister } from 'src/app/models/appUser';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { TitleService } from 'src/app/services/title/title.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
//import { File } from '@awesome-cordova-plugins/file';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() appUserRegister : any;

  titleList : any[] = [];
  personalForm! : FormGroup;
  isLoading = false;
  i = false;

  constructor(private repo : RepoService, public global: GlobalService, public titleService: TitleService, public cartService: CartService, private transfer: FileTransfer, private file: File){ }


  // const fileTransfer: FileTransferObject = this.transfer.create();


  // Download a file:
  // fileTransfer.download(..).then(..).catch(..);

  // download() {
  //   const url = 'http://www.example.com/file.pdf';
  //   this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
  //     console.log('download complete: ' + entry.toURL());
  //   }, (error) => {
  //     // handle error
  //   });
  // }


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

 onPersonalSubmit(registerForm: NgForm){
    if(!registerForm.valid) {
       this.global.showAlert('Please enter all required fields', 'Required fields')}
       else
       {
          this.global.showAlert('Proceed')
          //Add code to database here
       }
}

}
