import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { GlobalService } from 'src/app/services/global/global.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';


@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.scss'],
})
export class UpdateExerciseComponent implements ViewWillEnter {
  @Input() exercise: Exercise;
  exerciseCategoryDropDown!: ExerciseCategory[];

  uExerciseForm: FormGroup = this.formBuilder.group({
    name : ['', [Validators.required]],
    description : ['', [Validators.required]],
    exerciseCategory : ['', [Validators.required]],
  });

  get errorControl() {
    return this.uExerciseForm.controls;
  }

  constructor(public global: GlobalService, public formBuilder: FormBuilder,
    public exerciseService: ExerciseService) { }

    ionViewWillEnter() {
       console.log(this.exercise);
       this.exerciseService.getAllExerciseCategorys().subscribe(
         {
           next: data => {
             this.exerciseCategoryDropDown = data.result;
             console.log(data.result);
           }
         }
       );
       console.log(this.exercise);
       if (this.exercise != null) {
         this.uExerciseForm.controls.name.setValue(this.exercise.name);
         this.uExerciseForm.controls.description.setValue(this.exercise.description);
        }
    }

    submitForm() {
      if (!this.uExerciseForm.valid) { //If the form has any validation errors, the form will not be submitted.
        console.log('Please provide all required fields');
        this.global.showAlert('Please provide all required fields');
        return false;
      }
      else
      {
        console.log('InsideUpdateSubmit:');
        const temp = {
          exerciseID: this.exercise.exerciseID,
          name: this.uExerciseForm.controls['name'].value,
          description: this.uExerciseForm.controls['description'].value,
          exerciseCategoryID: this.uExerciseForm.controls['exerciseCategory'].value.split(',')[0],
          lessons: null
        };
        console.log(temp);
        this.exerciseService.confirmExerciseModal(2, temp, this.uExerciseForm.value['exerciseCategory'].split(',')[1]);
        this.global.dismissModal();
      }
  }

}
