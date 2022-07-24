import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import Fuse from 'fuse.js'
import { Roles } from 'src/app/models/roles.enum';
import { GlobalService } from 'src/app/services/global/global.service';
@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.page.html',
  styleUrls: ['./employee-page.page.scss'],
})
export class EmployeePagePage implements OnInit {

  employees : any[] = [];
  employeesOriginal : any[] = [];
  rolefilter : any[] = [];
  searching = false;
  searchTerm = '';
  loading = true;
  noresults = false;
  filtering = false;
  filterTerm = '';

  constructor(private modalCtrl: ModalController, public employeeService: EmployeeService, private global : GlobalService) {
    
  }
  
  ngOnInit() {
    this.global.nativeLoad("Loading...");
    this.fetchEmployees();
    this.employeeService.fetchEmployeesEvent.subscribe({
      next: () => {
        this.fetchEmployees().then(() => this.global.endNativeLoad());
      }
    });
  }

  fetchEmployees() {
    return new Promise<any>((resolve, _) => {
      this.loading = true;
      this.employees = [];
      this.employeesOriginal = [];
      this.employeeService.getAllEmployees().subscribe({
        next: (data : any) => {
          this.loading = false;
          this.employees = data;
          this.employeesOriginal = data;
          if (this.employees.length == 0) {
            this.noresults = true;
          }
          this.employees.map((el : any) => {
            this.pushBackRole(el.role[0]);
          });
          this.removeduplicates();
          resolve(true);
        }
      });
    })
  }

  phoneFormat(number : string) : string {
    return `(${number.substring(0, 3)}) ${number.substring(3, 6)} ${number.substring(6, 10)}`;
  }

  removeduplicates() {
    const temp = this.rolefilter.filter((v,i,a)=>a.findIndex(v2=>(v2.value===v.value))===i)
    this.rolefilter = temp;
  }

  pushBackRole(el : string) {
    const temp = el;
    if (el == 'generalemployee') {
      el = 'General Employee';
    }
    this.rolefilter.push({
      value: temp,
      role: el.substring(0, 1).toUpperCase() + el.substring(1, el.length)
    })
  }

  upperCase(role : any) : string {
    role = role[0];
    if (role != Roles.GeneralEmployee) {
      role = role.substring(0, 1).toUpperCase() + role.substring(1, role.length);
      return role;
    }
    return "General Employee";
  }

  async addEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : AddEmployeeComponent
    });
    await modal.present();

  }

  async updateEmployeeInfoModal(employee : any) {
    const modal = await this.modalCtrl.create({
      component : UpdateEmployeeComponent,
      componentProps: {
        employee
      }
    });
    await modal.present();
  }

  async deleteEmployeeInfoModal(employee : any) {
    const modal = await this.modalCtrl.create({
      component : DeleteEmployeeComponent,
      componentProps: {
        employee
      }
    });
    await modal.present();
  }

  async viewEmployeeInfoModal(employee: any) {
   console.log('prop to pass', employee)
    const modal = await this.modalCtrl.create({
      component : ViewEmployeeComponent,
      componentProps: {
        employee
      }
    });
    await modal.present();
  }

  filter(input : any) {

    this.filtering = true;
    this.filterTerm = input.detail.value;
    const temp = this.employeesOriginal;

    if (input.detail.value == 'all') {
      this.filtering = false;
      this.employees = this.employeesOriginal;
      if (this.searching) {
        this.searchEmployees(this.searchTerm);
      }
      return;
    }

    this.employees = [];
    temp.map((el : any) => {
      if (el.role[0] == input.detail.value) {
        this.employees.push(el);
      }
    })

    if (this.searching) {
      this.searchEmployees(this.searchTerm);
    }

  }

  searchEmployees(event : string) {
    this.searching = true;

    this.searchTerm = event;

    this.noresults = false;

    if (this.searchTerm == '' || this.searchTerm == null) {
      this.searching = false;

      this.employees = this.employeesOriginal;
      if (this.filtering) {
        this.filter(this.filterTerm);
      }

      if (this.employees.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.employees, {
      keys: [
        'data.appUser.firstName',
        'data.appUser.lastName',
        'idNumber',
        'data.appUser.phoneNumber',
        'data.appUser.email',
        'data.appUser.title',
        'data.employeeType.name',
        'data.qualification.description',
        'role'
      ]
    }).search(
      this.searchTerm
    );

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    this.employees = [];
    hits.map((el : any) => {
      this.employees.push(el.item);
    })

  }

  createImg (fileName: string) {
    if (fileName == null)
      return `https://localhost:44383/Resources/Employees/Images/default.jpeg`;
    return `https://localhost:44383/Resources/Employees/Images/${fileName}`;
  };

}