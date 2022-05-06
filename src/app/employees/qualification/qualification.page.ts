import { Component} from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.page.html',
  styleUrls: ['./qualification.page.scss'],
})
export class QualificationPage {

  qualifications = [
    {description : 'Fitness Instructing'},
    {description : 'Personal Training'},
    {description : 'Sport Management'},
    {description : 'Fitness Science'}
  ];

  constructor() { }


}
