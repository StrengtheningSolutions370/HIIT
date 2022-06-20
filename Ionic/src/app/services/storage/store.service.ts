import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  async setKey(keyIn: string, val: string){
    console.log('setStorage:');
    await Storage.set({
      key:keyIn,
      value: val
    });
    console.log('Storage Set:',keyIn,val);
  }

  async getKey(keyIn: string){
    return (await Storage.get({key:keyIn})).value;
  }

  async deleteKey(keyIn: string){
    return (await Storage.remove({key:keyIn}));
  }
}
