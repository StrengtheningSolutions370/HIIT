import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exercise-category';

@Component({
  selector: 'app-view-exercise-category',
  templateUrl: './view-exercise-category.component.html',
  styleUrls: ['./view-exercise-category.component.scss'],
})
export class ViewExerciseCategoryComponent implements ViewWillEnter {
  @Input() exerciseCategory: ExerciseCategory;

  constructor(private modalCtrl: ModalController, public fb: FormBuilder) { }

  ionViewWillEnter() {
    console.log('viewSpecificExerciseCategory-ViewWillEnter');
    console.log(this.exerciseCategory);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
  
}
