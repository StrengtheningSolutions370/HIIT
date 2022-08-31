import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})
export class AddBookingComponent implements OnInit {
  @Input() scheduleEvent: Schedule;
  constructor() { }

  ngOnInit() {}

}
