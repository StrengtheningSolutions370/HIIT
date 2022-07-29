import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { RepoService } from 'src/app/services/repo.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})
export class ExercisePagePage implements OnInit {
public filter: string;

exerciseList: Exercise[] = [];

exerciseSub: Subscription;

isLoading = true;

constructor(public exerciseService: ExerciseService, public repo: RepoService) {
   this.fetchExercise();
  }

  fetchExercise() {
    this.isLoading = true;
    this.exerciseService.getAllExercises().subscribe(
      {
        next: data => {
          console.log('Fetching exercises from DB');
          console.log(data);
          this.isLoading = false;
          this.exerciseList = data.result;
        }
      }
    );
  }


  ngOnInit() {
    this.exerciseService.fetchExercisesEvent.subscribe(
      {
        next: res => {
          console.log('Fetch exercises again');
          this.fetchExercise();
        }
      }
    );
  }

}
