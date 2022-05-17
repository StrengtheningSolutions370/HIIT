import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Venue } from 'src/app/models/venue';
import { USER_ROLE } from '../models/userRole';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
  base = 'https://localhost:44383/api/';
  VenueController = 'Venues/'

  httpOptions = {
    headers: new HttpHeaders ({
      Accept: 'application/json',
      ContentType: 'application/json'
    }),
  };

  constructor(public http: HttpClient)
  {
    //CRUDS in this repo file need to be used by subscribing to them in the relevant service.
    //E.g to use getVenues(); it must be subscribed to in the venue service 
  }

  //USER_ROLE:
  //------
  //Create
  createUserRole(user_role:USER_ROLE):Observable<any>{
    return this.http.post<any>(`${this.base}postuserrole`,user_role,this.httpOptions);
  }
  //Read
  getUserRoles(): Observable<any>{
    return this.http.get(`${this.base}getuserroles`, this.httpOptions);
  }
  //Update
  updateUserRole(userId: number, user_role:USER_ROLE):Observable<any>{
    return this.http.put(`${this.base}putuserrole?id=${userId}`,user_role, this.httpOptions);
  }
  //Delete
  deleteUserRole(userId: number):Observable<any>{
    return this.http.delete(`${this.base}deleteuserrole?id=${userId}`,this.httpOptions);
  }
  //Exists
  userRoleExists(userId: number):Observable<any>{
    return this.http.delete(`${this.base}userroleexists?id=${userId}`,this.httpOptions);
  }


  //Venue:
  createVenue(venue: Venue):Observable<any>{
    return this.http.post<any>(`${this.base}postVenue`,venue,this.httpOptions);
  }
  //Get
  getVenues(): Observable<any>{
    console.log(`${this.base+this.VenueController}getVenues`);

    return this.http.get(`${this.base+this.VenueController}getVenues`, this.httpOptions);
  }

  updateVenue(venueId: number, venue:Venue):Observable<any>{
    return this.http.put(`${this.base}putVenue?id=${venueId}`,venue, this.httpOptions);
  }
  //Delete
  deleteVenue(venueId: number):Observable<any>{
    return this.http.delete(`${this.base}deleteVenue?id=${venueId}`,this.httpOptions);
  }
}

