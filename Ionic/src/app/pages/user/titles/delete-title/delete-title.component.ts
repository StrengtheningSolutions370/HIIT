import { Component, Input } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Title } from 'src/app/models/title';
import { GlobalService } from 'src/app/services/global/global.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-delete-title',
  templateUrl: './delete-title.component.html',
  styleUrls: ['./delete-title.component.scss'],
})
export class DeleteTitleComponent implements ViewWillEnter {
  @Input() title: Title;

  constructor(public global:GlobalService,
    public titleService: TitleService) { }

    ionViewWillEnter() {
      console.log('DeleteTitle - ViewWillEnter');
      console.log(this.title);
    }

  //Send through the id of the selected title to be deleted in the title service.
  delete(id: number){
    this.titleService.deleteTitle(id);
    this.global.dismissModal();
    this.global.showToast("The Title has been successfully deleted!");
  }
}
