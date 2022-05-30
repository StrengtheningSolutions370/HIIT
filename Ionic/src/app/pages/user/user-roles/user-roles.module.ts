import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRolesPageRoutingModule } from './user-roles-routing.module';

import { UserRolesPage } from './user-roles.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRolesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UserRolesPage]
})
export class UserRolesPageModule {}
