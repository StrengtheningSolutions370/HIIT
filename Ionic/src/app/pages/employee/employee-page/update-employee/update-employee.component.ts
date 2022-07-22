import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AllRoles } from 'src/app/app-routing.module';
import { Employee } from 'src/app/models/employee';
import { Roles } from 'src/app/models/roles.enum';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { RepoService } from 'src/app/services/repo.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {

  @Input() employee : any;

  roles : any[] = [];

  titleList: any[] = [];
  employeeTypeList: any[] = [];
  qualificationList: any[] = [];
  qualificationTypeList: any[] = [];

  cEmployeeForm! : FormGroup;

  showProfile = false;

  photoFlag = false;
  contractFlag = true;

  imgSrc = '';
  pdfSrc = '';

  photo! : File;
  contract! : File;

  ddRole! : any;

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
      const temp = el;
      if (el == 'generalemployee') {
        el = 'General Employee';
      }
      this.roles.push({
        value: temp,
        role: el.substring(0, 1).toUpperCase() + el.substring(1, el.length)
      })
    }

  ngOnInit() {

    console.log(this.employee);

    if (this.employee.data.photo == null) {
      this.showProfile = false;
    }

    this.cEmployeeForm = this.formBuilder.group({
      name: [this.employee.data.appUser.firstName, [Validators.required]],
      contract: ['', [this.validateContract]],
      email: [this.employee.data.appUser.email, [Validators.required, Validators.email]],
      surname: [this.employee.data.appUser.lastName, [Validators.required]],
      photo: ['', this.validatePhoto],
      idNumber: [this.employee.data.idNumber, [this.validateIDNumber]],
      phone: [this.employee.data.appUser.phoneNumber, [Validators.pattern(/[0-9]{10}/)]],
      titleId: [this.employee.data.appUser.title.titleID, [Validators.required]],
      qualificationId : [this.employee.data.qualification.qualificationID, Validators.required],
      employeeTypeId: [this.employee.data.employeeType.employeeTypeID, Validators.required],
      role: [this.employee.role[0], Validators.required]
    });

    this.ddRole = {
      id : 0,
      name : this.employee.role[0]
    }

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

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  get errorControl() {
    return this.cEmployeeForm.controls;
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

  submitForm() {
    console.log('quli');
    console.log(this.cEmployeeForm.controls['qualificationId'].value);
  }

  addContract(event : any) {
    this.contractFlag = true;
    this.contract = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
    };
    reader.readAsArrayBuffer(this.contract);
  }

  addPhoto(event : any) {

    this.imgSrc = '';
    this.photo = null;
    this.showProfile = false;

    if (event.target.files.length == 0)
      return;

    this.photoFlag = true;
    this.photo = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event : any) => {
      this.imgSrc = event.target.result;
      this.showProfile = true;
    }
    reader.readAsDataURL(this.photo);

  }

  createImg () {
    if (this.employee.data.photo == null)
      return `https://localhost:44383/Resources/Employees/Images/default.jpeg`;
    return `https://localhost:44383/Resources/Employees/Images/${this.employee.data.photo}`;
  }

  public createContract = () => `https://localhost:44383/Resources/Employees/Contracts/${this.employee.data.contract}`;


}
