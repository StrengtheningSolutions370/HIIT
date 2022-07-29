import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.component.html',
  styleUrls: ['./view-exercise.component.scss'],
})
export class ViewExerciseComponent implements ViewWillEnter{

  @Input() exercise: Exercise;
  exerciseCategory: String;

  constructor( public global: GlobalService, public exerciseService: ExerciseService) {
    this.exerciseService.getAllExerciseCategorys().subscribe({
      next: data => {
        let list = data.result;
        console.log(this.exercise);
        list.forEach((x:ExerciseCategory)=>{
          console.log(x);
          if (x.exerciseCategoryID == this.exercise.exerciseCategory.exerciseCategoryID){
            this.exerciseCategory = x.name;
            console.log(x);
          }
        })
        
      }
    })

  }

  ionViewWillEnter(): void {
    this.exerciseService.getAllExerciseCategorys().subscribe({
      next: data => {
        let list = data.result;
        list.forEach(x=>{
          if (x.exerciseCategoryID == this.exercise.exerciseCategoryID){
            this.exerciseCategory = x.name;
          }
        })
        
      }
    })
    
  }

}
