import { Component, Input, OnInit } from '@angular/core';
import { detectIE } from 'ngx-color-picker/dist/lib/helpers';
import { Employee } from 'src/app/models/employee';
import { GlobalService } from 'src/app/services/global/global.service';
import { deflateSync } from 'zlib';

@Component({
  selector: 'app-associative-employee',
  templateUrl: './associative-employee.component.html',
  styleUrls: ['./associative-employee.component.scss'],
})
export class AssociativeEmployeeComponent implements OnInit {

  @Input() employee : any;

  constructor(public global : GlobalService) { }

  ngOnInit() {
    console.log('ass.', this.employee);
  }

  getTime(date : any) : string {
    return date.startDateTime.split('T')[0];
  }

}
