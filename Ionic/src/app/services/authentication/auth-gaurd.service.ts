import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RepoService } from '../repo.service';
import { StoreService } from '../storage/store.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  roles : any;
  userRole! : string;

  constructor(private router: Router, private auth: AuthService, private storage : StoreService, private repo : RepoService) { }

  async canActivate(next: ActivatedRouteSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {
    var roles = next.data.roles; //this contains the roles passed from the router
    // console.log(roles);


    return new Promise((res, rej) => {
      this.storage.getKey('token').then(token => {
        this.repo.getUserRole(token).subscribe(r => {
          const role = r.role;
          //check if user has required role with API
          var flag = false;
          roles.map(el => {
            if (el == role) {
              flag = true;
              return;
            }
          })
  
          //check if user is logged in
          if (!this.auth.getState()) {
            flag = false;
          }
          
          //if output == false -> redirect to login else continue
          if (!flag) {
            this.router.navigate(['login']);
            console.log('auth gaurd sent back to login')
            // return false; //prevent lazy load carrying on
            res(false);
          }
          res(true);
  
        })
      })
    })

    /////////////



  }

}
