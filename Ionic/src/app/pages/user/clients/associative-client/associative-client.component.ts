import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-associative-client',
  templateUrl: './associative-client.component.html',
  styleUrls: ['./associative-client.component.scss'],
})
export class AssociativeClientComponent implements OnInit {

  @Input() client : any;
  @Input() coriginal : any;

  constructor(public global  : GlobalService) { }

  ngOnInit() {
    console.log(this.client);
  }

  getDate(date : number) : string {
    return new Date(date * 1000).toLocaleDateString();
  }

}
