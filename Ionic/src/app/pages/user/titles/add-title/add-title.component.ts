import { Component,  Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter} from '@ionic/angular';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from 'src/app/models/title';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss'],
})
export class AddTitleComponent implements ViewWillEnter {

  @Input() title: Title;

   //Creating the form to add the new venue details, that will be displayed in the HTML component
   cTitleForm: FormGroup = this.formBuilder.group({
    titleDescription: ['', [Validators.required]]
  });


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public titleService: TitleService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cTitleForm.controls;
  }

  ionViewWillEnter(): void {
    console.log("AddTitle-ViewWillEnter");
    console.log(this.title);
    if (this.title !=null){
      this.cTitleForm.controls.titleDescription.setValue(this.title.description);}
    }

    submitForm() {
      if (!this.cTitleForm.valid){
        console.log('Please provide all required fields');
        return false;
      }else{
        const temp = {
          description: this.cTitleForm.value['titleDescription'],
          users: []
        };
        this.dismissModal();
        this.titleService.confirmTitleModal(1,temp);

        // this.sucAdd();
        // console.log("CurrentRoute:ADD");
        // console.log(this.currentRoute.url);
      }
     }

    async sucAdd() {
      const toast = await this.toastCtrl.create({
        message: 'The Title has been successfully added!',
        duration: 2000
      });
      toast.present();
    }

    //Once the modal has been dismissed.
    dismissModal() {
      this.modalCtrl.dismiss();
    };

    async duplicateAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Title Already Exists',
        message: 'The Title Information entered already exists on the system',
        buttons: ['OK']
      });
      alert.present();
    }

    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not create title',
        message: 'There was an error creating the title. Please try again',
        buttons: ['OK']
      });
      alert.present();
    }


}
