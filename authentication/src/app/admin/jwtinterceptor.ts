import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}
  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
              console.log('Interceptor Called');

              if (this.cookieService.check('accessToken')) {
                request = request.clone({
                  withCredentials: true,
                  setHeaders: {
                    Authorization: `Bearer ${this.cookieService.get('accessToken')}`
                  }
                });
              }
              return next.handle(request);
    }
}
