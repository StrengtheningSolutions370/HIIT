import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitlesPageRoutingModule } from './titles-routing.module';

import { TitlesPage } from './titles.page';

import { AddTitleComponent } from './add-title/add-title.component';
import { UpdateTitleComponent } from './update-title/update-title.component';
import { DeleteTitleComponent } from './delete-title/delete-title.component';
import { ViewTitlesComponent } from './view-titles/view-titles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitlesPageRoutingModule
  ],
  declarations: [TitlesPage, AddTitleComponent, UpdateTitleComponent, DeleteTitleComponent, ViewTitlesComponent]
})
export class TitlesPageModule {}
