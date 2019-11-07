import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { ServerResponse } from '../services/server-response';
import { Router } from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {}
  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
              if (request.url.indexOf('/RestfulAPI/Admin/') > -1) {
                if (this.cookieService.check('accessToken')) {
                  request = request.clone({
                    withCredentials: true,
                    setHeaders: {
                      Authorization: `Bearer ${this.cookieService.get('accessToken')}`
                    }
                  });
                }
              }
              return next.handle(request).pipe(tap(() => {},
                (err: HttpErrorResponse) => {
                  const sr = err.error as ServerResponse;
                  console.log(sr);
                  switch (sr.returnCode) {
                    case -1 : alert('Session Expired.');
                              this.router.navigate(['/login']);
                              break;
                    case -10: alert('Unknow Error.');
                              break;
                  }
                  console.log(sr.errorMessage);
              }));
    }
}
