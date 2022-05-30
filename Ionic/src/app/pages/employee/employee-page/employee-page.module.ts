import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePagePageRoutingModule } from './employee-page-routing.module';

import { EmployeePagePage } from './employee-page.page';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EmployeePagePageRoutingModule
  ],
  declarations: [EmployeePagePage, AddEmployeeComponent, DeleteEmployeeComponent,
    UpdateEmployeeComponent, ViewEmployeeComponent, FileUploadComponent]
})
export class EmployeePagePageModule {}
