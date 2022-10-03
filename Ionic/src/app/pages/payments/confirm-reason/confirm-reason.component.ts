import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-confirm-reason',
  templateUrl: './confirm-reason.component.html',
  styleUrls: ['./confirm-reason.component.scss'],
})
export class ConfirmReasonComponent implements OnInit {


  reason : string;
  @Input() refund : any;
  total : number = 0;

  constructor(private modalCtrl : ModalController, private repo : RepoService, private global : GlobalService) { }

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
    this.modalCtrl.dismiss({
      confirmed : false
    });
  }

  confirmChanges() {
    // this.modalCtrl.dismiss({
    //   confirmed : true
    // });

    const payload = {
      notes: this.refund.additional,
      refundAmount: this.total,
      paymentID: this.refund.paymentID,
      RefundResonID: Number(this.refund.reason.split(',')[0]),
    }

    console.log('payload', payload);

    this.repo.addrefund(payload).subscribe({
      next: (res : any) => {
        this.global.fetchRefunds.emit();
        this.modalCtrl.dismiss({
          confirmed : true
        });
      },
      error: (err : any) => {
        this.global.showAlert("Failed to request refund, please try again.", "Error");
      }
    });

  }

}
