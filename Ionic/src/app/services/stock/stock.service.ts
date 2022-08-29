import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  @Output() fetchStockEvent = new EventEmitter<any>();

  constructor() { }
}
