import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { LessonService } from 'src/app/services/lesson/lesson.service';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { DeleteLessonComponent } from './delete-lesson/delete-lesson.component';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { ViewLessonComponent } from './view-lesson/view-lesson.component';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  noresults = false;

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
          if (this.lessons.length)
            this.noresults = true;
        });
        
      }
    });

    //trigger event for first fetch:
    this.lessonService.fetchLessonsEvent.emit();

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

  async deleteLesson(lesson : any) {
    const modal = await this.modalCtrl.create({
      component : DeleteLessonComponent,
      componentProps: {
        lesson
      }
    });
    await modal.present();
  }

  async viewLesson(lesson : any) {
    const modal = await this.modalCtrl.create({
      component : ViewLessonComponent,
      componentProps: {
        lesson
      }
    });
    await modal.present();
  }

}
