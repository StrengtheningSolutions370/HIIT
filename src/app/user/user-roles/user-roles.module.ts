import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRolesPageRoutingModule } from './user-roles-routing.module';

import { UserRolesPage } from './user-roles.page';

import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRolesPageRoutingModule
  ],
  declarations: [UserRolesPage, AddRoleComponent, UpdateRoleComponent, DeleteRoleComponent, ViewRoleComponent ]
})
export class UserRolesPageModule {}
