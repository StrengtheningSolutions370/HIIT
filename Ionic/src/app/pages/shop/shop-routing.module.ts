import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ShopPage,
    children:[
      {
        path: 'items',
        loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/items',
    pathMatch: 'full'
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'quote-request',
    loadChildren: () => import('./quote-request/quote-request.module').then( m => m.QuoteRequestPageModule)
  },
  {
    path: 'item-filter',
    loadChildren: () => import('./item-filter/item-filter.module').then( m => m.ItemFilterPageModule)
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
