import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { Title } from 'src/app/models/title';

@Component({
  selector: 'app-view-titles',
  templateUrl: './view-titles.component.html',
  styleUrls: ['./view-titles.component.scss'],
})
export class ViewTitlesComponent implements ViewWillEnter{
  @Input() title: Title;

  constructor(private modalCtrl: ModalController, public fb:FormBuilder) { 
  }

  ionViewWillEnter() {
    console.log("viewSpecificTitle-ViewWillEnter");
    console.log(this.title);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
