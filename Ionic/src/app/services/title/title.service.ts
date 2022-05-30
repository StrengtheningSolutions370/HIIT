/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { AddTitleComponent } from 'src/app/pages/user/titles/add-title/add-title.component';
import { DeleteTitleComponent } from 'src/app/pages/user/titles/delete-title/delete-title.component';
import { UpdateTitleComponent } from 'src/app/pages/user/titles/update-title/update-title.component';
import { ViewTitlesComponent } from 'src/app/pages/user/titles/view-titles/view-titles.component';
import { ConfirmTitleComponent } from 'src/app/pages/user/titles/confirm-title/confirm-title.component';
import { AssociativeTitleComponent } from 'src/app/pages/user/titles/associative-title/associative-title.component';
import { RepoService } from '../repo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  @Output() fetchTitlesEvent = new EventEmitter<Title>();

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Receive the venues from the repo (API).
    this.getAllTitles();
  }

  getAllTitles(): Observable<any> {
    return this.repo.getTitles();
  }

  //Methods
  //Add a title to the title list within the title service.
   createTitle(title: any){
    this.repo.createTitle(title).subscribe(
      {
        next: () => {
          console.log('TITLE CREATED');
          this.fetchTitlesEvent.emit(title);
        }
      }
    )
   }

  //Receives a title to update in the service title list.
   updateTitle(id: number,title: any) {
     return this.repo.updateTitle(id,title).subscribe(
       {
        next: () => {
          console.log('TITLE UPDATED');
          this.fetchTitlesEvent.emit(title);
        }
       }
     )
   }

  //Receives a title to delete in the service title list.
   deleteTitle(id: number){
    this.repo.deleteTitle(id).subscribe(result => {
      console.log('TITLE DELETED');
      this.fetchTitlesEvent.emit();
    });
   }  

   matchingTitle(input: string): Promise<any>{
    console.log('titleService: Repo -> Matching Title');
    return this.repo.getMatchTitle(input).toPromise();
   }

   existingTitle(id: number){
    console.log('titleService: Repo -> Existing Title');
    this.repo.existsTitle(id).subscribe(result =>
     console.log(result));
   }

  //Modals
  async addTitleInfoModal(title?: Title) {
    const modal = await this.modalCtrl.create({
      component: AddTitleComponent,
      componentProps:{
        title
      }
    });
    await modal.present();
  }

  //Display the update venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async updateTitleInfoModal(title: Title) {
    console.log("TitleService: UpdateTitleModalCall");
    const modal = await this.modalCtrl.create({
      component: UpdateTitleComponent,
      componentProps:{
        title
      }
    });
    await modal.present();
  }

  //Display the delete title modal.
  //This method receives the selected title object, from the title page, in the modal through the componentProps.
  async deleteTitleInfoModal(title: Title) {
    console.log("TitleService: DeleteTitleModalCall");
    if (title.users!= null && title.users.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeTitleComponent,
          componentProps: {
            title
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteTitleComponent,
          componentProps: {
            title
        }
      });
      await modal.present();
    }
  }

  //Display the view title modal.
    //This method receives the selected title object, from the title page, in the modal through the componentProps.
  async viewTitleInfoModal(title: Title) {
    console.log("TitleService: ViewTitleModalCall");
    const modal = await this.modalCtrl.create({
      component: ViewTitlesComponent,
      componentProps: {
        title
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected title from the title page
  async confirmTitleModal(choice: number, title: any) {
    console.log('TitleService: ConfirmTitleModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          title,
          choice
        }
      });
      await modal.present();

    } else if (choice === 2){

      console.log("Performing UPDATE");
      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          title,
          choice
        }
      });

      await modal.present();

    } else {

      console.log("BadOption: " + choice)

    }
  }
}
