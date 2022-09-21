import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Fuse from 'fuse.js';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { RefundResponseComponent } from './refund-response/refund-response.component';
import { ViewRefundComponent } from './view-refund/view-refund.component';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.page.html',
  styleUrls: ['./refunds.page.scss'],
})
export class RefundsPage implements OnInit {

  refunds : any[] = [];
  refundsOriginal : any[] = [];


  constructor(private repo : RepoService, private global : GlobalService, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.refunds = [];
    this.global.nativeLoad("Loading");
    this.global.fetchRefunds.subscribe(() => {
      this.repo.getRefunds().subscribe((data : any) => {
        
      // this.refunds = data;

      this.refunds = [];
      data.forEach((el:any, i:number) => {
        this.refunds.push({
          ...el,
          count : i+1
        })
      })

      this.refundsOriginal = this.refunds;
      
      console.log(this.refunds);
      }).add(() => { 
        this.global.endNativeLoad(); 
      });
    });
    this.global.fetchRefunds.emit();
  }

  getDate(date : string) {
    return new Date(date).toLocaleString();
  }

  searchRefund(evt : string) {
    if (evt.length == 0) {
      this.refunds = this.refundsOriginal;
      return;
    }

    const fuse = new Fuse(this.refundsOriginal, {
      keys: [
        'sale.date',
        'sale.appUser.email',
        'total',
        'sale.saleLine.saleItem.name'
      ]
    }).search(evt);

    if (fuse.length == 0) {
      this.refunds = [];
      return;
    }

    this.refunds = fuse.map((el : any) => {
      return el.item;
    });
  }

  async view(refund : any) {
    const modal = await this.modalCtrl.create({
      component: ViewRefundComponent,
      componentProps: {
        refund: refund
      }
    });
    await modal.present();
  }

  async respond(refund : any) {
    const modal = await this.modalCtrl.create({
      component: RefundResponseComponent,
      componentProps: {
        refund: refund
      }
    });
    await modal.present();
  }

}
