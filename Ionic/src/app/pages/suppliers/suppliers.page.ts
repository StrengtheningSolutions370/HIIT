import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Fuse from 'fuse.js';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { AddSupplierComponent } from './supplier-page/add-supplier/add-supplier.component';
import { DeleteSupplierComponent } from './supplier-page/delete-supplier/delete-supplier.component';
import { UpdateSupplierComponent } from './supplier-page/update-supplier/update-supplier.component';
import { ViewSupplierComponent } from './supplier-page/view-supplier/view-supplier.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  isLoading = true;

  searching = false;
  searchTerm = '';
  noresults = false;

  suppliers : any[] = [];
  suppliersOriginal : any[] = [];

  constructor(private repo : RepoService, private global : GlobalService, private supplierService : SupplierService, private modalCtrl : ModalController) { }

  ngOnInit(): void {
    this.supplierService.fetchSuppliersEvent.subscribe(
      {
        next: () => {
          console.log('Fetching suppliers from DB');
          this.fetch();
          
        }
      }
    );
    this.supplierService.fetchSuppliersEvent.emit();
  }

  fetch() {
    this.repo.getSupplier().subscribe({
      next: data => {
        console.log(data);
        this.isLoading = false;
        this.suppliers = data;
        this.suppliersOriginal = data;
      }
    });
  }

  searchSupplier(event : string) {
    this.searching = true;

    this.searchTerm = event;

    if (this.searchTerm == '' || this.searchTerm == null) {
      this.searching = false;

      this.suppliers = this.suppliersOriginal;

      if (this.suppliers.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.suppliers, {
      keys: [
        'name',
        'cell',
        'address',
        'email',
      ]
    }).search(
      this.searchTerm
    );

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    this.suppliers = [];
    hits.map((el : any) => {
      this.suppliers.push(el.item);
    });
  }

  async updateSupplier(supplier : any) {
    const modal = await this.modalCtrl.create({
      component: UpdateSupplierComponent,
      componentProps: {
        supplier: supplier
      }
    });

    await modal.present();
    this.supplierService.closeUpdate.subscribe(() => {
      this.modalCtrl.dismiss();
      console.log('try dismiss');
    });

  }

  async deleteSupplier(supplier : any) {
    const modal = await this.modalCtrl.create({
      component: DeleteSupplierComponent,
      componentProps: {
        supplier: supplier
      }
    });

    await modal.present();
  }

  async viewSupplier(supplier : any) {
    const modal = await this.modalCtrl.create({
      component: ViewSupplierComponent,
      componentProps: {
        supplier: supplier
      }
    });

    await modal.present();
  }

  async addSupplierInfoModal() {
    const modal = await this.modalCtrl.create({
      component: AddSupplierComponent
    });

    await modal.present();
  }

}
