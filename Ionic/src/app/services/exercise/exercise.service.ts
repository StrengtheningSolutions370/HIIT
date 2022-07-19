/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exerciseCategory';
import { AddExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/add-exercise-category/add-exercise-category.component'; 
import { DeleteExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/delete-exercise-category/delete-exercise-category.component'; 
import { UpdateExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/update-exercise-category/update-exercise-category.component'; 
import { ViewExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/view-exercise-category/view-exercise-category.component'; 
import { ConfirmExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/confirm-exercise-category/confirm-exercise-category.component'; 
import { AssociativeExerciseCategoryComponent } from 'src/app/pages/exercise/exercise-category/associative-exercise-category/associative-exercise-category.component'; 
import { RepoService } from '../repo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExersiceService {

  @Output() fetchExerciseCategorysEvent = new EventEmitter<ExerciseCategory>();

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Receive the exercise category from the repo (API).
    this.getAllExerciseCategorys();
  }

  getAllExerciseCategorys(): Observable<any> {
    return this.repo.getExerciseCategory();
  }

  //Methods
  //Add a exercise category to the exercise category list within the exercise category service.
   createExersiceCategory(exerciseCategory: any){
    this.repo.createExerciseCategory(exerciseCategory).subscribe(
      {
        next: () => {
          console.log('EXERCISE CATEGORY CREATED');
          this.fetchExerciseCategorysEvent.emit(exerciseCategory);
        }, 
        error: () => {
        }
      }
    )
   }

  //Receives a exercise category to update in the service exercise category list.
   updateExerciseCategory(id: number,exerciseCategory: any) {
     return this.repo.updateExerciseCategory(id,exerciseCategory).subscribe(
       {
        next: () => {
          console.log('EXERCISE CATEGORY UPDATED');
          this.fetchExerciseCategorysEvent.emit(exerciseCategory);
        }
       }
     )
   }

  //Receives a exercise category to delete in the service exercise category list.
   deleteExerciseCategory(id: number){
    this.repo.deleteExerciseCategory(id).subscribe(result => {
      console.log('EXERCISE CATEGORY DELETED');
      this.fetchExerciseCategorysEvent.emit();
    });
   }  

   matchingExerciseCategory(input: string): Promise<any>{
    console.log('exercisecategoryService: Repo -> Matching Exercise category');
    return this.repo.getMatchExerciseCategory(input).toPromise();
   }

   existingExerciseCategory(id: number){
    console.log('exerciseCategoryService: Repo -> Existing Exercise category');
    this.repo.existsExerciseCategory(id).subscribe(result =>
     console.log(result));
   }

  //Modals
  async addExerciseCategoryInfoModal(exerciseCategory?: ExerciseCategory) {
    const modal = await this.modalCtrl.create({
      component: AddExerciseCategoryComponent,
      componentProps:{
        exerciseCategory
      }
    });
    await modal.present();
  }

  //Display the update exercise category modal.
  //This method receives the selected exercise category object, from the exercise category page, in the modal through the componentProps.
  async updateExerciseCategoryInfoModal(exerciseCategory: ExerciseCategory) {
    console.log("ExerciseCategoryService: UpdateExerciseCategoryModalCall");
    const modal = await this.modalCtrl.create({
      component: UpdateExerciseCategoryComponent,
      componentProps:{
        exerciseCategory
      }
    });
    await modal.present();
  }

  //Display the delete exercise category modal.
  //This method receives the selected exercise category object, from the exercise category page, in the modal through the componentProps.
  async deleteExerciseCategoryInfoModal(exerciseCategory: ExerciseCategory) {
    console.log("ExerciseCategory: DeleteExerciseCategoryModalCall");
    if (exerciseCategory.exercises! = null && exerciseCategory.exercises.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeExerciseCategoryComponent,
          componentProps: {
            exerciseCategory
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteExerciseCategoryComponent,
          componentProps: {
            exerciseCategory
        }
      });
      await modal.present();
    }
  }

  //Display the view exercise category modal.
    //This method receives the selected exercise category object, from the exercise category page, in the modal through the componentProps.
  async viewExerciseCategoryInfoModal(exerciseCategory: ExerciseCategory) {
    console.log("ExerciseCategoryService: ViewExerciseCategoryModalCall");
    const modal = await this.modalCtrl.create({
      component: ViewExerciseCategoryComponent,
      componentProps: {
        exerciseCategory
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected exercise category from the exercise category page
  async confirmExerciseCategoryModal(choice: number, exerciseCategory: any) {
    console.log('ExerciseCategoryService: ConfirmExerciseCategoryModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      const modal = await this.modalCtrl.create({
        component: ConfirmExerciseCategoryComponent,
        componentProps: {
          exerciseCategory,
          choice
        }
      });
      await modal.present();

    } else if (choice === 2){

      console.log("Performing UPDATE");
      const modal = await this.modalCtrl.create({
        component: ConfirmExerciseCategoryComponent,
        componentProps: {
          exerciseCategory,
          choice
        }
      });

      await modal.present();

    } else {

      console.log("BadOption: " + choice)

    }
  }

  async associativeExerciseCategoryModal(exerciseCategory: ExerciseCategory) {
    console.log("ExerciseCategoryService: AssociativeModalCall");
    const modal = await this.modalCtrl.create({
      component: AssociativeExerciseCategoryComponent,
      componentProps: {
        exerciseCategory
      }
    });
    await modal.present();
  }
}
