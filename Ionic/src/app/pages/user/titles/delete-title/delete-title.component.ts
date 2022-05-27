import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-delete-title',
  templateUrl: './delete-title.component.html',
  styleUrls: ['./delete-title.component.scss'],
})
export class DeleteTitleComponent implements ViewWillEnter {
  @Input() title: Title;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public titleService: TitleService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

    ionViewWillEnter() {
      console.log('DeleteTitle - ViewWillEnter');
      console.log(this.title);
    }

  //Send through the id of the selected title to be deleted in the title service.
  async delete(id: number){
    this.titleService.deleteTitle(id);
    await this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Title has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Title',
      message: 'There was an error deleting the title, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the title page.
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
