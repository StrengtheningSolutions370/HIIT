import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRolesPage } from './user-roles.page';

const routes: Routes = [
  {
    path: '',
    component: UserRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRolesPageRoutingModule {}
