/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Qualification } from 'src/app/models/qualification';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.scss'],
})
export class AddQualificationComponent implements OnInit {
  @Input() qualification: Qualification;
  qualificationTypeDropDown!: QualificationType[];

  //Creating the form to add the new sale category details, that will be displayed in the HTML component
  cQualificationForm: FormGroup = this.formBuilder.group({
    description: [, [Validators.required]],
    qualificationType: [],
  });


  constructor(private http: HttpClient, private modalCtrl: ModalController, private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public qualificationService: QualificationService, private router: Router, private currentRoute: ActivatedRoute,
    private alertCtrl: AlertController, private repo: RepoService) { }

    get errorControl() {
      return this.cQualificationForm.controls;
    }

    ionViewWillEnter(): void {

     //populating the dropdown for saleCategory:
     this.qualificationService.getAllQualification().subscribe(
       {
         next: data => {
           this.qualificationTypeDropDown = data;
           console.log(data);
         }
       }
     );

     console.log('AddQualification-ViewWillEnter');
     console.log(this.cQualificationForm);
     if (this.qualification !=null){
       this.cQualificationForm.controls.description.setValue(this.qualification.description);

     }
     }

     submitForm() {
    //form is valid for submission
     const obj = {

       description: this.cQualificationForm.controls['description'].value,
       qualificationTypeID: this.cQualificationForm.controls['qualificationType'].value.split(',')[0],
     };

     console.log('ob');
     console.log(obj);

     }

     async sucAdd() {
      const toast = await this.toastCtrl.create({
        message: 'The Sale Item has been successfully added!',
        duration: 2000,
        position : 'top'
      });
      toast.present();
    }

    //Once the modal has been dismissed.
    dismissModal() {
      this.modalCtrl.dismiss();
    };

    async duplicateAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Qualification Already Exists',
        message: 'The Qualification Information entered already exists on the system',
        buttons: ['OK']
      });
      alert.present();
    }

    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not create Qualification',
        message: 'There was an error creating the qualification. Please try again',
        buttons: ['OK']
      });
      alert.present();
    }

  ngOnInit() { }

}
