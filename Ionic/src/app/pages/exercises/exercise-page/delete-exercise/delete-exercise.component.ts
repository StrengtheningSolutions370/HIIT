import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { GlobalService } from 'src/app/services/global/global.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';

@Component({
  selector: 'app-delete-exercise',
  templateUrl: './delete-exercise.component.html',
  styleUrls: ['./delete-exercise.component.scss'],
})
export class DeleteExerciseComponent implements ViewWillEnter {
  @Input() exercise: Exercise;

  constructor(public global: GlobalService,
    public exerciseService: ExerciseService) { }

    ionViewWillEnter() {
      console.log('DeleteExercise - ViewWillEnter');
      console.log(this.exercise);
    }

    delete(id: number){
      this.exerciseService.deleteExercise(id);
      this.global.dismissModal();
      this.global.showToast('The exercise has been successfully deleted!');
    }

}
