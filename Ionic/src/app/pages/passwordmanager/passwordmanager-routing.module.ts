import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordmanagerPage } from './passwordmanager.page';



const routes: Routes = [

  {
    path: '',
    component: PasswordmanagerPage,
    children:[
      {
        path: 'requestotp',
        loadChildren: () => import('./requestotp/requestotp-routing.module').then( m => m.RequestotpPageRoutingModule)
      },
      {
        path: 'change',
        loadChildren: () => import('./changepassword/changepassword-routing.module').then( m => m.ChangepasswordPageRoutingModule)
      },
      {
        path: 'setnew',
        loadChildren: () => import('./setnewpassword/setnewpassword-routing.module').then( m => m.SetnewpasswordPageRoutingModule)
      },
      {
        path: 'verifyotp',
        loadChildren: () => import('./verifyotp/verifyotp-routing.module').then( m => m.VerifyotpPageRoutingModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordmanagerPageRoutingModule {}
