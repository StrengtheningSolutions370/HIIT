import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-reason',
  templateUrl: './confirm-reason.component.html',
  styleUrls: ['./confirm-reason.component.scss'],
})
export class ConfirmReasonComponent implements OnInit {


  reason : string;
  @Input() refund : any;
  total : number = 0;

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
    console.log('refund in', this.refund)
    this.reason = this.refund.reason.split(',')[1];
    this.refund.saleLine.forEach((item : any) => {
      this.total += this.getCost(item);
    });
  }

  getCost(item : any) : number {
    return item.saleItem.priceHistory[0].saleAmount * item.quantity;
  }

  async returnFrom(){
    await this.dismissModal();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
