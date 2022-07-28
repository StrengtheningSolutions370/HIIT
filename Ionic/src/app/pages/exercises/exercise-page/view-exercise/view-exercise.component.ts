import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.component.html',
  styleUrls: ['./view-exercise.component.scss'],
})
export class ViewExerciseComponent{

  @Input() exercise: Exercise;

  constructor( public global: GlobalService) { 

  }

}
