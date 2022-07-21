import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  @Input() employee: any;

  title! : string;
  employeeType! : string;
  qualification! : string;
  contract! : any;
  imgSrc = '';
  pdfSrc = '';


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }


  ngOnInit() {
console.log('emp', this.employee)
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  createImg (fileName: string) {
    if (fileName == null)
      return `https://localhost:44383/Resources/Employees/Images/default.jpeg`;
    return `https://localhost:44383/Resources/Employees/Images/${fileName}`;
  }

  public createContract = (fileName: string) => `https://localhost:44383/Resources/Employees/Contracts/${fileName}`;

}
