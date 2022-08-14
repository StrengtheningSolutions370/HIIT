/* eslint-disable @typescript-eslint/naming-convention */
export class SaleItem {
    saleItemID?: number;
    name: string;
    photo?: string;
    description: string;
    //costPrice?: number;
    //price: number;
    quotable?: boolean;
    quantityOnHand: number;
    saleCategoryID?: number;
    saleCategory?:{
      saleCategoryID?: number;
      name?:string;
      description?:string;
    }
    priceHistory?: [{
        priceHistoryID?:number,
        date?:Date,
        costAmount:number,
        saleAmount:number;
      }];
}
