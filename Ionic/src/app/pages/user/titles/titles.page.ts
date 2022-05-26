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

  constructor(public titleService: TitleService, public repo: RepoService) { 
    // this.populateTitles();
    this.fetchTitles();
  }

  fetchTitles() {
    this.isLoading = true;
    this.titleService.getAllTitles().subscribe(
      {
        next: data => {
          console.log("FETCHING TITLES FROM DB");
          console.log(data);
          this.isLoading = false;
          this.titleList = data;
        }
      }
    )
  }

  ngOnInit() {

    this.titleService.fetchTitlesEvent.subscribe(
      {
        next: res => {
          console.log('EMMIT TO GO FETCH THE TITLES AGAIN')
          this.fetchTitles();
        }
      }
    );

  }

}
