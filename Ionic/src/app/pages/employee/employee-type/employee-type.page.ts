import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.page.html',
  styleUrls: ['./employee-type.page.scss'],
})
export class EmployeeTypePage implements OnInit {

  employeeTypes = [
    {
      name : 'Administrator',
      description : 'a person responsible for carrying out the administration of a business or organization'
    },
    {
      name : 'Trainer',
      description : 'one whose occupation is to guide or instruct people in fitness and exercise routines a personal trainer ',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
