import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRolesPage } from './user-roles/user-roles.page';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: UserPage,
    children:[
      {
        path: 'user-roles',
        loadChildren: () => import('./user-roles/user-roles.module').then( m => m.UserRolesPageModule)
      },
      {
        path: 'titles',
        loadChildren: () => import('./titles/titles.module').then( m => m.TitlesPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/user-roles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}

