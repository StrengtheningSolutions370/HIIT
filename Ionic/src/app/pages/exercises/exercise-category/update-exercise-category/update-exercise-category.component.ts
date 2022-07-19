import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { ExerciseCategory } from 'src/app/models/exercise-category';
import { ExerciseService } from 'src/app/services/exercise/exercise.service'; 

@Component({
  selector: 'app-update-exercise-category',
  templateUrl: './update-exercise-category.component.html',
  styleUrls: ['./update-exercise-category.component.scss'],
})
export class UpdateExerciseCategoryComponent {
  @Input() exerciseCategory: ExerciseCategory;
  
  uExerciseCategoryForm: FormGroup = new FormGroup({
    exerciseCategoryDescription: new FormControl('', [Validators.required]),
    exerciseCategoryName: new FormControl('', [Validators.required])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public exerciseService: ExerciseService, private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uExerciseCategoryForm.controls;
  }

  ionViewWillEnter() {
    console.log('UpdateExerciseCategory-ViewWillEnter');
    console.log(this.exerciseCategory);
    this.uExerciseCategoryForm.controls.exerciseCategoryName.setValue(this.exerciseCategory.name);
    this.uExerciseCategoryForm.controls.exerciseCategoryDescription.setValue(this.exerciseCategory.description);
  }

  submitForm() {
    if 
    (!this.uExerciseCategoryForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      this.invalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      var temp = new ExerciseCategory();
      const choice = 2;
      temp = {
        exerciseCategoryID: this.exerciseCategory.exerciseCategoryID,
        name: this.uExerciseCategoryForm.value['exerciseCategoryName'],
        description: this.uExerciseCategoryForm.value['exerciseCategoryDescription'],
        exercises: []
      };
       console.log(temp);
       this.exerciseService.confirmExerciseCategoryModal(choice,temp);
       this.dismissModal();
    }
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Exercise Category has been successfully updated!',
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async invalidAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Input',
      message: 'Please provide all required fields and ensure that the information is in the correct format',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not update exercise category',
      subHeader : 'There was an error updating the sale category. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }

}
