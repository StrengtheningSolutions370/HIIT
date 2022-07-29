import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { CartModalPage } from './cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartModalPageRoutingModule {}
