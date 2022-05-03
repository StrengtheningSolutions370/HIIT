import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'qualification',
    loadChildren: () => import('./qualification/qualification.module').then( m => m.QualificationPageModule)
  },
  {
    path: 'employee-type',
    loadChildren: () => import('./employee-type/employee-type.module').then( m => m.EmployeeTypePageModule)
  },
  {
    path: 'qualification-type',
    loadChildren: () => import('./qualification-type/qualification-type.module').then( m => m.QualificationTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
