import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-confirm-title',
  templateUrl: './confirm-title.component.html',
  styleUrls: ['./confirm-title.component.scss'],
})
export class ConfirmTitleComponent{
  @Input() choice: number;
  @Input() title: Title;

  constructor(private modalCtrl: ModalController, public titleService: TitleService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl : ToastController) {
   }

   dismissModal() {
    this.modalCtrl.dismiss();
    //this.router.navigate(['../titles'],{relativeTo:this.activated});
  };
  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(title: Title){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.titleService.matchingTitle(title.description) != null)
      {
        console.log('Existing Title: ' + title.description);
        //display duplicate alert
        //failure alert
        return;
      }
      else {
        console.log('Add Title from confirm:');
        //CallRepoToCreate
        await this.titleService.createTitle(title);
        await this.dismissModal();
        this.sucAdd();
      }

    } else if (this.choice === 2){
      console.log('Update Title from confirm:');
      //CallRepoToUpdate
      (await this.titleService.updateTitle(title.titleID,title)).subscribe(
        {
          next: data => {
            this.dismissModal();
            this.sucUpdate();
          },
          error: err => {

          }
        }
      );
      
    }

    //dismiss modal
    // await this.dismissModal();
    //
  }

  async returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.title);
      await this.dismissModal();
      this.titleService.addTitleInfoModal(this.title);
    } else if (this.choice === 2){
      console.log(this.title);
      await this.dismissModal();
      this.titleService.updateTitleInfoModal(this.title);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Title has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Title has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }


}
