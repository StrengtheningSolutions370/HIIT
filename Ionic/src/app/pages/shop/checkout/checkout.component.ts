import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { CartModalPageRoutingModule } from '../cart-modal/cart-modal-routing.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() cartData = {} as Cart;
  logs: string[] = [];
  currentMethod = undefined;


  constructor(public global: GlobalService, public cartService: CartService, public storage: StoreService ) { }

  ngOnInit() {
    console.log(this.cartData);
  }

  pushLog(msg) {
    this.logs.unshift(msg);
  }

  async returnFrom(){
      this.global.dismissModal();
      this.cartService.openCart(this.cartData, this.cartData.items);
  }

  handleChange(e) {
    this.currentMethod = e.target.value;
  }

  async confirmChanges(){
    console.log(this.cartData);
    var saleItemArr = [];
    const u = JSON.parse(await this.storage.getKey("user"));
    console.log(u);
    this.cartData.items.forEach(element => {
      let quantityObj ={
        saleItemID: element.saleItemID,
        quantity: element.quantityChange
      }
      saleItemArr.push(quantityObj);
      console.log(saleItemArr);
    });
    var payObj = {
      userID: u.id,
      paymentTypeID: 1,
      sales: saleItemArr,
      bookings: null
    }
    console.log(payObj);
    this.cartService.makePayment(payObj);
    this.global.dismissModal();
    this.global.showToast(this.currentMethod + " sale successfully recorded");
  }

  proceedToPayment(){
    console.log(this.cartData);
    this.global.showAlert("Please make a cash payment in store","Card payment unavailable");
  }

}
