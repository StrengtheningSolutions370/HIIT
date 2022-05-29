/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { AddTitleComponent } from 'src/app/pages/user/titles/add-title/add-title.component';
import { DeleteTitleComponent } from 'src/app/pages/user/titles/delete-title/delete-title.component';
import { UpdateTitleComponent } from 'src/app/pages/user/titles/update-title/update-title.component';
import { ViewTitlesComponent } from 'src/app/pages/user/titles/view-titles/view-titles.component';
import { ConfirmTitleComponent } from 'src/app/pages/user/titles/confirm-title/confirm-title.component';
import { AssociativeTitleComponent } from 'src/app/pages/user/titles/associative-title/associative-title.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  @Output() fetchTitlesEvent = new EventEmitter<Title>();

  //Creating a titleList for all the titles in the service.
  private _titleList = new BehaviorSubject<Title[]>([]);

  //Return the venue list as an observable.
  public get titleList(){
    return this._titleList.asObservable();
  }

  private temp: Title[];

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
    this.repo.createTitle(title).subscribe(
      {
        next: () => {
          console.log('TITLE CREATED');
          this.fetchTitlesEvent.emit(title);
        }
      }
    )
   }

   getAllTitles(): Observable<any> {
     return this.repo.getTitles();
   }

  //Receives a title to update in the service title list.
   async updateTitle(id: number,title: any) {
     return this.repo.updateTitle(title.titleID,title).subscribe(
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

   matchingTitle(input: string){
    console.log('titleService: Repo -> Matching Title');
    this.repo.getMatchTitle(input);
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
  async confirmTitleModal(choice: number, title: any) {
    console.log('TitleService: ConfirmTitleModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      // let tempTitle = new Title();
      // tempTitle.titleID = 0;
      // tempTitle = Object.assign(title);
      // console.log(tempTitle);
      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          title,
          choice
        }
      });

      //Update the current venue list with the venue list from the confirm modal.
      modal.onDidDismiss().then(() => {

        // this.repo.getTitles().subscribe(result => {
        //   var tempResult = Object.assign(result);
        //   this._titleList.next(tempResult);
        //   console.log("Updated title list: Title Service: confirm title");
        //   console.log(this._titleList);
        // });
        this.repo.getTitles();

      });

      await modal.present();

    } else if (choice === 2){

      console.log("Performing UPDATE");

      let tempTitle = new Title();
      tempTitle = Object.assign(title);
      console.log(tempTitle);

      const modal = await this.modalCtrl.create({
        component: ConfirmTitleComponent,
        componentProps: {
          title,
          choice
        }
      });

      modal.onDidDismiss().then(() => {

        // this.repo.getTitles().subscribe(result => {
        //   var tempResult = Object.assign(result);
        //   this._titleList.next(tempResult);
        //   console.log("Updated title list: Title Service: Update confirm title");
        //   console.log(this._titleList);
        // });

        this.repo.getTitles();

      });

      await modal.present();

    } else {

      console.log("BadOption: " + choice)

    }
  }
}
