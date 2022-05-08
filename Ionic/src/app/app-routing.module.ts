import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmployeePage } from './pages/employee/employee.page';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeePageModule) 
  },
  {
    path: 'venue',
    loadChildren: () => import('./pages/venue/venue.module').then(m => m.VenuePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
