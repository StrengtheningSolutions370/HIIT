import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  roles : any;

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var roles = next.data.roles; //this contains the roles passed from the router
    // console.log(roles);

    //place API call to check the current role of the logged in user using the JWT token endpoint
    var roleFromAPI = 'client'; //for example the API returns 'admin'
    /////////////

    //check if the role returned from the API is in the array of roles allowed:
    var flag = false;
    roles.map(el => {
      if (el == roleFromAPI)
        flag = true;
    })
    
    //if output == false -> redirect to login else continue
    if (!flag) {
      this.router.navigate(['login']);
      return false; //prevent lazy load carrying on
    }

    return true;

  }

}
