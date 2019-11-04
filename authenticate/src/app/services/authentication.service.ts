import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Location} from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenResult } from './authen-result';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public token: string;
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private location: Location) {
    this.token = null;
  }

  login(userName: string, password: string): Observable<any> {
    let requestParams = new HttpParams();
    const url = '../RestfulAPI/login';

    console.log(userName, (userName !== null));
    if (userName !== null) {
      requestParams = requestParams.set('userName', userName);
    }
    if (password !== null) {
      requestParams = requestParams.set('password',  password);
    }
    return this.http.post(url, requestParams)
            .pipe(
                map(
                  (authenResult: AuthenResult) => {
                    if (authenResult.resultCode === 0) {
                      this.setCookie(authenResult.accessToken);
                    }
                    return  authenResult.resultCode;
                  },
                (error: HttpErrorResponse) => {
                  return error;
                }));
  }
  logout() {
    this.cookieService.delete('accessToken', this.location.prepareExternalUrl(''));
  }
  setCookie(token: string) {
    const expiredDate = new Date();
    expiredDate.setHours(23);
    expiredDate.setMinutes(59);
    expiredDate.setSeconds(59);
    this.cookieService.set('accessToken', token,
    expiredDate,
    this.location.prepareExternalUrl(''),
    document.location.hostname);
  }
}
