import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import Fuse from 'fuse.js'
@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.page.html',
  styleUrls: ['./employee-page.page.scss'],
})
export class EmployeePagePage implements OnInit {

  // employees = [
  //   {
  //     name : 'Juan',
  //     surname : 'Zonneveld',
  //     type : 'Trainer',
  //     cell : '078 569 5894',
  //     email : 'zz.zonneveld@gmail.com',
  //     title : 'Mr.'
  //   },
  //   {
  //     name : 'Sonali',
  //     surname : 'Marais',
  //     type : 'Trainer',
  //     cell : ' 079 584 4523',
  //     email : 'sonalimarais001@icloud.com',
  //     title : 'Mrs.'
  //   },
  //   {
  //     name : 'Stacey',
  //     surname : 'Scott',
  //     type : 'Administrator',
  //     cell : '178 963 4123',
  //     email : 'staceyscot@icloud.com',
  //     title : 'Prof.'
  //   },
  //   {
  //     name : 'Luhan',
  //     surname : 'Smith',
  //     type : 'Trainer',
  //     cell : '078 987 7412',
  //     email : 'smith.luhan@gmail.com',
  //     title : 'Mr.'
  //   },
  //   {
  //     name : 'Ruben',
  //     surname : 'Haddow',
  //     type : 'Trainer',
  //     cell : '089 546 4125',
  //     email : 'ruben.haddow@gmail.com',
  //     title : 'Mr.'
  //   },
  //   {
  //     name : 'Chiante',
  //     surname : 'Brits',
  //     type : 'Administrator',
  //     email : 'brits550chiante@gmail.com',
  //     cell : '128 456 8952',
  //     title : 'Miss.'
  //   },
  //   {
  //     name : 'Juan',
  //     surname : 'Zonneveld',
  //     type : 'Trainer',
  //     cell : '089 564 2563',
  //     email : 'zz.zonneveld@gmail.com',
  //     title : 'Mr.'
  //   },
  //   {
  //     name : 'Sonali',
  //     surname : 'Marais',
  //     type : 'Trainer',
  //     cell : '078 962 2658',
  //     email : 'sonalimarais001@icloud.com',
  //     title : 'Mrs.'
  //   },
  //   {
  //     name : 'Stacey',
  //     surname : 'Scott',
  //     type : 'Administrator',
  //     cell : '089 549 5123',
  //     email : 'staceyscot@icloud.com',
  //     title : 'Prof.'
  //   },
  //   {
  //     name : 'Luhan',
  //     surname : 'Smith',
  //     type : 'Trainer',
  //     cell : '078 965 1236',
  //     email : 'smith.luhan@gmail.com',
  //     title : 'Mr.'
  //   }
  // ];

  employees : any[] = [];
  employeesOriginal : any[] = [];

  loading = true;
  noresults = false;

  constructor(private modalCtrl: ModalController, public employeeService: EmployeeService) { }
  
  ngOnInit() {
    
    this.employeeService.getAllEmployees().subscribe({
      next: (data : any) => {
        this.employees = data;
        this.employeesOriginal = data;
        this.loading = false;
        if (this.employees.length == 0) {
          this.noresults = true;
        }
      }
    })

  }

  searchEmployees(event : any) {

    const term = event.value;

    this.employees = this.employeesOriginal;
    this.noresults = false;

    if (term == '') {
      if (this.employees.length == 0) {
        this.noresults = true;
      }
      return;
    }

    const hits = new Fuse(this.employees, {
      keys: [
        'appUser.firstName',
        'appUser.lastName',
        'idNumber',
        'appUser.phoneNumber',
        'appUser.email',
        'appUser.title',
        'employeeType',
        'qualification'
      ]
    }).search(
      term
    );

    if (hits.length == 0) {
      //no res found
      this.noresults = true;
      return;
    }

    this.employees = [];
    hits.map((el : any) => {
      this.employees.push(el.item);
    })

  }

  async addEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : AddEmployeeComponent
    });
    await modal.present();

  }

  async updateEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateEmployeeComponent
    });
    await modal.present();
  }

  async deleteEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : DeleteEmployeeComponent
    });
    await modal.present();
  }

  async viewEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : ViewEmployeeComponent
    });
    await modal.present();
  }

  public createImg = (fileName: string) => `https://localhost:44383/Resources/Employees/Images/${fileName}`;

}
