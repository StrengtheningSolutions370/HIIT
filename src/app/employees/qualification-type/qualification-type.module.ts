import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationTypePageRoutingModule } from './qualification-type-routing.module';

import { QualificationTypePage } from './qualification-type.page';

import { AddQtypeComponent } from './add-qtype/add-qtype.component';
import { UpdateQtypeComponent } from './update-qtype/update-qtype.component';
import { DeleteQtypeComponent } from './delete-qtype/delete-qtype.component';
import { ViewQtypeComponent } from './view-qtype/view-qtype.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualificationTypePageRoutingModule
  ],
  declarations: [QualificationTypePage, AddQtypeComponent, UpdateQtypeComponent, DeleteQtypeComponent, ViewQtypeComponent  ]
})
export class QualificationTypePageModule {}
