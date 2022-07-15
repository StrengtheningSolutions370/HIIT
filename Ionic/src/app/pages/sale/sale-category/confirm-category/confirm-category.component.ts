import { Component, Input} from '@angular/core';
import { SaleCategory } from 'src/app/models/sale-category';
import { GlobalService } from 'src/app/services/global/global.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-confirm-category',
  templateUrl: './confirm-category.component.html',
  styleUrls: ['./confirm-category.component.scss'],
})
export class ConfirmCategoryComponent{
  @Input() choice: number;
  @Input() saleCategory: SaleCategory;

  constructor(private global: GlobalService, public saleService: SalesService) {
  }

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(saleCategory: SaleCategory){
    //search duplicates
    if (this.saleService.matchingSaleCategory(saleCategory.name) != null &&
    this.saleService.matchingSaleCategory(saleCategory.description) != null)
    {
      console.log('Existing Sale Category: ' + saleCategory.name +': '+ saleCategory.description);
      this.global.showAlert('The Sale Category Information entered already exists on the system','Sale Category Already Exists')
      return;
    }
    if (this.choice === 1){      
        console.log('Add Sale Category from confirm:');
        //CallRepoToCreate
        await this.saleService.createSaleCategory(saleCategory);
        this.global.dismissModal();
        this.global.showToast('The Sale Category has been successfully added!');
    } else if (this.choice === 2){
      console.log('Update Sale Category from confirm:');
      //CallRepoToUpdate
      await this.saleService.updateSaleCategory(saleCategory.saleCategoryID,saleCategory);
      this.global.dismissModal();
      this.global.showToast('The Sale Category has been successfully updated!');
    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.saleCategory);
      this.global.dismissModal();
      this.saleService.addCategoryInfoModal(this.saleCategory);
    } else if (this.choice === 2){
      console.log(this.saleCategory);
      this.global.dismissModal();
      this.saleService.updateCategoryInfoModal(this.saleCategory);
    }
  }

}
