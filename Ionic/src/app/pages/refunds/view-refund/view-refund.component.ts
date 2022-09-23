import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { RefundResponseComponent } from '../refund-response/refund-response.component';

@Component({
  selector: 'app-view-refund',
  templateUrl: './view-refund.component.html',
  styleUrls: ['./view-refund.component.scss'],
})
export class ViewRefundComponent implements OnInit {

  @Input() refund : any;

  constructor(public global : GlobalService, private modalCtrl : ModalController) { }

  ngOnInit() {
    console.log('refund', this.refund);
  }

  getDate() {
    return new Date(this.refund.date).toLocaleString();
  }

  getStatus() {
    if (this.refund.complete)
      return "Completed";
    return "Pending";
  }

  async respond() {
    const modal = await this.modalCtrl.create({
      component: RefundResponseComponent,
      componentProps: {
        refund: this.refund
      }
    });
    await modal.present();
  }

}
