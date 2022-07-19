import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exercise-category'; 
import { ExerciseService } from 'src/app/services/exercise/exercise.service'; 

@Component({
  selector: 'app-confirm-exercise-category',
  templateUrl: './confirm-exercise-category.component.html',
  styleUrls: ['./confirm-exercise-category.component.scss'],
})
export class ConfirmExerciseCategoryComponent implements OnInit {

  @Input() choice: number;
  @Input() exerciseCategory: ExerciseCategory;
  alertCtrl: any;

  constructor(private modalCtrl: ModalController, public exerciseService: ExerciseService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController, alertCtrl: AlertController ) { 
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  //1 = confirm ADD
  //2 = confirm UPDATE

  async confirmChanges(exerciseCategory: ExerciseCategory){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.exerciseService.matchingExerciseCategory(exerciseCategory.name) != null &&
      this.exerciseService.matchingExerciseCategory(exerciseCategory.description) != null)
      {
        console.log('Existing Exercise Category: ' + exerciseCategory.name +': '+ exerciseCategory.description);
        this.duplicateAlert();
        return;
      }
      else{
        console.log('Add Exercise Category from confirm:');
        //CallRepoToCreate
        await this.exerciseService.createExersiceCategory(exerciseCategory);
         this.dismissModal();
        this.sucAdd();
      }
    } else if (this.choice === 2){
      console.log('Update Exercise Category from confirm:');
      //CallRepoToUpdate
      await this.exerciseService.updateExerciseCategory(exerciseCategory.exerciseCategoryID,exerciseCategory);
      this.dismissModal();
      this.sucUpdate();
    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.exerciseCategory);
      await this.dismissModal();
      this.exerciseService.addExerciseCategoryInfoModal(this.exerciseCategory);
    } else if (this.choice === 2){
      console.log(this.exerciseCategory);
      await this.dismissModal();
      this.exerciseService.updateExerciseCategoryInfoModal(this.exerciseCategory);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Exercise Category has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Exercise Category has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Exercise Category Already Exists',
      message: 'The Exercise Category Information entered already exists on the system',
      buttons: ['OK']
    });
   alert.present();
  }

  ngOnInit() {}

}
