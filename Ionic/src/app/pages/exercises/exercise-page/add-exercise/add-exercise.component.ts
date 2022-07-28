import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements ViewWillEnter {

  @Input() exercise: Exercise;
  exerciseCategoryDropDown!: ExerciseCategory[];

  cExerciseForm: FormGroup = this.formBuilder.group({
    exerciseName : ['', [Validators.required]],
    exerciseDescription : ['', [Validators.required]],
    exerciseCategory : ['', [Validators.required]]
  });

  constructor(public global: GlobalService, public formBuilder: FormBuilder,
    public exerciseService: ExerciseService) { }

    get errorControl() {
      return this.cExerciseForm.controls;
    }

    ionViewWillEnter(): void {
      this.exerciseService.getAllExerciseCategorys().subscribe(
        {
          next: data => {
            this.exerciseCategoryDropDown = data.result;
            console.log(data.result);
          }
        }
      );

      console.log("AddExercise-ViewWillEnter");
      console.log(this.exercise);
      if (this.exercise !=null){
        this.cExerciseForm.controls.exerciseName.setValue(this.exercise.name);
        this.cExerciseForm.controls.exerciseDescription.setValue(this.exercise.description);}
      }

      submitForm() {
        if (!this.cExerciseForm.valid){
          console.log('Please provide all required fields');
          return false;
        }else{
          const temp = {
            name: this.cExerciseForm.value['exerciseName'],
            description: this.cExerciseForm.value['exerciseDescription'],
            exerciseCategory: this.cExerciseForm.controls['exerciseCategory'].value.split(',')[0],
            lessons: []
          };
          this.global.dismissModal();
          this.exerciseService.confirmExerciseModal(1,temp,this.cExerciseForm.value['exerciseCategory'].split(',')[1]);
        }
       }




}
