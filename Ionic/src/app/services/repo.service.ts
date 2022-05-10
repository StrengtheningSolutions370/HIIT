import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VENUE } from 'src/app/models/venue';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  base = 'https://localhost:44353/api/';


  httpOptions = {
    headers: new HttpHeaders ({
      Accept: 'application/json',
      ContentType: 'application/json'      
    }),
  };

  constructor(public http: HttpClient) 
  {

  }

  //Venue:
  createVenue(venue: VENUE):Observable<any>{
    return this.http.post<any>(`${this.base}postVenue`,venue,this.httpOptions);
  }

  getVenues(): Observable<any>{
    return this.http.get(`${this.base}getVenues`, this.httpOptions);
  }

  updateVenue(venueId: number, venue:VENUE):Observable<any>{
    return this.http.put(`${this.base}putVenue?id=${venueId}`,venue, this.httpOptions);
  }

  deleteVenue(venueId: number):Observable<any>{
    return this.http.delete(`${this.base}deleteVenue?id=${venueId}`,this.httpOptions);
  }
}

