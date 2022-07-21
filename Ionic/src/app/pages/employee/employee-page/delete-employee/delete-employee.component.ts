import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss'],
})
export class DeleteEmployeeComponent implements OnInit {

  @Input() employee: any;

  title! : string;
  employeeType! : string;
  qualification! : string;

  imgSrc = '';
  pdfSrc = '';
  showProfile = false;


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }


  ngOnInit() {
    
    this.title = 'not working';
    this.employeeType = 'not working';
    this.qualification = 'not working';

    if (this.employee.Photo != null) {
      this.showProfile = true;
    }

  }

     //Send through the id of the selected employee to be deleted in the employee service.
     async delete(id: number){
      this.employeeService.deleteEmployee(id);
      await this.dismissModal();
      this.sucDelete();
    }
  
    async sucDelete() {
      const toast = await this.toastCtrl.create({
        message: 'The Employee has been successfully deleted!',
        duration: 2000
      });
      toast.present();
    }
  
    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not delete Employee',
        message: 'There was an error deleting the employee, please try again.',
        buttons: ['OK']
      });
      alert.present();
    }
  
    dismissModal() {
      this.modalCtrl.dismiss();
    };

    public createImg = (fileName: string) => `https://localhost:44383/Resources/Employees/Images/${fileName}`;
    // public createContract = (fileName: string) => `https://localhost:44383/Resources/Employees/Contracts/${fileName}`;

    createContract(fileName : string) {
      const req = new Request(`https://localhost:44383/Resources/Employees/Contracts/${fileName}`, {
        mode : 'no-cors',
        headers: {
          "Content-Type": "application/pdf"
        }
      })
      const document = fetch(req).then(b => b.blob);
      console.log(document);
      return '';
    }

}


