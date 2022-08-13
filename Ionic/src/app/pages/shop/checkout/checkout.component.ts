import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() cartData = {} as Cart;
  constructor(public global: GlobalService) { }

  ngOnInit() {
    console.log(this.cartData);
  }

}
