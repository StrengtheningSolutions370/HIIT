import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { GlobalService } from 'src/app/services/global/global.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';


@Component({
  selector: 'app-confirm-exercise',
  templateUrl: './confirm-exercise.component.html',
  styleUrls: ['./confirm-exercise.component.scss'],
})
export class ConfirmExerciseComponent {
  @Input() choice: number;
  @Input() exercise: Exercise;
  @Input() exerciseCategory: ExerciseCategory;

  constructor(public global: GlobalService, public exerciseService: ExerciseService) {

  }

  async checkMatch(name: string, description: string): Promise<boolean>{
    return this.exerciseService.matchingExercise(name,description).then(data => {
      console.log('Check match result:');
      console.log(data);
       if (data != 0)
       {let match = data.result;
        if (match.length > 1){
          this.global.showAlert("The exercise information entered already exists on the system","Duplicate Entry");
          return true;
        } else if (match.length == 1 && this.choice == 2 && match[0].exerciseID == this.exercise.exerciseID){
          alert("Matching itself in update");
          return false;
        } else {
          console.log("Must be in ADD, with exactly 1 other match: ");
          console.log("Choice: " + this.choice);
          this.global.showAlert("The exercise information entered already exists on the system","Duplicate Entry");
          return true;
        }
       } else {
         return false;
       }
     });
   }

   //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(exercise: Exercise){
    console.log(this.exercise);
    console.log(this.exerciseCategory);
    //search duplicates
    this.checkMatch(exercise.name,exercise.description).then(result =>{
      console.log(result);
      if (result == true){
         return;
       } else {
          if (this.choice === 1){
            console.log('Add Exercise from confirm:');
            //CallRepoToCreate
            this.exerciseService.createExercise(exercise);
            this.global.dismissModal();
            this.global.showToast('The exercise has been successfully added!');
        } else if (this.choice === 2){
            console.log('Update Exercise from confirm:');
            //CallRepoToUpdate
            this.exerciseService.updateExercise(exercise.exerciseID,exercise);
            this.global.dismissModal();
            this.global.showToast('The exercise has been successfully updated!');
          }
        }
      }
    );
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.exercise);
      this.global.dismissModal();
      this.exerciseService.addExerciseInfoModal(this.exercise);
    } else if (this.choice === 2){
      console.log(this.exercise);
      this.global.dismissModal();
      this.exerciseService.updateExerciseInfoModal(this.exercise);
    }
  }


}
