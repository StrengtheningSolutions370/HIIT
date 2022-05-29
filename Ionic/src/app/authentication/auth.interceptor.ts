import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StoreService } from '../services/storage/store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenTemp : string;

    constructor(private router: Router, private store: StoreService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         this.store.getKey('token').then(result => 
            this.tokenTemp = result);
        if (this.tokenTemp != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.tokenTemp)
            });
            console.log(clonedReq);
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status === 401) {
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
