import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { AddVatComponent } from 'src/app/pages/sale/vat/add-vat/add-vat.component';
import { DeleteVatComponent } from 'src/app/pages/sale/vat/delete-vat/delete-vat.component';
import { ViewVatComponent } from 'src/app/pages/sale/vat/view-vat/view-vat.component';
import { ConfirmVatComponent } from 'src/app/pages/sale/vat/confirm-vat/confirm-vat.component';
import { RepoService } from '../repo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  @Output() fetchVatsEvent = new EventEmitter<Vat>();

constructor(public repo: RepoService, private modalCtrl: ModalController) {
  //Receive the venues from the repo (API).
  this.getAllVats();
}

getAllVats() : Observable<any> {
  return this.repo.getVats();
}

 //Methods
  //Add a vat to the vat list within the vat service.
  createVat(vat: any){
    var today = new Date()
    let vatTemp = {
      percentage : vat.percentage,
      date: today.toISOString()
    }
    this.repo.createVAT(vatTemp).subscribe(
      {
        next: () => {
          console.log('VAT CREATED');
          this.fetchVatsEvent.emit(vat);
        }
      }
    )
   }



  //Receives a vat to delete in the service vat list.
   deleteVat(id: number){
    this.repo.deleteVat(id).subscribe(
      {
        next: res => {
          console.log(res);
          console.log('VAT DELETED');
          this.fetchVatsEvent.emit();
        },
        error: err => {
          console.log("ÉRROR HERE")
          console.log(err);
        }
      }
    );
   }

   matchingVat(input: string){
    console.log('vatService: Repo -> Matching Vat');
    this.repo.getMatchVat(input);
   }

   existingVat(id: number){
    console.log('vatService: Repo -> Existing Vat');
    this.repo.existsVat(id).subscribe(result =>
     console.log(result));
   }

  //Modals
  async addVatInfoModal(vat?: Vat) {
    const modal = await this.modalCtrl.create({
      component: AddVatComponent,
      componentProps:{
        vat
      }
    });
    await modal.present();
  }

  //Display the delete vat modal.
  //This method receives the selected vat object, from the vat page, in the modal through the componentProps.
  async deleteVatInfoModal(vat: Vat) {
    console.log("VatService: DeleteVatModalCall");
    
      const modal = await this.modalCtrl.create({
        component: DeleteVatComponent,
          componentProps: {
            vat
        }
      });
      await modal.present();
    }
  

  //Display the view vat modal.
    //This method receives the selected vat object, from the vat page, in the modal through the componentProps.
  async viewVatInfoModal(vat: Vat) {
    console.log("VatService: ViewVatModalCall");
    const modal = await this.modalCtrl.create({
      component: ViewVatComponent,
      componentProps: {
        vat
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected vat from the vat page
  async confirmVatModal(vat: any) {
    console.log('VatService: ConfirmVatModalCall - Performing ADD');
      const modal = await this.modalCtrl.create({
        component: ConfirmVatComponent,
        componentProps: {
          vat
        }
      });

      await modal.present();
  }
}
