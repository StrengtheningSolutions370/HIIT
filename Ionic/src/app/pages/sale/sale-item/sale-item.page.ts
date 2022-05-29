import { Component, OnInit } from '@angular/core';
import { SaleItem } from 'src/app/models/sale-item';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.page.html',
  styleUrls: ['./sale-item.page.scss'],
})
export class SaleItemPage implements OnInit {

  mock = {
    SaleItemID : 1,
    Name : "Towel",
    Photo : false,
    Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum recusandae fugiat rem soluta autem id illum quidem dignissimos mollitia.",
    Price : 212.23,
    Quotable : true,
    Quantity : 9,
    SaleCategoryID : 1,
  }



  constructor() {

  }

  ngOnInit() {
  }

}
