import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { venue } from 'src/app/models/venue';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  base = 'https://localhost:44353/api/';

  httpOptions = {
    headers: new HttpHeaders ({
      ContentType: 'application/json',
    }),
  };

  constructor(public http: HttpClient) { }

  //Venue:
  getVenues(): Observable<any>{
    console.log(this.http.get(`${this.base}getvenues`, this.httpOptions)
    .pipe(map((result) => result)));
    return this.http.get(`${this.base}getvenues`, this.httpOptions)
    .pipe(map((result) => result));
  }
}
