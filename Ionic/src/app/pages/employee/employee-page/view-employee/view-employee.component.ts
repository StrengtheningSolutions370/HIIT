import { Component, OnInit, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static FileUpload: any[] | Type<any>;

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
