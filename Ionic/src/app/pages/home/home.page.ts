import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/storage/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username! : string;

  constructor(private storage : StoreService, public cartService: CartService) { }

  ngOnInit() {

    this.storage.getKey('user').then((usr : any) => {
      const obj = JSON.parse(usr)
      this.username = `${obj.firstName} ${obj.lastName}`;
    })

  }

}
