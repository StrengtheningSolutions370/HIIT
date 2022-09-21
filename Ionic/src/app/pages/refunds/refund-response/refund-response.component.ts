import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { ConfirmReasonComponent } from '../../payments/confirm-reason/confirm-reason.component';
import { ConfirmRefundReasonComponent } from '../../sale/refund-reason/confirm-refund-reason/confirm-refund-reason.component';
import { ConfirmRefundResponseComponent } from '../confirm-refund-response/confirm-refund-response.component';

@Component({
  selector: 'app-refund-response',
  templateUrl: './refund-response.component.html',
  styleUrls: ['./refund-response.component.scss'],
})
export class RefundResponseComponent implements OnInit {

  @Input() refund : any;

  get errorControl() {
    return this.refundForm.controls;
  }

  refundForm: UntypedFormGroup = this.formBuilder.group({
    subject : ['', [Validators.required]],
    body : ['', [Validators.required]],
  });

  constructor(private formBuilder : FormBuilder, private modalCtrl : ModalController, public global : GlobalService) { }

  ngOnInit() {
    console.log('refund', this.refund);
  }

  async submit() {
    const subject = this.refundForm.controls['subject'].value;
    const body = this.refundForm.controls['body'].value;
    const email = this.refund.payment.sale.appUser.email;
    const id = this.refund.refundID;

    const payload = {
      refundID: id,
      subject: subject,
      body: body,
      recpt: 'shannonlnoel@icloud.com'
    }

    console.log('payload', payload);

    const modal = await this.modalCtrl.create({
      component: ConfirmRefundResponseComponent,
      componentProps: {
        email: payload
      }
    });
    await modal.present();
    modal.onDidDismiss().then((res : any) => {
      if (res.data.confirmed == true)
        this.modalCtrl.dismiss();
    });

  }

}
