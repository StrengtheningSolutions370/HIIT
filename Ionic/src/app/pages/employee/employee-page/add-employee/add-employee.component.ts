/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder,FormControl,FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AllRoles } from 'src/app/app-routing.module';
import { Employee } from 'src/app/models/employee';
import { EmployeeType } from 'src/app/models/employeeType';
import { QualificationType } from 'src/app/models/qualification-type';
import { Venue } from 'src/app/models/venue';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { RepoService } from 'src/app/services/repo.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit{

  @Input() employee: Employee;
  
  titleList: any[] = [];
  employeeTypeList: any[] = [];
  qualificationList: any[] = [];
  qualificationTypeList: any[] = [];
  //Subscription variable to track live updates.
  titleSub: Subscription;
  qualificationTypeSub: Subscription;
  employeeTypeSub: Subscription;

  progress=0;
  cEmployeeForm! : FormGroup;
  roles! : any;

  //Creating the form to add the new venue details, that will be displayed in the HTML component

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router,private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController, public titleService: TitleService, public repo: RepoService, private storage : StoreService) {
      //this.roles = AllRoles;
      this.storage.getKey('token').then((token : any) => {
        this.repo.getUserRole(token).subscribe({
          next: (data : any) => {
            //check for who you can create - superuser can create admins:
            console.log('data from create', data);
          }
        })
      })
    }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cEmployeeForm.controls;
  }

  ngOnInit(): void {

    this.cEmployeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contract: ['', [Validators.required]],
      email: ['', [Validators.email]],
      surname: ['', [Validators.required]],
      //photo: ['', [Validators.required, requiredFileType('png')]],
      idNumber: ['', [Validators.required]],
      title: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/[0-9]{10}/)]],
      checkBoxTitles: this.formBuilder.array([], [Validators.required]),
      checkBoxQualificationTypes: this.formBuilder.array([], [Validators.required]),
      checkBoxEmployeeTypes: this.formBuilder.array([], [Validators.required])
    });

    //getting employee types for drop down
    this.repo.getEmployeeTypes().subscribe({
      next: (data : any) => {
        this.employeeTypeList = data.result;
      }
    })

    //getting qualifications for drop down
    this.repo.getQualifications().subscribe({
      next: (data : any) => {
        this.qualificationList = data.result;
      }
    })

    //getting qualifications for drop down
    this.repo.getQualificationTypes().subscribe({
      next: (data : any) => {
        this.qualificationTypeList = data.result;
      }
    })

    //getting titles for drop down
    this.repo.getTitles().subscribe({
      next: (data : any) => {
        this.titleList = data.result;
      }
    })

    // this.qualificationTypeSub = this.repo.getQualificationTypes().subscribe(qTypes => {
    //   this.qualificationTypeList = qTypes;

    //   console.log('Add Employee: NgOnIt: Return Qualification Type List');
    //   console.log(this.qualificationTypeList);
    // });

    // this.titleSub = this.repo.getTitles().subscribe(titles => {
    //   this.titleList = titles;

    //   console.log('Add Employee: NgOnIt: Return Title List');
    //   console.log(this.titleList);
    // });

    // this.employeeTypeSub = this.repo.getEmployeeTypes().subscribe(employeeTypes => {
    //   this.employeeTypeList = employeeTypes;

    //   console.log('Add Employee: NgOnIt: Return Title List');
    //   console.log(this.employeeTypeList);
    // });


  }

  // updateCheckControl(cal, o) {
  //   if (o.checked) {
  //     cal.push(new FormControl(o.value));
  //   } else {
  //     cal.controls.forEach((item: FormControl, index) => {
  //       if (item.value === o.value) {
  //         cal.removeAt(index);
  //         return;
  //       }
  //     });
  //   }
  // }

  //   onLoadCheckboxStatus() {
  //   const checkboxArrayList: FormArray = this.cEmployeeForm.get('checkboxBoxTitles') as FormArray;
  //   const checkboxArrayList1: FormArray = this.cEmployeeForm.get('checkboxBoxQualificationTypes') as FormArray;
  //   this.titleList.forEach(o => {
  //     this.updateCheckControl(checkboxArrayList, o);
  //   });
  //   this.qualificationTypeList.forEach(o => {
  //     this.updateCheckControl(checkboxArrayList1, o);
  //   });
  // }

  // onSelectionChange(e, i) {
  //   const checkboxArrayList: FormArray = this.cEmployeeForm.get('checkboxBoxTitles') as FormArray;
  //   this.updateCheckControl(checkboxArrayList, e.target);
  // }


  ionViewWillEnter(): void {
    if (this.employee != null) {
      console.log('Add Employee - View Will Enter');
      console.log(this.employee);
      this.cEmployeeForm.controls.name.setValue(this.employee.Name);
      this.cEmployeeForm.controls.contract.setValue(this.employee.Contract);
      this.cEmployeeForm.controls.title.setValue(this.employee.TitleID);
      this.cEmployeeForm.controls.email.setValue(this.employee.Email);
      this.cEmployeeForm.controls.phone.setValue(this.employee.Phone);
      this.cEmployeeForm.controls.surname.setValue(this.employee.Surname);
      this.cEmployeeForm.controls.photo.setValue(this.employee.Photo);
      this.cEmployeeForm.controls.idNumber.setValue(this.employee.IDNumber);
      //title, qualification, qualification type, role and employee type drop down lists
      this.cEmployeeForm.controls.checkBoxTitles.setValue(this.titleList);
      this.cEmployeeForm.controls.checkBoxQualificationTypes.setValue(this.qualificationTypeList);
    }
  }

  submitForm() {
    if (!this.cEmployeeForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      const temp = {
        name: this.cEmployeeForm.value['name'],
        surname: this.cEmployeeForm.value['surname'],
        photo: this.cEmployeeForm.value['photo'],
        idNumber: this.cEmployeeForm.value['idNumber'],
        title: this.cEmployeeForm.value['checkboxBoxTitles']
      };
      this.employeeService.confirmEmployeeTypeModal(1,temp);
      this.dismissModal();
      // this.sucAdd();
      // console.log("CurrentRoute:ADD");
      // console.log(this.currentRoute.url);
    }
   }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Venue has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  //Once the modal has been dismissed.
  dismissModal() {
    this.modalCtrl.dismiss();
  };

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Venue Already Exists',
      message: 'The Venue Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create venue',
      message: 'There was an error updating the venue. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }

  // async getTitles() {
  //   setTimeout(async () => {
  //     //this.isLoading = false;
  //     await this.repo.getTitles();

  //     console.log('Add Employee Component -> Get Titles');
  //     console.log(this.titleList);
  //   }, 2000);
  // }

  // async getQualificationTypes() {
  //   // setTimeout(async () => {
  //   //   //this.isLoading = false;
  //   //   await this.repo.getQualificationTypes();

  //   //   console.log('Add Employee Component -> Get Qualification Types');
  //   //   console.log(this.getQualificationTypes);
  //   // }, 2000);
    // this.repo.getQualificationTypes().subscribe({
    //   next: (data : any) => {
    //     this.qualificationTypeList = data;
    //     data.result.map((el : any) => {
    //       this.qualificationTypeList.push({name : el.name});
    //     })
    //     console.log('qualis', this.qualificationTypeList)
    //   }
    // })
  // }

}
