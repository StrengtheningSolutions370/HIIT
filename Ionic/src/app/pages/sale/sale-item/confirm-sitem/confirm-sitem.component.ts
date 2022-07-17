import { Component, Input} from '@angular/core';
import { SaleItem } from 'src/app/models/sale-item';
import { GlobalService } from 'src/app/services/global/global.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-confirm-sitem',
  templateUrl: './confirm-sitem.component.html',
  styleUrls: ['./confirm-sitem.component.scss'],
})
export class ConfirmSitemComponent {
  @Input() choice: number;
  @Input() saleItem: any;
  @Input() categoryName: string;
  @Input() image : any;
  alertCtrl: any;

  constructor(public global: GlobalService, public saleService: SalesService) {
  }

  async checkMatch(name: string, description:string): Promise<boolean>{
    return this.saleService.matchingSaleItem(name,description).then(result => {
      console.log(result);
       if (result != false){
         this.global.showAlert("The title information entered already exists on the system","Title Already Exists");
         return true;
       } else {
         return false;
       }
     });
   }

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(saleItem: SaleItem){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.saleService.matchingSaleItem(saleItem.Name,saleItem.Description) != null)
      {
        console.log('Existing Sale Item: ' + saleItem.Name +' with description -> '+ saleItem.Description);
        this.global.showAlert('The Sale Item Information entered already exists on the system','Sale Item Already Exists')        
        return;
      }
      else{
        console.log('Add Sale Item from confirm:');
        //CallRepoToCreate
        this.saleService.createSaleItem(saleItem);
        this.global.dismissModal();
        this.global.showToast("The Sale Item has been successfully added!");
      }
    } else if (this.choice === 2){
      //CallRepoToUpdate
      await this.saleService.updateSaleItem(saleItem);
      this.global.dismissModal();
      this.global.showToast('The Sale Item has been successfully updated!');

    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.saleItem);
      this.global.dismissModal();
      this.saleService.addSaleItemInfoModal(this.saleItem);
    } else if (this.choice === 2){
      console.log('CHECK ID HERE');
      console.log(this.saleItem);
      this.global.dismissModal();
      this.saleService.updateSaleItemInfoModal(this.saleItem);
    }
  }
}
