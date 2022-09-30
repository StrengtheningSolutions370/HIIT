import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-associative-supplier',
  templateUrl: './associative-supplier.component.html',
  styleUrls: ['./associative-supplier.component.scss'],
})
export class AssociativeSupplierComponent implements OnInit {

  @Input() supplier : any;
  constructor(public global: GlobalService) { }

  ngOnInit() {console.log(this.supplier)}

  getDate (d : number){
    const temp = new  Date(d*1000);
    return temp.toDateString();
  }
}
