/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Venue } from 'src/app/models/venue';
import { Title } from 'src/app/models/title';
import { USER_ROLE } from '../models/userRole';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
  base = 'https://localhost:44383/api/';
  VenueController = 'Venues/';

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

  //UserRole:
  //------
  //Create
  createUserRole(user_role: USER_ROLE): Observable<any>{
    return this.http.post<any>(`${this.base}postuserrole`,user_role,this.httpOptions);
  }
  //Read
  getUserRoles(): Observable<any>{
    return this.http.get(`${this.base}getuserroles`, this.httpOptions);
  }
  //Update
  updateUserRole(userId: number, user_role: USER_ROLE): Observable<any>{
    return this.http.put(`${this.base}putuserrole?id=${userId}`,user_role, this.httpOptions);
  }
  //Delete
  deleteUserRole(userId: number): Observable<any>{
    return this.http.delete(`${this.base}deleteuserrole?id=${userId}`,this.httpOptions);
  }
  //Exists
  userRoleExists(userId: number): Observable<any>{
    return this.http.delete(`${this.base}userroleexists?id=${userId}`,this.httpOptions);
  }


  //Venue:
  //------
  //Create
  createVenue(venue: any): Observable<any>{
    return this.http.post<any>(`${this.base+this.VenueController}add`,venue,this.httpOptions);
  }
  //Update
  updateVenue(venueId: number, venue: Venue): Observable<any>{
    return this.http.put(`${this.base+this.VenueController}update?id=${venueId}`,venue, this.httpOptions);
  }
  //Delete
  deleteVenue(venueId: number): Observable<any>{
    return this.http.delete(`${this.base+this.VenueController}delete?id=${venueId}`,this.httpOptions);
  }
  //GetAll
  getVenues(): Observable<any>{
    return this.http.get(`${this.base+this.VenueController}getAll`, this.httpOptions);
  }
  //GetMatch
  getMatch(input: string): Observable<any>{
    return this.http.get(`${this.base+this.VenueController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  exists(id: number): Observable<any>{
    return this.http.get(`${this.base+this.VenueController}exists?id=${id}`, this.httpOptions);
  }


  //Title:
  //------
  //Create
  createTitle(title: any): Observable<any>{
    return this.http.post<any>(`${this.base+this.TitleController}add`,title,this.httpOptions);
  }
  //Update
  updateTitle(titleId: number, title: Title): Observable<any>{
    return this.http.put(`${this.base+this.TitleController}update?id=${titleId}`,title, this.httpOptions);
  }
  //Delete
  deleteTitle(titleId: number): Observable<any>{
    return this.http.delete(`${this.base+this.TitleController}delete?id=${titleId}`,this.httpOptions);
  }
  //GetAll
  getTitles(): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}getAll`, this.httpOptions);
  }
  //GetMatch
  getMatch(input: string): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  exists(id: number): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}exists?id=${id}`, this.httpOptions);
  }


}

