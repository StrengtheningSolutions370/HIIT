import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-delete-exercise-category',
  templateUrl: './delete-exercise-category.component.html',
  styleUrls: ['./delete-exercise-category.component.scss'],
})
export class DeleteExerciseCategoryComponent {
  @Input() exerciseCategory: ExerciseCategory;

  constructor(private global: GlobalService, public formBuilder: FormBuilder,
  public exerciseService: ExerciseService) { }


  //Send through the id of the selected exercise category to be deleted in the exercise category service.
  async delete(id: number){
    this.exerciseService.deleteExerciseCategory(id);
    this.global.dismissModal();
    this.global.showToast("The Exercise Category has been successfully deleted")
  }
}
