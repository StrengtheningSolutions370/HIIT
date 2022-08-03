import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { DeleteLessonComponent } from './delete-lesson/delete-lesson.component';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { ViewLessonComponent } from './view-lesson/view-lesson.component';
import Fuse from 'fuse.js'

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  noresults = false;
  q=0
  lessons : any[] = [];
  lessonsOriginal : any[] = [];

  constructor(private lessonService : LessonService, private global : GlobalService, private modalCtrl : ModalController) { }

  ngOnInit() {

    //subscribe to the fetch event emitter:
    this.lessonService.fetchLessonsEvent.subscribe({
      next: () => {
        this.noresults = false;
        this.global.nativeLoad("Loading...");

        this.fetchLessons().then((lessons : any) => {
          console.log('lessons fetch', lessons);
          this.lessons = lessons;
          this.lessonsOriginal = lessons;
          if (this.lessons == null)
            this.noresults = true;
        });
        
      }
    });

    //trigger event for first fetch:
    this.lessonService.fetchLessonsEvent.emit();

  }

  createImg (src : string) {
    if (src == null) {
      return null;
    }
    return `https://localhost:44383/Resources/Employees/Images/${src}`;
  }

  fetchLessons() : Promise<any> {
    return new Promise<any>((resolve, _) => {
      this.lessons = [];
      this.lessonsOriginal = [];
      this.lessonService.getAllLessons().subscribe({
        next: (data : any) => {
          resolve(data);
        }
      }).add(() => {
        this.global.endNativeLoad();
      });
    })
  }

  async addLesson() {
    const modal = await this.modalCtrl.create({
      component : AddLessonComponent
    })
    await modal.present();
  }

  async updateLesson(lesson : any) {
    const modal = await this.modalCtrl.create({
      component : UpdateLessonComponent,
      componentProps: {
        lesson
      }
    });
    await modal.present();
  }

  async deleteLesson(dellesson : any) {
    const formattedExercises = [];
    let q = 0;
    dellesson.exercises.forEach((el : any) => {
      formattedExercises.push({
        i: ++q,
        ExerciseName : el.name,
      });
    })
    const lesson = {
      name: dellesson.name,
      employee: `${dellesson.employee.appUser.firstName} ${dellesson.employee.appUser.lastName}`,
      exercises: formattedExercises,
      imgSrc: this.createImg(dellesson.employee.photo),
      showImage: dellesson.employee.image == null,
      lessonID: dellesson.lessonID
    }
    const modal = await this.modalCtrl.create({
      component : DeleteLessonComponent,
      componentProps: {
        lesson
      }
    });
    await modal.present();
  }

  async viewLesson(viewlesson : any) {
    const formattedExercises = [];
    let q = 0;
    viewlesson.exercises.forEach((el : any) => {
      formattedExercises.push({
        i: ++q,
        ExerciseName : el.name,
      });
    })
    const lesson = {
      name: viewlesson.name,
      employee: `${viewlesson.employee.appUser.firstName} ${viewlesson.employee.appUser.lastName}`,
      exercises: formattedExercises,
      imgSrc: this.createImg(viewlesson.employee.photo),
      showImage: viewlesson.employee.image == null,
      lessonID: viewlesson.lessonID
    }
    const modal = await this.modalCtrl.create({
      component : ViewLessonComponent,
      componentProps: {
        lesson
      }
    });
    await modal.present();
  }

  searchLesson(term : string) {

    this.noresults = false;

    if (term == '' || term == null) {
      this.lessons = this.lessonsOriginal;
      return;
    }

    const hits = new Fuse(this.lessonsOriginal, {
      keys: [
        'employee.appUser.firstName',
        'employee.appUser.lastName',
        'employee.qualificatoin.description',
        'employee.appUser.email',
        'exerciseses',
        'name'
      ]
    }).search(
      term
    );

    if (hits.length == 0)
      this.noresults = true;

    this.lessons = [];
    hits.map((el : any) => {
      this.lessons.push(el.item);
    });

  }

}
