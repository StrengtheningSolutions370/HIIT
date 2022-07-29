import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/storage/store.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username! : string;

  constructor(private storage : StoreService, private cartService: CartService) { }

  ngOnInit() {

    this.storage.getKey('user').then((usr : any) => {
      const obj = JSON.parse(usr)
      this.username = `${obj.firstName} ${obj.lastName}`;
      console.log(this.username)
    })

  }

}
