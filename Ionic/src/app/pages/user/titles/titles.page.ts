import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Title } from 'src/app/models/title';
import { RepoService } from 'src/app/services/repo.service';
import { TitleService } from 'src/app/services/title/title.service';


@Component({
  selector: 'app-titles',
  templateUrl: './titles.page.html',
  styleUrls: ['./titles.page.scss'],
})
export class TitlesPage implements OnInit{

  //String used from the searchbar, used in the filter pipe to search titles.
  public filter: string;

  //Create local title array to be populated onInit.
  titleList: Title[] = [];

  //Subscription variable to track live updates.
  titleSub: Subscription;

  isLoading = true;

  // titles = [
  //   {name : 'Mr.',
  //    description : 'a designation for a man'},
  //   {name : 'Mrs',
  //    description : 'a designation for a woman who is married'},
  //   {name : 'Miss.',
  //   description : 'a designation for a young woman '},
  //   {name : 'Ms.',
  //   description : 'a designation for a woman who is unmarried'},
  //   {name : 'Dr.',
  //   description : 'a designation for a person who has obtained a doctorate (commonly a PhD)'},
  //   {name : 'Prof.',
  //   description : 'a designation for a person who is a teacher of the highest rank, or is a expert in their field'},
  // ];

  constructor(public titleService: TitleService, public repo: RepoService) { }

  ngOnInit() {
    setTimeout(async () => {
      //Populate the venue list within the venue page, with the venue list from the venue service.
      this.titleSub = this.titleService.titleList.subscribe(results => {
        this.titleList = results;

        console.log('Title Page Init -> Title List');
        console.log(this.titleList);
      });
    });
    this.getTitles();
  }

  //Receive venues from the repo in local page.
  async getTitles() {
    setTimeout(async () => {
      this.isLoading = false;
      await this.repo.getTitles();

      console.log('Title Page -> Get Titles');
      console.log(this.titleList);
    }, 2000);
  }

}
