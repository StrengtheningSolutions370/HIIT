/* eslint-disable @typescript-eslint/naming-convention */
export class cartLine {
    saleItemID?: number;
    name: string;
    quantityOnHand: number;
    priceHistory: [{
      date: Date;
      saleAmount: number;
      costAmount: number;
    }]
    quantityChange?: number;
    subTotal?:number;
}

