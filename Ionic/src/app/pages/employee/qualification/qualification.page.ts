import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.page.html',
  styleUrls: ['./qualification.page.scss'],
})
export class QualificationPage implements OnInit {

  qualifications = [
    {description : 'Fitness Instructing'},
    {description : 'Personal Training'},
    {description : 'Sport Management'},
    {description : 'Fitness Science'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
