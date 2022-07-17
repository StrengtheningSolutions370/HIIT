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

  constructor(public global: GlobalService, public saleService: SalesService) {
  }

  async checkMatch(name: string, description:string): Promise<boolean>{
    return this.saleService.matchingSaleItem(name,description).then(result => {
      console.log(result);
       if (result != 0){
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
      this.checkMatch(saleItem.Name, saleItem.Description).then(result => {
        if (result == true){
          return;
        } else {
            if (this.choice === 1){
            console.log('Add Sale Item from confirm:');
            //CallRepoToCreate
            this.saleService.createSaleItem(saleItem);
            this.global.dismissModal();
            this.global.showToast("The Sale Item has been successfully added!");
          } else if (this.choice === 2){
            //CallRepoToUpdate
            this.saleService.updateSaleItem(saleItem);
            this.global.dismissModal();
            this.global.showToast('The Sale Item has been successfully updated!');    
          }
        }
      });
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      this.global.dismissModal();
      this.saleService.addSaleItemInfoModal(this.saleItem);
    } else if (this.choice === 2){
      this.global.dismissModal();
      this.saleService.updateSaleItemInfoModal(this.saleItem);
    }
  }
}
