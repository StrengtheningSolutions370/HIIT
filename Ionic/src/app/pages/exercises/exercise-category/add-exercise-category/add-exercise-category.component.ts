/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { Component,  Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseCategory } from 'src/app/models/exercise-category';  
import { ExerciseService } from 'src/app/services/exercise/exercise.service'; 
import { ModalController, ToastController, AlertController, ViewWillEnter} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-exercise-category',
  templateUrl: './add-exercise-category.component.html',
  styleUrls: ['./add-exercise-category.component.scss'],
})
export class AddExerciseCategoryComponent implements ViewWillEnter {

  @Input() exerciseCategory: ExerciseCategory;

   //Creating the form to add the new venue details, that will be displayed in the HTML component
   cExerciseCategoryForm: FormGroup = this.formBuilder.group({
    exerciseCategoryName: ['', [Validators.required]],
    exerciseCategoryDescription: ['', [Validators.required]]
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public exerciseService: ExerciseService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }
  
  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cExerciseCategoryForm.controls;
  }

  ionViewWillEnter(): void {
    console.log("AddExerciseCategory-ViewWillEnter");
    console.log(this.exerciseCategory);
    if (this.exerciseCategory !=null){
      this.cExerciseCategoryForm.controls.exerciseCategoryName.setValue(this.exerciseCategory.name),
      this.cExerciseCategoryForm.controls.exerciseCategoryDescription.setValue(this.exerciseCategory.description);}
    }
  
    submitForm() {
      if (!this.cExerciseCategoryForm.valid){
        console.log(this.cExerciseCategoryForm.value['exerciseCategoryName']);
        console.log(this.cExerciseCategoryForm.value['exerciseCategoryDescription']);
        console.log('Please provide all required fields');
        return false;
      }
      else
      {
        const temp = {
          name: this.cExerciseCategoryForm.value['exerciseCategoryName'],
          description: this.cExerciseCategoryForm.value['exerciseCategoryDescription'],
          items: []
        };
        this.dismissModal();
        this.exerciseService.confirmExerciseCategoryModal(1,temp);

        // this.sucAdd();
        // console.log("CurrentRoute:ADD");
        // console.log(this.currentRoute.url);
      }
      
     }

     async sucAdd() {
      const toast = await this.toastCtrl.create({
        message: 'The Exercise Category has been successfully added!',
        duration: 2000,
        position : 'top'
      });
      toast.present();
    }

    //Once the modal has been dismissed.
    dismissModal() {
      this.modalCtrl.dismiss();
    };

    async duplicateAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Exercise Category Already Exists',
        message: 'The Exercise Category Information entered already exists on the system',
        buttons: ['OK']
      });
      alert.present();
    }

    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not create exercise category',
        message: 'There was an error creating the exercise category. Please try again',
        buttons: ['OK']
      });
      alert.present();
    }
}
