import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user-roles',
    loadChildren: () => import('./user-roles/user-roles.module').then( m => m.UserRolesPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'trainers',
    loadChildren: () => import('./trainers/trainers.module').then( m => m.TrainersPageModule)
  },
  {
    path: 'venues',
    loadChildren: () => import('./venues/venues.module').then( m => m.VenuesPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then( m => m.SalePageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then( m => m.SuppliersPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
