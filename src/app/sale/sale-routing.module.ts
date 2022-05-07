import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePage } from './sale.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SalePage,
    children:[
      {
        path: 'sale-item',
        loadChildren: () => import('./sale-item/sale-item.module').then( m => m.SaleItemPageModule)
      },
      {
        path: 'sale-category',
        loadChildren: () => import('./sale-category/sale-category.module').then( m => m.SaleCategoryPageModule)
      },
      {
        path: 'vat',
        loadChildren: () => import('./vat/vat.module').then( m => m.VATPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalePageRoutingModule {}
