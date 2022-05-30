import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {

  titles = [
    {name : 'Mr.'},
    {name : 'Mrs'},
    {name : 'Miss.'},
    {name : 'Ms.'},
    {name : 'Dr.'},
    {name : 'Prof.'}
  ];

  employeeTypes = [
    {name : 'Administrator'},
    {name : 'Trainer'}
  ];

  qualificationTypes = [
    {name : 'Diploma'},
    {name : 'Certificate'},
    {name : 'Postgraduate Study'},
    {name : 'Bachelors degree'}
  ];

  qualifications = [
    {description : 'Fitness Instructing'},
    {description : 'Personal Training'},
    {description : 'Sport Management'},
    {description : 'Fitness Science'}
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
