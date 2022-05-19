import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-category',
  templateUrl: './sale-category.page.html',
  styleUrls: ['./sale-category.page.scss'],
})
export class SaleCategoryPage implements OnInit {

  categories = [
    {name : 'Shop',
     description : 'Buy now, get product later'},
    {name : 'Store',
     description : 'Buy now, get product now'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
