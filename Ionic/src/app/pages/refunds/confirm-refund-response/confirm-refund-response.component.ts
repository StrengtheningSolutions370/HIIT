import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-confirm-refund-response',
  templateUrl: './confirm-refund-response.component.html',
  styleUrls: ['./confirm-refund-response.component.scss'],
})
export class ConfirmRefundResponseComponent implements OnInit {

  @Input() email : any;

  constructor(private modalCtrl : ModalController, private repo : RepoService, private global : GlobalService) { }

  ngOnInit() {
    console.log('email', this.email);
  }

  confirm() {
    this.repo.completeRefund(this.email).subscribe({
      next: (data : any) => {
        this.global.fetchRefunds.emit();
        this.modalCtrl.dismiss({
          confirmed: true
        });
      },
      error: (err : any) => {
        this.global.showAlert("Failed to respond to request, please try again.", "Error");
      }
    });
  }

  returnFrom() {
    this.modalCtrl.dismiss({
      confirmed: false
    });
  }

}
