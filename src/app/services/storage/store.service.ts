import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setStorage(type: string, code:string){
    console.log(type,code);
  }

  getStorage(key: String){
    return 'fakeForNow';
  }
}
