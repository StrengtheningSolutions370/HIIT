import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.page.html',
  styleUrls: ['./employee-type.page.scss'],
})
export class EmployeeTypePage implements OnInit {
  //String used from the searchbar, used in the filter pipe to search venues.
  filter: string;

  //Create local venue array to be populated onInit.
  employeeTypeList: EmployeeType[] = [];

  //Subscription variable to track live updates.
  employeeTypeSub: Subscription;

  isLoading = true;

  constructor(public employeeService: EmployeeService, public repo: RepoService) { }

  ngOnInit() {
    setTimeout(async () => {
      //Populate the venue list within the venue page, with the venue list from the venue service.
      this.employeeTypeSub = this.employeeService.employeeTypeList.subscribe(results => {
        this.employeeTypeList = results;

        console.log('Venue Page Init -> Venue List');
        console.log(this.employeeTypeList);
      });
    });
    this.getEmployeeTypes();
  }

    //Receive venues from the repo in local page.
    async getEmployeeTypes() {
      setTimeout(async () => {
        this.isLoading = false;
        this.repo.getEmployeeTypes();
        console.log('Employee Type Page -> Get Employee Types');
        console.log(this.employeeTypeList);
      }, 1500);
    }

}
