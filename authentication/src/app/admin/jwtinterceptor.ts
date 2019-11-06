import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

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
              return next.handle(request).pipe(tap(() => {},
                (err: HttpErrorResponse) => {
                  console.log(err.status);
              }));
    }
}
