import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}
  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
              console.log(request.url + ' Interceptor Called');
              if (this.cookieService.check('accessToken')) {
                request = request.clone({
                  withCredentials: true,
                  setHeaders: {
                    Authorization: `Bearer ${this.cookieService.get('accessToken')}`
                  }
                });
              }
              return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            console.log('http response event', event);
                        }
                        return event;
                    },
                    (error: HttpErrorResponse) => {
                        console.log(error);
                    })
                );
    }
}
