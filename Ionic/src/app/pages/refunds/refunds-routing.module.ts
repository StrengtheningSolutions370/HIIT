import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundsPage } from './refunds.page';

const routes: Routes = [
  {
    path: '',
    component: RefundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundsPageRoutingModule {}
