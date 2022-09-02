import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-booking-item',
  templateUrl: './cart-booking-item.component.html',
  styleUrls: ['./cart-booking-item.component.scss'],
})
export class CartBookingItemComponent {

  @Input() booking: any;

  constructor() { }

}
