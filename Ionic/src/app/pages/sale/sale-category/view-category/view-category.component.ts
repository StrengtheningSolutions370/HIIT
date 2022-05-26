import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { SaleCategory } from 'src/app/models/sale-category';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements ViewWillEnter {
  @Input() saleCategory: SaleCategory;

  constructor(private modalCtrl: ModalController, public fb: FormBuilder) {
  }

  ionViewWillEnter() {
    console.log('viewSpecificSaleCategory-ViewWillEnter');
    console.log(this.saleCategory);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
