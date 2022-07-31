import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, ModalController, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Payment } from 'src/app/models/model';
import { SaleItem } from 'src/app/models/sale-item';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';





@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements ViewWillEnter {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  @Input() model = {} as Cart;
  @Input() saleItem = {} as SaleItem;
  cartSub: Subscription;

  payForm! : FormGroup;

  emptyCart = false;

  constructor( private httpComms : HttpClient, private cartService: CartService, private global: GlobalService,public formBuilder: FormBuilder
    ) {
    this.getData();

    this.payForm = this.formBuilder.group({
      merchant_id: ['10026801'],
      amount: ['100.00'],
      merchant_key: ['08fsf78tsgq70'],
      item_name: ['Pomodoro subscription']
    });
   }


   submit(){
    console.log('submitting payment')
   }

  async getData() {
    await this.cartService.getCartData();
  }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
    this.cartService.calculate();
  }

  quantityMinus(index) {
    this.cartService.quantityMinus(index);
    this.cartService.calculate();
    if(this.model?.totalItem === 0){
      this.model.items = null;
    }
    console.log('Quantiy Minus: Null:', this.model.items);

  }

  ionViewWillEnter() {
    this.cartSub = this.cartService.cart.subscribe(cart => {
      console.log('cart page: ', cart);
      this.model = cart;
      console.log('cart page model: ', this.model);
    });
    this.getData();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave CartPage');
    if(this.model?.items && this.model?.items.length > 0) {
      this.cartService.saveCart();
    }
    this.cartSub.unsubscribe();
  }


}
