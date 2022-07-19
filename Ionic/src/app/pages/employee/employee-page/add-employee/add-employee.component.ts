/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder,FormControl,FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AllRoles } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { Employee } from 'src/app/models/employee';
import { EmployeeType } from 'src/app/models/employeeType';
import { QualificationType } from 'src/app/models/qualification-type';
import { Roles } from 'src/app/models/roles.enum';
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

  roles : any[] = [];

  photo! : File;
  photoFlag = false;
  contract! : File;
  contractFlag = false;

  //Creating the form to add the new venue details, that will be displayed in the HTML component

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router,private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController, public titleService: TitleService, public repo: RepoService, private storage : StoreService) {
      //this.roles = AllRoles;
      this.storage.getKey('token').then((token : any) => {
        this.repo.getUserRole(token).subscribe({
          next: (data : any) => {
            //check for who you can create - superuser can create admins:
            const currRole = data.role;
            AllRoles.map((el : string) => {
              if (el != Roles.SuperUser && el != Roles.Client && el != Roles.Member) {
                //filter to remove super user if a super user
                if (currRole == Roles.SuperUser && el != Roles.SuperUser) {
                  this.pushBackRole(el);
                } else {
                  //the user is an admin
                  if (el != Roles.SuperUser && el != Roles.Admin) {
                    this.pushBackRole(el)
                  }
                }
              }
            })
          }
        })
      })
    }

    pushBackRole(el : string) {
      if (el == 'generalemployee') {
        el = 'General Employee';
      }
      this.roles.push({
        value: el,
        role: el.substring(0, 1).toUpperCase() + el.substring(1, el.length)
      })
    }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cEmployeeForm.controls;
  }

  ngOnInit(): void {

    this.cEmployeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contract: ['', [this.validateContract]],
      email: ['', [Validators.required, Validators.email]],
      surname: ['', [Validators.required]],
      photo: ['', [this.validatePhoto]],
      idNumber: ['', [this.validateIDNumber]],
      phone: ['', [Validators.pattern(/[0-9]{10}/)]],
      titleId: ['', [Validators.required]],
      qualificationId : ['', Validators.required],
      employeeTypeId: ['', Validators.required],
      role: ['', Validators.required]
    });

    //getting employee types for drop down
    this.repo.getEmployeeTypes().subscribe({
      next: (data : any) => {
        this.employeeTypeList = data.result;
      }
    });

    //getting qualifications for drop down
    this.repo.getQualifications().subscribe({
      next: (data : any) => {
        this.qualificationList = data.result;
      }
    });

    //getting qualifications for drop down
    this.repo.getQualificationTypes().subscribe({
      next: (data : any) => {
        this.qualificationTypeList = data.result;
      }
    });

    //getting titles for drop down
    this.repo.getTitles().subscribe({
      next: (data : any) => {
        this.titleList = data.result;
      }
    });

  }

  addContract(event : any) {
    this.contractFlag = true;
    this.contract = event.target.files[0];
  }

  addPhoto(event : any) {
    this.photoFlag = true;
    this.photo = event.target.files[0];
  }

  validateContract(contract : FormControl) : {[valtype : string] : string} | null {
    const pattern = /.((pdf))$/
    if (!pattern.test(contract.value)) {
      return {'errormsg' : 'Please submit .png, .jpg or .jpeg'}
    }
    return null;
  }

  validatePhoto(contract : FormControl) : {[valtype : string] : string} | null {
    const pattern = /.((png)|(jpg)|(jpeg))$/
    if (!pattern.test(contract.value)) {
      return {'errormsg' : 'Please submit .png, .jpg or .jpeg'}
    }
    return null;
  }

  validateIDNumber(id : FormControl) : {[valtype : string] : string} | null {
    let IDNum = id.value;

    const pattern = /^[0-9]{13}/;
    if (!pattern.test(IDNum)) {
      return {'errormsg' : 'Please enter id number'}
    }
    //validate with check digit:
    var checkdigit = 0;
    var count = 0;
    for (var i = 0; i < IDNum.length - 1; i++) {
      var multiple = count % 2 + 1;
      count++;
      var temp = multiple * + IDNum[i];
      temp = Math.floor(temp / 10) + (temp % 10);
      checkdigit += temp;
    }
    checkdigit = (checkdigit * 9) % 10;
    if (checkdigit != IDNum[IDNum.length - 1]) {
      return {'errormsg': 'Entered id number is not valid'}
    }
    return null;
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
    // if (!this.cEmployeeForm.valid){
    //   console.log('Please provide all required fields');
    //   return false;
    // }else{
    //   const temp = {
    //     name: this.cEmployeeForm.value['name'],
    //     surname: this.cEmployeeForm.value['surname'],
    //     photo: this.cEmployeeForm.value['photo'],
    //     idNumber: this.cEmployeeForm.value['idNumber'],
    //     title: this.cEmployeeForm.value['checkboxBoxTitles']
    //   };
    //   this.employeeService.confirmEmployeeTypeModal(1,temp);
    //   this.dismissModal();
    //   // this.sucAdd();
    //   // console.log("CurrentRoute:ADD");
    //   // console.log(this.currentRoute.url);
    // }

    // if (!this.cEmployeeForm.valid) return;

    const emp = new Employee();

    emp.Name = this.cEmployeeForm.value['name'];
    emp.Surname = this.cEmployeeForm.value['surname'];
    emp.Photo = this.photo;
    emp.Contract = this.contract;
    emp.IDNumber = this.cEmployeeForm.value['idNumber'];
    emp.Phone = this.cEmployeeForm.value['phone'];
    emp.Email = this.cEmployeeForm.value['email'];
    emp.TitleID = this.cEmployeeForm.value['titleId'];
    emp.EmployeeTypeID = this.cEmployeeForm.value['employeeTypeId'];
    emp.QualificationID = this.cEmployeeForm.value['qualificationId'];
    emp.role = this.cEmployeeForm.value['role'];
    console.log('emp', emp)

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
