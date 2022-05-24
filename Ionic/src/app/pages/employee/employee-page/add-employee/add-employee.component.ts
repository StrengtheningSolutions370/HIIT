/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { Venue } from 'src/app/models/venue';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { RepoService } from 'src/app/services/repo.service';
import { TitleService } from 'src/app/services/title/title.service';
import { requiredFileType } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit{
  @Input() employee: Employee;
  titleList: Title[] = [];

  //Subscription variable to track live updates.
  titleSub: Subscription;

  progress=0;

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cEmployeeForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    photo: ['', [Validators.required,requiredFileType('png')]],
    idNumber: ['', [Validators.required]],
    checkBoxTitles: this.formBuilder.array([], [Validators.required])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router,private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController, public titleService: TitleService, public repo: RepoService  ) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cEmployeeForm.controls;
  }

  ngOnInit(): void {
    this.titleSub = this.repo.getTitles().subscribe(titles => {
      this.titleList = titles;

      console.log('Add Employee: NgOnIt: Return Title List');
      console.log(this.titleList);
    });

  }

  updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index) => {
        if (item.value === o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }

    onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.cEmployeeForm.get('checkboxBoxTitles') as FormArray;
    this.titleList.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    });
  }

  onSelectionChange(e, i) {
    const checkboxArrayList: FormArray = this.cEmployeeForm.get('checkboxBoxTitles') as FormArray;
    this.updateCheckControl(checkboxArrayList, e.target);
  }


  ionViewWillEnter(): void {
    if (this.employee !=null){
      console.log('Add Employee - View Will Enter');
      console.log(this.employee);

      this.cEmployeeForm.controls.name.setValue(this.employee.name);
      this.cEmployeeForm.controls.surname.setValue(this.employee.surname);
      this.cEmployeeForm.controls.photo.setValue(this.employee.photo);
      this.cEmployeeForm.controls.idNumber.setValue(this.employee.idNumber);
      this.cEmployeeForm.controls.checkBoxTitles.setValue(this.titleList);
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

  async getTitles() {
    setTimeout(async () => {
      //this.isLoading = false;
      await this.repo.getTitles();

      console.log('Add Employee Component -> Get Titles');
      console.log(this.titleList);
    }, 2000);
  }

}
