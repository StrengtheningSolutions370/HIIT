import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sale-category',
  templateUrl: './sale-category.page.html',
  styleUrls: ['./sale-category.page.scss'],
})
export class SaleCategoryPage implements OnInit {

  public filter: string;

  saleCateSub: Subscription;

  isLoading = true;

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
