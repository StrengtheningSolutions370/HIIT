import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  roles : any;

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var roles = next.data.roles; //this contains the roles passed from the router
    // console.log(roles);

    //place API call to check the current role of the logged in user using the JWT token endpoint
    var roleFromAPI = 'client'; //for example the API returns 'admin'
    /////////////

    //check if user has required role with API
    var flag = false;
    roles.map(el => {
      if (el == roleFromAPI)
        flag = true;
    })

    //check if user is logged in
    if (!this.auth.getState()) {
      flag = false;
    }
    
    //if output == false -> redirect to login else continue
    if (!flag) {
      this.router.navigate(['login']);
      return false; //prevent lazy load carrying on
    }

    return true;

  }

}
