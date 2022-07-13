import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StoreService } from '../services/storage/store.service';
import { GlobalService } from '../services/global/global.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenTemp : string;

    constructor(private router: Router, private store: StoreService, private global: GlobalService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         this.store.getKey('token').then(result => this.tokenTemp = result);
        // this.tokenTemp = this.cookie.get('token');
        if (this.tokenTemp != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.tokenTemp)
            });
            console.log(clonedReq);
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        console.log("ERROR CAUGHT IN AUTH INTERCEPTOR:");
                        console.log(err);
                        this.global.showAlert(err.error);
                        if (err.status === 404){
                            this.global.showAlert(err.error);
                        }
                        //USER NOT LOGGED IN FOR AUTHENTICATED REQUESTS
                        if (err.status === 401) {
                            this.global.showAlert("Please make sure you are logged in");
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('/login');
                        } else if (err.status === 403) {
                            console.log("Forbidden");
                            //still need to implement forbidden
                        //this.router.navigateByUrl('/forbidden');
                        } 
                    }
                )
            );
        } else {
            return next.handle(req.clone());
        }
    }
}
