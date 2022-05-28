import { Component, OnInit } from '@angular/core';
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

  constructor(public employeeService: EmployeeService, public repo: RepoService) {
    this.populateEmployeeTypes();

  }

  ngOnInit() {
    this.populateEmployeeTypes();
  }


  async populateEmployeeTypes() {
      //Populate the venue list within the venue page, with the venue list from the venue service.
      this.employeeTypeSub = this.employeeService.employeeTypeList.subscribe(results => {
        this.employeeTypeList = results;

        console.log('Employee Type Page Init -> Employee Type List');
        console.log(this.employeeTypeList);
      });

    await this.getEmployeeTypes();
  }

  //Receive venues from the repo in local page.
  async getEmployeeTypes() {
      this.isLoading = false;
       this.repo.getEmployeeTypes().subscribe(
        {
          next: res => {
            this.isLoading = false;
            console.log(res);
            this.employeeTypeList = res;
          }
        }
      );
      // console.log('Title Page -> Get Titles');
      // console.log(this.titleList);
  }
}
