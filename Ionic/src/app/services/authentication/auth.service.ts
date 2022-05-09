import { Injectable } from '@angular/core';
import { StoreService } from '../storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StoreService ) { }

  async login(email:string, password:string): Promise<any>{
    //call api login
    await new Promise(f => setTimeout(f,5000));
    //set Local API key(userID)
    //Mock Data
    return await this.storage.setKey('uid','ASKJLDSAKDKJSAKJL');
  }

  async getId(){
    return (await this.storage.getKey('uid'));
  }

  signUp(formValue){}

  changePass(){

  }

  logout(){

  }
  
}
