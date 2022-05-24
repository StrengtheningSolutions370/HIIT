import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';
import { UserService } from 'src/app/services/user/user.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent {
  @Input() userRole: UserRole;


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public userService: UserService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

    ionViewWillEnter() {
      console.log('Delete User Role - View Will Enter');
      console.log(this.userRole);
    }

      //Send through the id of the selected venue to be deleted in the venue service.
  async delete(id: number){
    this.userService.deleteUserRole(id);
    await this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The user role has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }
  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Venue',
      message: 'There was an error deleting the venue, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the venue page.
  // async dismissModal() {
  //   this.modalCtrl.dismiss();
  //   console.log(this.route);
  //   await this.router.navigate(['../venues'],{relativeTo: this.route});
  // }


  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
