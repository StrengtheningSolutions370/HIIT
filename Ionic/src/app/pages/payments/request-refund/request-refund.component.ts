import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { ConfirmRefundReasonComponent } from '../../sale/refund-reason/confirm-refund-reason/confirm-refund-reason.component';
import { ConfirmReasonComponent } from '../confirm-reason/confirm-reason.component';

@Component({
  selector: 'app-request-refund',
  templateUrl: './request-refund.component.html',
  styleUrls: ['./request-refund.component.scss'],
})
export class RequestRefundComponent implements OnInit {

  @Input() refund : any;
  
  reasons : any[] = [];

  refundForm: UntypedFormGroup = this.formBuilder.group({
    reason : ['', [Validators.required]],
    items : ['', [Validators.required]],
    additional : [''],
  });

  get errorControl() {
    return this.refundForm.controls;
  }

  constructor(public global : GlobalService, private formBuilder : FormBuilder, private repo : RepoService, private modalCtrl : ModalController) { }

  ngOnInit() { 
    console.log(this.refund);
    this.repo.getRefundReasons().subscribe((res : any) => {
      this.reasons = res.result;
    });
  }

  async submit() {
    console.log('for refund', this.refund);

    const saleLine = this.refundForm.controls['items'].value;
    const reason = this.refundForm.controls['reason'].value;
    const additional = this.refundForm.controls['additional'].value;

    
    const saleitems = [];
    let i = 0;
    saleLine.forEach((item : any) => {
      this.refund.sale.saleLine.forEach((sl : any) => {
        if (sl.saleLineID == item) {
          saleitems.push({
            ...sl,
            number : ++i
          });
        }
      });
    });

    const data = {
      reason : reason,
      saleLine : saleitems,
      additional : additional,
    };

    console.log(data);

    const modal = await this.modalCtrl.create({
      component: ConfirmReasonComponent,
      componentProps: {
        refund: data 
      }
    });
    await modal.present();

  }

}
