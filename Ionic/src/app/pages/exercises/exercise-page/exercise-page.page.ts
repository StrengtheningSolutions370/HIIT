import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RepoService } from 'src/app/services/repo.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/services/global/global.service';
import { UpdateExerciseComponent } from './update-exercise/update-exercise.component';
import { DeleteExerciseComponent } from './delete-exercise/delete-exercise.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})

export class ExercisePagePage implements OnInit {
public filter: string;

exerciseList: any[] = [];

exerciseSub: Subscription;

isLoading = true;

constructor(private modalCtrl: ModalController, public global : GlobalService, public exerciseService: ExerciseService, public repo: RepoService,  public sanitizer: DomSanitizer) { }

  fetchExercise() {
    this.isLoading = true;
    this.exerciseService.getAllExercises().subscribe(
      {
        next: data => {
          console.log('Fetching exercises from DB');
          console.log(data);
          this.isLoading = false;
          this.exerciseList = data;
        }
      }
    );
  }

  hasUrl(exe : any) {
    return new RegExp(/(http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?)|(^$)/).test(exe.url);
  }

  getEmbed(exe : any) {
    const e = this.global.YoutubeToEmbed(exe.url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(e);
  }

  view(exercise : any) {
    this.exerciseService.viewExerciseInfoModal(exercise);
  }

  async updateExerciseInfoModal(exe : any) {
    const modal = await this.modalCtrl.create({
      component : UpdateExerciseComponent,
      componentProps: {
        exe
      }
    });
    await modal.present();
  }

  async deleteExerciseInfoModal(exercise : any) {
    const modal = await this.modalCtrl.create({
      component : DeleteExerciseComponent,
      componentProps: {
        exercise
      }
    });
    await modal.present();
  }

  ngOnInit() {
    this.exerciseService.fetchExercisesEvent.subscribe(
      {
        next: res => {
          console.log('Fetch exercises again');
          this.fetchExercise();
        }
      }
    );
    this.exerciseService.fetchExercisesEvent.emit();
  }
}
