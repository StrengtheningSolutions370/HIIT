import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WriteOffReason } from 'src/app/models/write-off-reason';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import Fuse from 'fuse.js';


@Component({
  selector: 'app-write-off-reason',
  templateUrl: './write-off-reason.page.html',
  styleUrls: ['./write-off-reason.page.scss'],
})
export class WriteOffReasonPage implements OnInit {

  //String used from the searchbar, used in the filter pipe to search write-off reason.
  public filter: string;

  //Create local write-off reason array to be populated onInit.
  writeOffReasonList: WriteOffReason[] = [];
  writeOffReasonListOriginal: WriteOffReason[] = [];


  //Subscription variable to track live updates.
  writeOffReason: Subscription;
  noresults = false;
  isLoading = true;

  constructor(public writeOffReasonService: InventoryService) {
    this.fetchWriteOffReason();
  }

  fetchWriteOffReason() {
    this.isLoading = true;
    this.writeOffReasonService.getAllWriteOffReasons().subscribe(
      {
        next: data => {
          console.log('Fetching write-off reasons from DB');
          console.log(data);
          this.isLoading = false;
          this.writeOffReasonList = data.result;
          this.writeOffReasonListOriginal = this.writeOffReasonList
        }
      }
    );
  }

  ngOnInit() {
    this.writeOffReasonService.fetchWriteOffReasonsEvent.subscribe({
      next: res => {
        console.log('Fetch write-off reasons again');
        console.log(res);
        this.fetchWriteOffReason();
      }
    })
  }

  searchWOR(event : any) {
    this.noresults = false;

    if (event == '' || event == null) {
      this.writeOffReasonList = this.writeOffReasonListOriginal;


      if (this.writeOffReasonList.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.writeOffReasonList, {
      keys: [
        'description'
      ]
    }).search(
      event
    );

    this.writeOffReasonList = [];

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    hits.map((el : any) => {
      this.writeOffReasonList.push(el.item);
    });
  }

}
