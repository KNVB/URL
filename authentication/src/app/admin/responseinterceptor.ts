import { HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    intercept(
        req: import("@angular/common/http").HttpRequest<any>, 
        next: import("@angular/common/http").HttpHandler):Observable<HttpEvent<any>> {
            return next.handle(req).pipe(
                map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            console.log('event', event);
                        }
                        return event;
                    },
                    (error: HttpErrorResponse) => {
                        console.log(error);
                    })
                );
            
    }
    constructor() { }
    
}