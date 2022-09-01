import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WriteOff } from 'src/app/models/write-off';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-write-off',
  templateUrl: './write-off.page.html',
  styleUrls: ['./write-off.page.scss'],
})
export class WriteOffPage implements OnInit {

  //String used from the searchbar, used in the filter pipe to search write-off.
  public filter: string;

  //Create local write-off array to be populated onInit.
  writeOffList: any[] = [];

  //Subscription variable to track live updates.
  writeOff: Subscription;

  isLoading = true;

  constructor(public writeOffService: InventoryService, public saleItemService: SalesService) {
    this.fetchWriteOff();
  }

  fetchWriteOff() {
    this.isLoading = true;
    this.writeOffService.getAllWriteOffs().subscribe(
      {
        next: data => {
          console.log('Fetching write-off from DB');
          console.log(data);
          this.isLoading = false;
          this.writeOffList = data;
          console.log(this.writeOffList);
        }
      }
    );
  }

  ngOnInit() {
    this.writeOffService.fetchWriteOffsEvent.subscribe({
      next: res => {
        console.log('Fetch write-off again');
        console.log(res);
        this.fetchWriteOff();
      }
    })
  }
  
  getSaleItem(writeOffLine : any) {
    console.log(this.saleItemService.getAllSaleItems)
    console.log("LINE",writeOffLine)
    this.saleItemService.getAllSaleItems().subscribe({
      next: (data : any) => {
        console.log(data)
        var items = data.filter(si => si.saleItemID[0] == writeOffLine.saleItemID);
        console.log('items',items)
      }
    })
    return;
  }

  

}
