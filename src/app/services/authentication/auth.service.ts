import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { StoreService } from '../storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StoreService ) { }

  async login(email:string, password:string): Promise<any>{
    //call api login
    return await this.storage.setStorage('uid','ASKJLDSAKDKJSAKJL');
  }

  async getId(){
    return (await this.storage.getStorage('uid'));
  }

  signUp(){}

  changePass(){

  }

  logout(){

  }
  
}
