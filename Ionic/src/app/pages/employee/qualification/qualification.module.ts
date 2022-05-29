import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationPageRoutingModule } from './qualification-routing.module';

import { QualificationPage } from './qualification.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddQualificationComponent } from './add-qualification/add-qualification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QualificationPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [QualificationPage, AddQualificationComponent]
})
export class QualificationPageModule {}
