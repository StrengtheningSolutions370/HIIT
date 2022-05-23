import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification-type',
  templateUrl: './qualification-type.page.html',
  styleUrls: ['./qualification-type.page.scss'],
})
export class QualificationTypePage implements OnInit {

  qualificationTypes = [
    {
      name : 'Diploma',
    },
    {
      name : 'Certificate',
    },
    {
      name : 'Postgraduate Study',
    },
    {
      name : 'Bachelors degree',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
