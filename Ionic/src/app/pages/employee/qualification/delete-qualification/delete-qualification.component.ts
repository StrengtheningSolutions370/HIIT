import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Qualification } from 'src/app/models/qualification';
import { GlobalService } from 'src/app/services/global/global.service';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

@Component({
  selector: 'app-delete-qualification',
  templateUrl: './delete-qualification.component.html',
  styleUrls: ['./delete-qualification.component.scss'],
})
export class DeleteQualificationComponent implements ViewWillEnter {
  @Input() qualification: Qualification;

  constructor(public global: GlobalService,
    public qualificationService: QualificationService) { }

    ionViewWillEnter() {
      console.log('DeleteTitle - ViewWillEnter');
      console.log(this.qualification);
    }

      //Send through the id of the selected title to be deleted in the title service.
  delete(id: number){
    this.qualificationService.deleteQualification(id).then(async resp => {

      console.log('resp', resp);

      if (resp.status == 200) {
        this.global.showToast('The qualification has been successfully deleted!');
        this.global.dismissModal();
      } else {
        await this.qualificationService.associativeQualificationModal(resp.error)
      }
    });;
  }

}
