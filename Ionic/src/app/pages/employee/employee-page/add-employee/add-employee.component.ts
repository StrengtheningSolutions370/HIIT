import { Component, OnInit} from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent{

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

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
