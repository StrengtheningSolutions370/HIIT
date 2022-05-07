import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesPageModule } from './employees.module';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: EmployeesPage,
    children:[
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
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
