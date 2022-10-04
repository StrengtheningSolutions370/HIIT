import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Measurement } from 'src/app/models/measurement';
import { GlobalService } from 'src/app/services/global/global.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { ConfirmMeasurementComponent } from '../confirm-measurement/confirm-measurement.component';
import { MeasurementsPage } from '../measurements.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  measurementForm! : FormGroup;
  email! : any;

  @ViewChild('dateobj') d : any;

  myDate:any  = new Date().toISOString();

  constructor(private formBuilder : FormBuilder, private storage : StoreService, private global : GlobalService, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.storage.getKey('token').then((token) => {
      const decode = this.global.decodeToken(token);
      console.log(decode);
      this.email = decode.sub;
    }); 

    const t = new Date().toJSON().slice(0,10).replace(/-/g,'-');

    this.measurementForm = this.formBuilder.group({
      weight : ['', [Validators.required, Validators.max(300), Validators.min(0)]],
      fatPercentage : ['', [Validators.required, Validators.max(80), Validators.min(0)]],
      waist : ['', [Validators.required, Validators.max(200), Validators.min(0)]],
      date : [t, [Validators.required]],
      height : ['', [Validators.required, Validators.max(300), Validators.min(0)]]
    });

  }

  ngAfterViewInit() {
    //set d to current date as max:
    this.d.el.max = new Date().toISOString().split("T")[0];
    //set to todays date:
    this.d.el.value = new Date().toISOString().split("T")[0];
  }

  async onMeasurementSubmit() {

    const measurement : Measurement = new Measurement();

    measurement.ClientID = 0;
    
    measurement.BodyFate = this.measurementForm.controls['fatPercentage'].value;
    measurement.Waist = this.measurementForm.controls['waist'].value;
    measurement.Height = this.measurementForm.controls['height'].value;
    measurement.Weight = this.measurementForm.controls['weight'].value;
    measurement.Date = this.measurementForm.controls['date'].value;
    // measurement.Date = Math.trunc(new Date(form.controls.date.value).getTime() / 1000);

    const mvm = {
      email: this.email,
      measurement: measurement
    }
    console.log('mvm to pass', mvm)
    const modal = await this.modalCtrl.create({
      component: ConfirmMeasurementComponent,
      componentProps: {mvm}
    });
    await modal.present();
    
    this.global.closeMeasurementAddModal.subscribe((sub : any) => {
      console.log('closeMeasurementAddModal', sub);
      if (sub == true) {
        modal.onDidDismiss().then((data : any) => {
            this.dismissModal();
        });
        console.log('try dismiss')
      }
        
    })
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
