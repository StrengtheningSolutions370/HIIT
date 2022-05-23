import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-titles',
  templateUrl: './titles.page.html',
  styleUrls: ['./titles.page.scss'],
})
export class TitlesPage {

  titles = [
    {name : 'Mr.',
     description : 'a designation for a man'},
    {name : 'Mrs',
     description : 'a designation for a woman who is married'},
    {name : 'Miss.',
    description : 'a designation for a young woman '},
    {name : 'Ms.',
    description : 'a designation for a woman who is unmarried'},
    {name : 'Dr.',
    description : 'a designation for a person who has obtained a doctorate (commonly a PhD)'},
    {name : 'Prof.',
    description : 'a designation for a person who is a teacher of the highest rank, or is a expert in their field'},
  ];

  constructor(private modalCtrl: ModalController) { }

}
