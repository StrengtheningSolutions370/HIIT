import { Component, Input, OnInit } from '@angular/core';
import { SaleItem } from 'src/app/models/sale-item';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-view-shop-item',
  templateUrl: './view-shop-item.component.html',
  styleUrls: ['./view-shop-item.component.scss'],
})
export class ViewShopItemComponent{

  @Input() saleItem: SaleItem;
  @Input() categoryName: string;
  constructor(public global: GlobalService) { }

}
