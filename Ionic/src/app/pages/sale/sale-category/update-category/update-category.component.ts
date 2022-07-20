import { Component, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { SaleCategory } from 'src/app/models/sale-category';
import { GlobalService } from 'src/app/services/global/global.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements ViewWillEnter {
  @Input() saleCategory: SaleCategory;

  uSaleCategoryForm: FormGroup = new FormGroup({
    categoryDescription: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required])
  });

  constructor(private global: GlobalService, public fb: FormBuilder,
  public saleService: SalesService) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
      return this.uSaleCategoryForm.controls;
    }

    ionViewWillEnter() {
      console.log('UpdateSaleCategory-ViewWillEnter');
      console.log(this.saleCategory);
      if (this.saleCategory == null){
        this.global.showAlert("Sale Category not passed to update","ERROR");
        this.global.dismissModal();
      }
      this.uSaleCategoryForm.controls.categoryName.setValue(this.saleCategory.name);
      this.uSaleCategoryForm.controls.categoryDescription.setValue(this.saleCategory.description);
    }

    submitForm() {
      if (!this.uSaleCategoryForm.valid) { //If the form has any validation errors, the form will not be submitted.
        console.log('Please provide all required fields');
        return false;
      }
      else
      {
        console.log('InsideUpdateSubmit:');
        var temp = new SaleCategory();
        const choice = 2;
        temp = {
          saleCategoryID: this.saleCategory.saleCategoryID,
          name: this.uSaleCategoryForm.value['categoryName'],
          description: this.uSaleCategoryForm.value['categoryDescription'],
          items: null
        };
         console.log(temp);
         this.saleService.confirmSaleCategoryModal(choice,temp);
         this.global.dismissModal();
      }
  }
}
