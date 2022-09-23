import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RefundReason } from 'src/app/models/refund-reason';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-refund-reason',
  templateUrl: './refund-reason.page.html',
  styleUrls: ['./refund-reason.page.scss'],
})
export class RefundReasonPage implements OnInit {

  //String used from the searchbar, used in the filter pipe to search titles.
  public filter: string;

  //Create local title array to be populated onInit.
  refundReasonList: RefundReason[] = [];
  refundReasonListOriginal: RefundReason[] = [];

  noresults = false;

  //Subscription variable to track live updates.
  refundReasonSub: Subscription;

  isLoading = true;
  constructor(public saleService: SalesService, public repo: RepoService) {
     this.fetchRefundReason();
  }

  fetchRefundReason() {
    this.isLoading = true;
    this.saleService.getAllRefundReasons().subscribe(
      {
        next: data => {
          console.log('Fetching reasons from DB');
          console.log(data);
          this.isLoading = false;
          this.refundReasonList = data.result;
          this.refundReasonListOriginal = data.result;
          if (this.refundReasonList.length == 0)
          this.noresults = true;
        }
      }
    );
  }

  searchReason(event : any) {

    this.noresults = false;

    if (event == '' || event == null) {
      this.refundReasonList = this.refundReasonListOriginal;

      if (this.refundReasonList.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.refundReasonList, {
      keys: [
        'name',
        'description',
        'quantityOnHand',
        'saleCategory.name',
      ]
    }).search(
      event
    );

    this.refundReasonList = [];

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    hits.map((el : any) => {
      this.refundReasonList.push(el.item);
    });

  }

  ngOnInit() {
    this.saleService.fetchRefundReasonsEvent.subscribe(
      {
        next: res => {
          console.log('Fetch refund reasons again');
          this.fetchRefundReason();
        }
      }
    );

  }

}

