/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeType } from 'src/app/models/employeeType';
import { AddEmployeeComponent } from 'src/app/pages/employee/employee-page/add-employee/add-employee.component';
import { AddEtypeComponent } from 'src/app/pages/employee/employee-type/add-etype/add-etype.component';
import { AssociativeEtypeComponent } from 'src/app/pages/employee/employee-type/associative-etype/associative-etype.component';
import { ConfirmEtypeComponent } from 'src/app/pages/employee/employee-type/confirm-etype/confirm-etype.component';
import { DeleteEtypeComponent } from 'src/app/pages/employee/employee-type/delete-etype/delete-etype.component';
import { UpdateEtypeComponent } from 'src/app/pages/employee/employee-type/update-etype/update-etype.component';
import { ViewEtypeComponent } from 'src/app/pages/employee/employee-type/view-etype/view-etype.component';
import { RepoService } from '../repo.service';
import { TitleService } from '../title/title.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  @Output() fetchEmployeeTypesEvent = new EventEmitter<EmployeeType>();

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController,
    public titleService: TitleService) {
    //Receive the venues from the repo (API).
    this.getAllEmployeeTypes();
  }

  //Methods
  //Add a employee type to the employee type list within the employee service.
  createEmployeeType(employeeType: any) {
    this.repo.createEmployeeType(employeeType).subscribe({
      next: () => {
        console.log('EMPLOYEE TYPE CREATED');
        this.fetchEmployeeTypesEvent.emit(employeeType);
      }
    });
  }

  //Receives a venue to update in the service venue list.
  updateEmployeeType(id: number, employeeType: any) {
    if (id !== employeeType.employeeTypeID) {
      console.log("ERROR IN EMPLOYEE TYPE UPDATE - MISMATCH ID");
      return;
    }
    return this.repo.updateEmployeeType(id, employeeType).subscribe(
      {
        next: () => {
          console.log('VENUE UPDATED');
          this.fetchEmployeeTypesEvent.emit(employeeType);
        }
      }
    );
  }

  //Receives a venue to delete in the service venue list.
  deleteEmployeeType(id: number) {
    this.repo.deleteEmployeeType(id).subscribe(result => {
      console.log('VENUE DELETED');
      this.fetchEmployeeTypesEvent.emit();
    });
  }

  getAllEmployeeTypes(): Observable<any> {
    return this.repo.getEmployeeTypes();
  }


  matchingEmployeeType(name: string): Promise<any>{
    return this.repo.getMatchEmployeeType(name).toPromise();
   }

  existingEmployeeType(id: number) {
    console.log('Employee Service: Repo -> Existing Employee Type');
    this.repo.existsEmployeeType(id).subscribe(result =>
      console.log(result));
  }

  //Modals
  async addEmployeeTypeInfoModal(employeeType?: EmployeeType) {
    const modal = await this.modalCtrl.create({
      component: AddEtypeComponent,
      componentProps: {
        employeeType
      }
    });
    await modal.present();
  }

  //Display the update venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async updateEmployeeTypeInfoModal(employeeType: EmployeeType) {
    console.log('Employee Service: Update Employee Modal Call');
    const modal = await this.modalCtrl.create({
      component: UpdateEtypeComponent,
      componentProps: {
        employeeType
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
  async deleteEmployeeTypeInfoModal(employeeType: EmployeeType) {
    console.log("VenueService: DeleteVenueModalCall");
    if (employeeType.employees != null && employeeType.employees.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeEtypeComponent,
          componentProps: {
            employeeType
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteEtypeComponent,
          componentProps: {
            employeeType
        }
      });
      await modal.present();
    }
  }

  //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    async viewEmployeeTypeInfoModal(employeeType: EmployeeType) {
      console.log("VenueService: ViewVenueModalCall");
      const modal = await this.modalCtrl.create({
        component: ViewEtypeComponent,
        componentProps: {
          employeeType
        }
      });
      await modal.present();
    }

  //Display the confirm create/update modal
  //Receives the selected venue from the venue page
  async confirmEmployeeTypeModal(choice: number, employeeType: any) {
    console.log('VenueService: ConfirmVenueModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      const modal = await this.modalCtrl.create({
        component: ConfirmEtypeComponent,
        componentProps: {
          employeeType,
          choice
        }
      });
      await modal.present();
    } else if (choice === 2){
      console.log("Performing UPDATE");
      const modal = await this.modalCtrl.create({
        component: ConfirmEtypeComponent,
        componentProps: {
          employeeType,
          choice
        }
      });
      await modal.present();
    } else {
      console.log("BadOption: " + choice)
    }
  }

  async associativeVenueModal(employeeType: EmployeeType) {
    console.log("VenueService: AssociativeModalCall");
    const modal = await this.modalCtrl.create({
      component: AssociativeEtypeComponent,
      componentProps: {
        employeeType
      }
    });
    await modal.present();
  }
}

