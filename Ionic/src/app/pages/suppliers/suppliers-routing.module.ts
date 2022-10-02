import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierPagePage } from './supplier-page/supplier-page.page';

import { SuppliersPage } from './suppliers.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersPageRoutingModule {}
