import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesPage } from './exercises.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisesPage
  },
  {
    path: 'exercise-category',
    loadChildren: () => import('./exercise-category/exercise-category.module').then( m => m.ExerciseCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesPageRoutingModule {}
