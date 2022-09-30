import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';


@Component({
  selector: 'app-associative-lesson',
  templateUrl: './associative-lesson.component.html',
  styleUrls: ['./associative-lesson.component.scss'],
})
export class AssociativeLessonComponent implements OnInit {

  @Input() lesson: any

  constructor(public global : GlobalService) { }

  ngOnInit() {}

}
