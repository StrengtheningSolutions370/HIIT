import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { GlobalService } from 'src/app/services/global/global.service';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-delete-exercise',
  templateUrl: './delete-exercise.component.html',
  styleUrls: ['./delete-exercise.component.scss'],
})
export class DeleteExerciseComponent implements OnInit {

  @Input() exercise: Exercise;

  exName! : any;
  showVideo = false;
  embed! : any;

  constructor(public global: GlobalService,
    public exerciseService: ExerciseService, public sanitizer: DomSanitizer) { }

    ngOnInit() {
      console.log('DeleteExercise - ViewWillEnter');
      console.log(this.exercise);
      this.showVideo = RegExp(/(http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?)|(^$)/).test(this.exercise.url);
    }

    getEmbed(exe : any) {
      const e = this.global.YoutubeToEmbed(exe.url)
      return this.sanitizer.bypassSecurityTrustResourceUrl(e);
    }

    delete(id: number){
      this.exerciseService.deleteExercise(id);
      this.global.dismissModal();
      this.global.showToast('The exercise has been successfully deleted!');
    }

}
