/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { AddTitleComponent } from 'src/app/pages/user/titles/add-title/add-title.component';
import { DeleteTitleComponent } from 'src/app/pages/user/titles/delete-title/delete-title.component';
import { UpdateTitleComponent } from 'src/app/pages/user/titles/update-title/update-title.component';
import { ViewTitlesComponent } from 'src/app/pages/user/titles/view-titles/view-titles.component';
import { ConfirmTitleComponent } from 'src/app/pages/user/titles/confirm-title/confirm-title.component';
import { AssociativeTitleComponent } from 'src/app/pages/user/titles/associative-title/associative-title.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  //Creating a titleList for all the titles in the service.
  private _titleList = new BehaviorSubject<Title[]>([]);

  //Return the venue list as an observable.
  public get titleList(){
    return this._titleList.asObservable();
  }

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //Receive the venues from the repo (API).
    this.repo.getTitles().subscribe(result => {
      console.log('Title List: Title Service -> Get Titles');
      console.log(result);

      var tempResult = Object.assign(result);
      this._titleList.next(tempResult);

      console.log('Title List: Title Service -> Updated Titles');
      console.log(this._titleList);
    })
  }

  //Methods
  //Add a title to the title list within the title service.
   createTitle(title: any){
     console.log('titleService: Repo -> Create Title');
     console.log(JSON.stringify(title));
     this.repo.createTitle(title).subscribe(res=> {
      var tempResult = Object.assign(res);
      console.log("Title Service: Create title");
      console.log(res);
      this._titleList.next(tempResult.data);
     });
   }

  //Receives a title to update in the service title list.
   updateTitle(id,title: any){
     console.log('titleService: Repo -> Update Title');
     console.log(title);

     const currentTitle = this._titleList.value;
     const index = currentTitle.findIndex(x => x.titleID === id)
     this.repo.updateTitle(title.titleID,title).subscribe(result =>
      console.log(result));
   }

  //Receives a title to delete in the service title list.
   deleteTitle(id: number){
     this.repo.deleteTitle(id).subscribe(result =>
      console.log(result));
   }

   matchingTitle(input: string){
    console.log('titleService: Repo -> Matching Title');
    this.repo.getMatch(input);
   }

   existingTitle(id: number){
    console.log('titleService: Repo -> Existing Title');
    this.repo.exists(id).subscribe(result =>
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
    let tempTitle = new Title();
    tempTitle = Object.assign(title);
    console.log(tempTitle);
    if (tempTitle.users!= null && tempTitle.users.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeTitleComponent,
          componentProps: {
            venue: tempTitle
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteTitleComponent,
          componentProps: {
            venue: tempTitle
        }
      });

      //Update the current title list with the title list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getTitles().subscribe(result => {
          var tempResult = Object.assign(result);
          this._titleList.next(tempResult);
          console.log("Updated title list: Title Service: delete title");
          console.log(this._titleList);
        });
      });
      await modal.present();
    }
  }

  //Display the view title modal.
    //This method receives the selected title object, from the title page, in the modal through the componentProps.
  async viewTitleInfoModal(title: Title) {
    console.log("TitleService: ViewTitleModalCall");
    let tempTitle = new Title();
    tempTitle = Object.assign(title);
    console.log(tempTitle);
    const modal = await this.modalCtrl.create({
      component: ViewTitlesComponent,
      componentProps: {
        title:tempTitle
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected title from the title page
  async confirmTitleModal(selection: number, title: any) {
    console.log('TitleService: ConfirmTitleModalCall');
    console.log(selection);
    if(selection === 1){
      console.log("Performing ADD");
      let tempTitle = new Title();
      tempTitle.titleID = 0;
      tempTitle = Object.assign(title);
      console.log(tempTitle);
      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          venue:tempTitle,
          choice:selection
        }
      });

      //Update the current venue list with the venue list from the confirm modal.
      modal.onDidDismiss().then(() => {
        this.repo.getTitles().subscribe(result => {
          var tempResult = Object.assign(result);
          this._titleList.next(tempResult);
          console.log("Updated title list: Title Service: confirm title");
          console.log(this._titleList);
        });
      });
      await modal.present();
    } else if (selection === 2){
      console.log("Performing UPDATE");
      let tempTitle = new Title();
      tempTitle = Object.assign(title);
      console.log(tempTitle);
      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          venue:tempTitle,
          choice:selection
        }
      });
      modal.onDidDismiss().then(() => {
        this.repo.getTitles().subscribe(result => {
          var tempResult = Object.assign(result);
          this._titleList.next(tempResult);
          console.log("Updated title list: Title Service: Update confirm title");
          console.log(this._titleList);
        });
      });
      await modal.present();
    } else {
      console.log("BadOption: " + selection)
    }
  }
}
