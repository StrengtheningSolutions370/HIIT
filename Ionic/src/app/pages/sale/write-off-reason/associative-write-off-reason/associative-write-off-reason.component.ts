import { Component, Input, OnInit } from '@angular/core';
import { WriteOffReason } from 'src/app/models/write-off-reason';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-associative-write-off-reason',
  templateUrl: './associative-write-off-reason.component.html',
  styleUrls: ['./associative-write-off-reason.component.scss'],
})
export class AssociativeWriteOffReasonComponent implements OnInit {
  @Input() writeOffReason: WriteOffReason;

  constructor(public global: GlobalService) { }

  ngOnInit() {}

}
