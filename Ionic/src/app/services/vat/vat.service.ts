import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { AddVatComponent } from 'src/app/pages/sale/vat/add-vat/add-vat.component';
import { DeleteVatComponent } from 'src/app/pages/sale/vat/delete-vat/delete-vat.component';
import { UpdateVatComponent } from 'src/app/pages/sale/vat/update-vat/update-vat.component';
import { ViewVatComponent } from 'src/app/pages/sale/vat/view-vat/view-vat.component';
import { ConfirmVatComponent } from 'src/app/pages/sale/vat/confirm-vat/confirm-vat.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  @Output() fetchVatsEvent = new EventEmitter<Vat>();

constructor(public repo: RepoService, private modalCtrl: ModalController) {
  //Receive the venues from the repo (API).
  this.repo.getVats().subscribe(result => {
    console.log('Vat List: Vat Service -> Get Vats');
    console.log(result);
    const tempResult = Object.assign(result);
    this._vatList.next(tempResult);
    console.log('Vat List: Vat Service -> Updated Vats');
    console.log(this._vatList);
  });
}

 //Methods
  //Add a vat to the vat list within the vat service.
  createVat(vat: any){
    const today = new Date();
    const vatTemp = {
      percentage : vat.percentage,
      date: today.toISOString()
    };
    this.repo.createVAT(vatTemp).subscribe(
      {
        next: () => {
          console.log('VAT CREATED');
          this.fetchVatsEvent.emit(vat);
        }
      }
    );
   }

   getAllVats(): Observable<any> {
     return this.repo.getVats();
   }

  //Receives a vat to update in the service vat list.
   async updateVat(id: number,vat: any) {
     return this.repo.updateVat(vat).subscribe(
       {
        next: () => {
          console.log('VAT UPDATED');
          this.fetchVatsEvent.emit(vat);
        }
       }
     );
   }

  //Receives a vat to delete in the service vat list.
   deleteVat(id: number){
     console.log('line 77 - > ' + id);
    this.repo.deleteVat(id).subscribe(
      {
        next: res => {
          console.log(res);
          console.log('VAT DELETED');
          this.fetchVatsEvent.emit();
        },
        error: err => {
          console.log('ÉRROR HERE');
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

  //Display the update vat modal.
  //This method receives the selected vat object, from the vat page, in the modal through the componentProps.
  async updateVatInfoModal(vat: Vat) {
    console.log('VatService: UpdateVatModalCall');
    const modal = await this.modalCtrl.create({
      component: UpdateVatComponent,
      componentProps:{
        vat
      }
    });
    await modal.present();
  }

  //Display the delete vat modal.
  //This method receives the selected vat object, from the vat page, in the modal through the componentProps.
  async deleteVatInfoModal(vat: Vat) {
    console.log('VatService: DeleteVatModalCall');

      const modal = await this.modalCtrl.create({
        component: DeleteVatComponent,
          componentProps: {
            vat
        }
      });

      //Update the current vat list with the vat list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getVats().subscribe(result => {
          const tempResult = Object.assign(result);
          this._vatList.next(tempResult);
          console.log('Updated vat list: Vat Service: delete vat');
          console.log(this._vatList);
        });
      });
      await modal.present();
    }


  //Display the view vat modal.
    //This method receives the selected vat object, from the vat page, in the modal through the componentProps.
  async viewVatInfoModal(vat: Vat) {
    console.log('VatService: ViewVatModalCall');
    let tempVat = new Vat();
    tempVat = Object.assign(vat);
    console.log(tempVat);
    const modal = await this.modalCtrl.create({
      component: ViewVatComponent,
      componentProps: {
        vat:tempVat
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  //Receives the selected vat from the vat page
  async confirmVatModal(choice: number, vat: any) {
    console.log('VatService: ConfirmVatModalCall');
    console.log(choice);
    if(choice === 1){
      console.log('Performing ADD');
      const modal = await this.modalCtrl.create({
        component: ConfirmVatComponent,
        componentProps: {
          vat,
          choice
        }
      });

      //Update the current vat list with the vat list from the confirm modal.
      modal.onDidDismiss().then(() => {

        this.repo.getVats();

      });

      await modal.present();

    } else if (choice === 2){

      console.log('Performing UPDATE');


      const modal = await this.modalCtrl.create({
        component: ConfirmVatComponent,
        componentProps: {
          vat,
          choice
        }
      });

      modal.onDidDismiss().then(() => {

        this.repo.getVats();

      });

      await modal.present();

    } else {

      console.log('BadOption: ' + choice);

    }
  }
}
