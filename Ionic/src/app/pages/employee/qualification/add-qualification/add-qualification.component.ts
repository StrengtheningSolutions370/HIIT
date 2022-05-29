/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
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
  qualificationTypeList: QualificationType[] = [];
  qualificationTypeSub: Subscription;


  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cQualificationForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    checkBoxQualificationTypes: this.formBuilder.array([], [Validators.required]),
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public qualificationService: QualificationService, private router: Router,
    private  alertCtrl: AlertController, public repo: RepoService ) { }

    ngOnInit() {
    this.qualificationTypeSub = this.repo.getQualificationTypes().subscribe(qTypes => {
      this.qualificationTypeList = qTypes;

      console.log('Add Employee: NgOnIt: Return Qualification Type List');
      console.log(this.qualificationTypeList);
    });
  }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cQualificationForm.controls;
  }

  ionViewWillEnter() {
    if (this.qualification !=null){
      this.cQualificationForm.controls.qualificationName.setValue(this.qualification.name);
    }
  }

  submitForm() {
    // if (!this.cQualificationForm.valid){
    //   console.log('Please provide all required fields');
    //   return false;
    // }else{
      const temp = {
        name: this.cQualificationForm.value['name'],
        qualifications: []
      };
      this.dismissModal();
      this.qualificationService.confirmQualificationModal(1,temp);
    // }
   }

   async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification has been successfully added!',
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
      header: 'Qualification Already Exists',
      message: 'The Qualification Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create qualification',
      message: 'There was an error updating the qualification. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }
}
