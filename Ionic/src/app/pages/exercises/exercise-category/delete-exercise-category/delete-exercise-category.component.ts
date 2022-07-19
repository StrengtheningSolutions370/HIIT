import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exercise-category'; 
import { ExerciseService } from 'src/app/services/exercise/exercise.service'; 

@Component({
  selector: 'app-delete-exercise-category',
  templateUrl: './delete-exercise-category.component.html',
  styleUrls: ['./delete-exercise-category.component.scss'],
})
export class DeleteExerciseCategoryComponent implements ViewWillEnter {
  @Input() exerciseCategory: ExerciseCategory;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
  public exerciseService: ExerciseService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

  ionViewWillEnter() {
    console.log('DeleteExerciseCategory - ViewWillEnter');
    console.log(this.exerciseCategory);
  }

  //Send through the id of the selected exercise category to be deleted in the exercise category service.
  async delete(id: number){
    this.exerciseService.deleteExerciseCategory(id);
    this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Exercise Category has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Exercise Category',
      message: 'There was an error deleting the Exercise Category, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the venue page.
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
