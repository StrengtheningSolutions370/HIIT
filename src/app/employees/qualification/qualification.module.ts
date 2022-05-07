import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationPageRoutingModule } from './qualification-routing.module';

import { QualificationPage } from './qualification.page';

import { AddQualificationComponent } from './add-qualification/add-qualification.component';
import { UpdateQualificationComponent } from './update-qualification/update-qualification.component';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';
import { ViewQualificationComponent } from './view-qualification/view-qualification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualificationPageRoutingModule
  ],
  declarations: [QualificationPage, AddQualificationComponent,
                  UpdateQualificationComponent, DeleteQualificationComponent, ViewQualificationComponent ],
})
export class QualificationPageModule {}
