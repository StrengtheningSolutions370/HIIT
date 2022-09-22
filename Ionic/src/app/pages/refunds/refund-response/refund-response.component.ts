import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
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
    subject : ['BSC Refund Reponse', [Validators.required]],
    body : ['', [Validators.required]],
  });

  constructor(private formBuilder : FormBuilder, private modalCtrl : ModalController, public global : GlobalService) { }

  ngOnInit() {
    console.log('refund', this.refund);
  }

  ngAfterViewInit() {
    this.refundForm.controls['body'].setValue(`Dear ${this.refund.payment.sale.appUser.firstName} ${this.refund.payment.sale.appUser.lastName},${String.fromCharCode(10) + String.fromCharCode(10) + String.fromCharCode(10) + String.fromCharCode(10)}Regards, ${String.fromCharCode(10)}BSC team`);
  }

  async submit() {
    const subject = this.refundForm.controls['subject'].value;
    const body = this.refundForm.controls['body'].value;
    const email = this.refund.payment.sale.appUser.email;
    const id = this.refund.refundID;

    const chars : string[] = body.split("");
    let output : string = '';
    chars.forEach((char, index) => {
      if (char.charCodeAt(0) == 10) {
        output += '<br/>';
      } else {
        output += char;
      }
    });

    const payload = {
      refundID: id,
      subject: subject,
      body: output,
      text: body,
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
