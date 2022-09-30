import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-associative-write-off-reason',
  templateUrl: './associative-write-off-reason.component.html',
  styleUrls: ['./associative-write-off-reason.component.scss'],
})
export class AssociativeWriteOffReasonComponent implements OnInit {

  @Input() writeOffReason : any;

  constructor(public global : GlobalService) { }

  ngOnInit() {
    console.log(this.writeOffReason);
  }

  getDate(date : string) {
    return date.split('T')[0];
  }

}
