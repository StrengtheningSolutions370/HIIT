import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockPage } from './stock.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage
  },
      {
        path: 'write-off',
        loadChildren: () => import('./write-off/write-off.module').then( m => m.WriteOffPageModule)
      },
      {
        path: 'write-off-reason',
        loadChildren: () => import('./write-off-reason/write-off-reason.module').then( m => m.WriteOffReasonPageModule)
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockPageRoutingModule {}
