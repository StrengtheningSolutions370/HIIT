import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartModalPageRoutingModule } from './cart-modal-routing.module';

import { CartModalPage } from './cart-modal.page';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CartModalPage, CartItemComponent],
  bootstrap: [CartModalPage],

})
export class CartModalPageModule {}
