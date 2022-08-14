import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
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


  constructor(public global: GlobalService, public cartService: CartService) { }

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

}
