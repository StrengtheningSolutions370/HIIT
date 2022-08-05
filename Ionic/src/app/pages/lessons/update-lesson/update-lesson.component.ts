import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-update-lesson',
  templateUrl: './update-lesson.component.html',
  styleUrls: ['./update-lesson.component.scss'],
})
export class UpdateLessonComponent implements OnInit {

  @Input() lesson : any;

  //form for creation
  cLessonForm! : FormGroup;

  //employees
  employees : any[] = [];
  employeesLoadFlag = false;
  imgSrc = '';
  showImage = false;

  //categories
  categories : any[] = [];
  categoriesLoadFlag = false;

  //to store the selected exercises
  id = 0;
  displaycount = 0;
  exercises : any[] = [];
  validExercises = false;

  constructor(private formBuilder : FormBuilder, private repo : RepoService, private modalCtrl : ModalController, private global : GlobalService, private lessonService : LessonService) { }

  ngOnInit() {

    console.log('update this lesson', this.lesson);

    //set the exe obj array:
    this.lesson.exercises.forEach((el : any) => {
      let exe = new exerciseObjs(this.id++);
      exe.exercisePostID = el.exerciseID;
      exe.category = el.exerciseCategory;
    });
  //   id : number;
  // exercisePostID : number = -1;
  // category : any;
  // exercise : any;
  // categoryset : boolean = false;

    //make the form
    this.cLessonForm = this.formBuilder.group({
      lessonName: ['', Validators.required],
      lessonEmployee: ['', Validators.required],
      exercises : ['']
    });

    this.cLessonForm.valueChanges.subscribe(() => {
      this.validateForm();
    });

    this.global.nativeLoad("Loading...");

    //fetch employees for the dropdown:
    this.repo.getEmployees().subscribe({
      next: (data : any) => {
        this.employees = data;
        console.log('employees',this.employees)
      }
    }).add(() => { 
      this.employeesLoadFlag = true;
      this.checkEndLoad();
    });

    //fetch all exercise categories that have the exercises:
    this.repo.getExerciseCategory().subscribe({
      next: (data : any) => {
        console.log('categories', data.result)
        this.categories = data.result.filter(e => e.exercises.length > 0);
      }
    }).add(() => { 
      this.categoriesLoadFlag = true;
      this.checkEndLoad();
    });
    
    this.setForm();

  }

  setForm() {
    this.cLessonForm.get('lessonName').setValue(this.lesson.name);
    const t = `${this.lesson.employee.employeeID},${this.lesson.employee.appUser.firstName} ${this.lesson.employee.appUser.lastName}`;
    this.cLessonForm.get('lessonEmployee').setValue(t);
  }

  getEmpName(employee : any) {
    return `${employee.data.appUser.firstName} ${employee.data.appUser.lastName}`;
  }

  getEmpValue(employee : any) {
    return `${employee.data.employeeID}`;
  }

  submitForm() {

  }

  checkEndLoad() {
    if (this.employeesLoadFlag && this.categoriesLoadFlag) {
      this.global.endNativeLoad();
    }
  }

  validateForm() { 

    this.validExercises = false;

    if (this.cLessonForm.invalid || this.exercises.length == 0)
      return;

    const test = this.exercises.filter(e => e.exercisePostID == -1);

    console.log('tst', test);
    if (test.length != 0)
      return;

    this.validExercises = true;
  }

  setImage(emp : any) {
    this.showImage = false;
    const empID = emp.value.split(',')[0];
    const employee = this.employees.find(e => e.data.employeeID == empID);
    if (employee.data.photo != null) {
      this.showImage = true;
      this.imgSrc = this.createImg(employee.data.photo);
    }
  }

  createImg (src : string) {
    return `https://localhost:44383/Resources/Employees/Images/${src}`;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  get errorControl() {
    return this.cLessonForm.controls;
  }

}

export class exerciseObjs {

  constructor(id : number) {
    this.id = id;
  }

  id : number;
  exercisePostID : number = -1;
  category : any;
  exercise : any;
  categoryset : boolean = false;

}