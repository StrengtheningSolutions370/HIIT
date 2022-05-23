import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';


@Component({
  selector: 'app-delete-qtype',
  templateUrl: './delete-qtype.component.html',
  styleUrls: ['./delete-qtype.component.scss'],
})
export class DeleteQtypeComponent implements ViewWillEnter {
  @Input() qualificationType: QualificationType;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public qualificationService: QualificationService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

  ionViewWillEnter() {
    console.log("DeleteQualificationType - ViewWillEnter");
    console.log(this.qualificationType);
  }

  //Send through the id of the selected venue to be deleted in the venue service.
  async delete(id: number){
    this.qualificationService.deleteQualificationType(id);
    await this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification Type has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Qualification Type',
      message: 'There was an error deleting the qualification type, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the venue page.
  async dismissModal() {
    this.modalCtrl.dismiss();
    console.log(this.route);
    await this.router.navigate(['../qualification-type'],{relativeTo: this.route});
  }
}
