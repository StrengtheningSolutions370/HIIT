import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordmanagerPage } from './passwordmanager.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordmanagerPageRoutingModule {}
