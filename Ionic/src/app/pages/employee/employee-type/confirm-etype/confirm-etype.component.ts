import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-confirm-etype',
  templateUrl: './confirm-etype.component.html',
  styleUrls: ['./confirm-etype.component.scss'],
})
export class ConfirmEtypeComponent{
  @Input() choice: number;
  @Input() employeeType: EmployeeType;

  constructor(private modalCtrl: ModalController, public employeeService: EmployeeService,
    public router: Router, public activated: ActivatedRoute) { }

    async dismissModal() {
      await this.router.navigate(['../employees'],{relativeTo:this.activated});
      this.modalCtrl.dismiss();
    };
    //1 = confirm ADD
    //2 = confirm UPDATE
    confirmChanges(employeeType: EmployeeType){
      console.log(this.choice);
      if (this.choice === 1){
        //search duplicates
        if (this.employeeService.matchingEmployeeType(employeeType.name) != null ||
        this.employeeService.matchingEmployeeType(employeeType.description) != null)
        {
          console.log('Existing Employee Type: ' + employeeType.name + ' <-Name ++ Description -> ' + employeeType.description);
          //display duplicate alert
          //failure alert
          return;
        }
        else {
          console.log('Add Employee Type from confirm:');
          //CallRepoToCreate
          this.employeeService.createEmployeeType(employeeType);
        }

      } else if (this.choice === 2){
        console.log('Update Employee Type from confirm:');
        //CallRepoToUpdate
        this.employeeService.updateEmployeeType(employeeType.employeeTypeID,employeeType);
      }

      //dismiss modal
      this.dismissModal();
    }

}
